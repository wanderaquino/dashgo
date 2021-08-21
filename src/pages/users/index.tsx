import {Box, Flex} from "@chakra-ui/react";
import {Header} from "../../components/Header/Header"
import { Sidebar } from "../../components/Sidebar/Sidebar";

export default function UserList() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
            </Flex>
        </Box>
    )
}