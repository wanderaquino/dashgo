import {Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Td, Th, Checkbox, Tbody, Text, useBreakpointValue, Spinner} from "@chakra-ui/react";
import {Header} from "../../components/Header"
import { Sidebar } from "../../components/Sidebar";
import {RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import Link from "next/link";
import { useUsers } from "../../services/hooks/users/useUsers";
import {useState} from "react";

export default function UserList() {

    const [currentPage, setCurrentPage] = useState(1);
    const {data, isLoading, error, isFetching} = useUsers(currentPage);

    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="4">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="bold">
                            Usuários
                            {!isLoading && isFetching && <Spinner ml="1rem" /> }
                        </Heading>
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
                    isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Erro ao obter dados dos usuários</Text>
                        </Flex>
                    ) :
                    (
                     <>
                     <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th></Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                        {
                            data.users.map(userData => (
                            <Tr key={userData.id}>
                                <Td px="0">
                                    <Box>
                                        <Text fontWeight="bold">{userData.name}</Text>
                                        <Text fontSize="sm" color="gray.300">{userData.email}</Text>
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
                            ))
                        }
                        </Tbody>
                    </Table>
                    <Pagination totalCountRegisters={data.totalItems} currentPage={currentPage} registersPerPage={10} onPageChange={setCurrentPage} />
                    </>
                    ))
                    
                    : 

                    (
                    isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Erro ao obter dados dos usuários</Text>
                        </Flex>
                    ) :

                    (
                    <>
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
                        {
                            data.users.map(userData => (
                            <Tr key={userData.id}>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">{userData.name}</Text>
                                        <Text fontSize="sm" color="gray.300">{userData.email}</Text>
                                    </Box>
                                </Td>
                                <Td overflowX="hidden" >{userData.createdAt}</Td>
                                <Td textAlign="center">
                                    <Button
                                        as="a"
                                        size="sm"
                                        colorScheme="pink">
                                        <Icon as={RiPencilLine} />
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                            ))
                        }
                        </Tbody>
                    </Table>
                    <Pagination totalCountRegisters={data.totalItems} currentPage={currentPage} registersPerPage={10} onPageChange={setCurrentPage}/>
                    </>)
                    )}
                </Box>
            </Flex>
       </Box>
    )
}