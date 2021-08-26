import { Link as ChakraLink, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";


interface NavLinkProps extends ChakraLinkProps {
    text: string,
    icon: ElementType,
    href: string
}
export function NavLink({text, icon, href, ...rest} : NavLinkProps) {
    return (
        <ActiveLink href={href}>
            <ChakraLink display="flex" align="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{text}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}