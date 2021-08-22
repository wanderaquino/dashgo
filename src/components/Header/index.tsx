import {Flex, useBreakpointValue} from "@chakra-ui/react";
import Logo from "./Logo";
import { Profile } from "./Profile";
import Search from "./Search";
import { Notifications } from "./NotificationsNav";
export function Header () {

    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center">

            <Logo />

            {
                isWideScreen && (
                    <Search />
                )
            }
            
            <Flex align="center" ml="auto">
                <Notifications />
                <Profile showProfileData={isWideScreen}/>
            </Flex>
        </Flex>
    )
}