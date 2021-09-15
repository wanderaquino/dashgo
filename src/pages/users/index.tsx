import {Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Td, Th, Checkbox, Tbody, Text, useBreakpointValue} from "@chakra-ui/react";
import {Header} from "../../components/Header"
import { Sidebar } from "../../components/Sidebar";
import {RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import Link from "next/link";
import { useEffect } from "react";

export default function UserList() {
    
    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    });

    useEffect(() => {
        fetch("http://localhost:3000/api/users").then(response => response.json).then(data => console.log(data));
    }, [])

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="4">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="bold">Usuários</Heading>
                        <Link href="/users/create">
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="pink">
                                <Icon as={RiAddLine} fontSize={20}/>
                                {isWideScreen && "Criar Usuário"}
                            </Button>
                        </Link>

                    </Flex>
                    {!isWideScreen ? (
                     <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th></Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="0">
                                    <Box>
                                        <Text fontWeight="bold">Wander Aquino</Text>
                                        <Text fontSize="sm" color="gray.300">wander.aquino@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td px="0" textAlign="right">
                                    <Button
                                        as="a"
                                        size="sm"
                                        colorScheme="pink">
                                        <Icon as={RiPencilLine} />
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table> )
                    
                    : 

                    (
                    <Table colorScheme="whiteAlpha" size="sm">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de Cadastro</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Wander Aquino</Text>
                                        <Text fontSize="sm" color="gray.300">wander.aquino@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td overflowX="hidden" >03/08/2021</Td>
                                <Td textAlign="center" position="sticky" zIndex="999999">
                                    <Button
                                        as="a"
                                        size="sm"
                                        colorScheme="pink">
                                        <Icon as={RiPencilLine} />
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    )}
                    <Pagination />
                </Box>
            </Flex>
       </Box>
    )
}