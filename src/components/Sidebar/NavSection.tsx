import { Box, Text, Stack, Link, Icon } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine } from "react-icons/ri";

interface NavSectionProps {
    title: string,
    children: React.ReactNode
}
export function NavSection ({title, children} : NavSectionProps) {
    return (
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
            <Stack spacing="4" mt="8" align="stretch">
                {children}
            </Stack>
        </Box>
    )
}