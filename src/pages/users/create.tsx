import {Box, Divider, Flex, Heading, SimpleGrid, Stack, Button} from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import {Header} from "../../components/Header"
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useFormState } from "react-hook-form";


type CreateUser = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}

const createUserYupSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório!"),
    email: yup.string().required("E-mail é obrigatório!").email("E-mail válido"),
    password: yup.string().required("Senha é obrigatória!").min(6, "Mínimo 6 caracteres"),
    password_confirmation: yup.string().oneOf([null, yup.ref("password")], "Senha precisa ser igual!"),
})

async function handleCreateUser(user: CreateUser) {
    await new Promise(resolve => setTimeout(resolve, 2000));
}

export default function CreateUser() {

    const {control, register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createUserYupSchema)
    });
    
    const{errors} = useFormState({control});

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
                        <Input name="name" type="name" label="Nome Completo" {...register("name")} error={errors.name}/>
                        <Input name="email" type="email" label="E-mail" {...register("email")} error={errors.email}/>
                    </SimpleGrid>
                    <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                        <Input name="password" type="password" label="Senha" {...register("password")}error={errors.password}/>
                        <Input name="password_confirmation" type="password" label="Confirmar Senha" 
                        {...register("password_confirmation")} error={errors.password_confirmation}/>
                    </SimpleGrid>
                </Stack>

                <Flex mt="8" justify="flex-end">
                    <Stack direction="row">
                        <Link href="/users">
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                        </Link>
                        <Button isLoading={formState.isSubmitting} colorScheme="pink" onClick={handleSubmit(handleCreateUser)}>Salvar</Button>
                    </Stack>
                </Flex>
            </Box>
        </Flex>
    </Box>
    )
}