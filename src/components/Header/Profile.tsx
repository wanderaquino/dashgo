import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
        <Box mr="4" textAlign="right">
            <Text>Wander Aquino</Text>
            <Text 
                color="gray.300" 
                fontSize="small"
            >wander_aquino@hotmail.com
            </Text>
        </Box>

        <Avatar size="md" name="Wander Aquino"></Avatar>

    </Flex>
    )
}