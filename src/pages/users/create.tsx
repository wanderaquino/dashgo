import {Box, Divider, Flex, Heading, SimpleGrid, Stack, Button} from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import {Header} from "../../components/Header"
import { Sidebar } from "../../components/Sidebar/Sidebar";

export default function CreateUser() {
    return (
    <Box>
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />
            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>
                <Divider my="6" borderColor="gray.700" />

                <Stack direction="column" spacing="8">
                    <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                        <Input name="name" type="name" label="Nome Completo" />
                        <Input name="email" type="email" label="E-mail" />
                    </SimpleGrid>
                    <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                        <Input name="password" type="password" label="Senha" />
                        <Input name="password_confirmation" type="password" label="Confirmar Senha" />
                    </SimpleGrid>
                </Stack>

                <Flex mt="8" justify="flex-end">
                    <Stack direction="row">
                        <Button colorScheme="whiteAlpha">Cancelar</Button>
                        <Button colorScheme="pink">Salvar</Button>
                    </Stack>
                </Flex>
            </Box>
        </Flex>
    </Box>
    )
}