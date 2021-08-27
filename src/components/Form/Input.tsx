import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react"
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string
    error?: FieldError
}

export function Input({name, label, error, ...rest}: InputProps) {

    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <ChakraInput 
            name={name}
            id={name} 
            type={name}
            focusBorderColor="pink.500" 
            bgColor="gray.900"
            variant="filled"
            _hover={{bgColor:"gray.900"}}
            size="lg"
            {...rest}
          />

          {!!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
          )
          }
      </FormControl>
    )
}