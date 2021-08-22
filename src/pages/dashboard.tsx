import {Header} from "../components/Header";
import {Flex, SimpleGrid, Box, Text, theme} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Sidebar } from "../components/Sidebar/Sidebar";
const Chart = dynamic(() => import(
    "react-apexcharts"
), {ssr:false});

const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        theme: "dark",
        style: {
            fontSize: "10px",
            fontFamily: "Roboto"
        },
        x: {
            show: true,
            format: "dd MMM"
        }
    },
    xaxis: {
        type: "datetime",
        axisBorder: {
            color: theme.colors.gray[500]
        },
        axisTicks: {
            color: theme.colors.gray[500]
        },
        categories: [
            "2021-08-21T00:00:00.000Z",
            "2021-08-22T00:00:00.000Z",
            "2021-08-23T00:00:00.000Z",
            "2021-08-24T00:00:00.000Z",
            "2021-08-25T00:00:00.000Z",
            "2021-08-26T00:00:00.000Z"
        ]
    },
    fill: {
        opacity: 0.3,
        type: "gradient",
        gradient: {
            shade: "dark",
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
};

const series= [{
    name: "Total de Inscritos", data: [31,120,10,28,55,99]
}];
export default function Dashboard () {
    return (
        <Flex direction="column" h="100vh">
            <Header></Header>
            <Flex w="100%" my="6" maxWidth="1480" mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box p="8" bg="gray.800" borderRadius={8} pb="4">
                        <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                    <Box p="8" bg="gray.800" borderRadius={8}>
                        <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}