import {Flex, useBreakpointValue, IconButton, Icon} from "@chakra-ui/react";
import Logo from "./Logo";
import { Profile } from "./Profile";
import Search from "./Search";
import { Notifications } from "./NotificationsNav";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header () {
    const {isOpen, onOpen} = useSidebarDrawer();
    
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

            {!isWideScreen && (
                <IconButton 
                    icon={<Icon as={RiMenuLine} />} 
                    aria-label="Open Navigation Menu"
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}/>
            )}
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