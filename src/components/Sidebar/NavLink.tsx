import { Link, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
    text: string,
    icon: ElementType
}
export function NavLink({text, icon, ...rest} : NavLinkProps) {
    return (
    <Link display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium" color="gray.400">{text}</Text>    
    </Link>
    )
}