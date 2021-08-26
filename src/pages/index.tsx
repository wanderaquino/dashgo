import { Button, Flex, Stack } from "@chakra-ui/react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Input} from "../components/Form/Input";


type SigninFormData = {
  email: string,
  password: string
}


export default function Home() {
  const {register, handleSubmit} = useForm();

  const handleSignIn:SubmitHandler<SigninFormData> = (values) => {

  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex 
        as="form" 
        width="100%" 
        maxWidth={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
        >
        <Stack spacing="4">

          <Input
            type="email"
            id="email"
            name="email"
            label="E-mail"
            {...register("email")}
          />
          
          <Input
            type="password"
            id="password"
            name="password"
            label="Senha"
            {...register("password")}
          ></Input>
        
        </Stack>

          <Button 
            size="lg" 
            type="submit" 
            mt="6" 
            colorScheme="pink">
              Entrar
            </Button>
      </Flex>
    </Flex>
  )
}
