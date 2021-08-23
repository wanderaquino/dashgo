import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({showProfileData =  true}: ProfileProps) {
    return (

        <Flex align="center">
            {showProfileData && (
            <Box mr="4" textAlign="right">
                <Text>Wander Aquino</Text>
                <Text 
                    color="gray.300" 
                    fontSize="small">
                    wander_aquino@hotmail.com
                </Text>
            </Box>
            )}
            <Avatar size="md" name="Wander Aquino" />
        </Flex>
    )
}