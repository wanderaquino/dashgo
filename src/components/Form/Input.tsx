import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps } from "@chakra-ui/react"

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string
}

export function Input(props: InputProps) {
    return (
        <FormControl>
            {!!props.label && <FormLabel htmlFor={props.name}>{props.label}</FormLabel>}
        <ChakraInput 
          name={props.name}
          id={props.name} 
          type={props.name}
          focusBorderColor="pink.500" 
          bgColor="gray.900"
          variant="filled"
          _hover={{bgColor:"gray.900"}}
          size="lg"
          {...props}
        />
      </FormControl>
    )
}