import { Button, Flex, Stack } from "@chakra-ui/react";
import {SubmitHandler, useForm, useFormState} from "react-hook-form";
import {Input} from "../components/Form/Input";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"

type SigninFormData = {
  email: string,
  password: string
}


const signInYupSchema = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório!").email("E-mail válido"),
  password: yup.string().required("Senha é obrigatória!")
})

export default function Home() {
  const {control, register, handleSubmit} = useForm({
    resolver: yupResolver(signInYupSchema)
  });
  const {errors} = useFormState({control: control});

  const handleSignIn:SubmitHandler<SigninFormData> = (values, event) => {
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
            error={errors.email}
            {...register("email")}
          />
          
          <Input
            type="password"
            id="password"
            name="password"
            label="Senha"
            error={errors.password}
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
