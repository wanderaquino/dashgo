import { Button, Flex, Stack } from "@chakra-ui/react";
import {Input} from "../components/Form/Input";

export default function Home() {
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
        >
        <Stack spacing="4">

          <Input
            type="email"
            id="email"
            name="email"
            label="E-mail"
          />
          
          <Input
            type="password"
            id="password"
            name="password"
            label="Senha"
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
