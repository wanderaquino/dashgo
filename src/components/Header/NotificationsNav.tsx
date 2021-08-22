import { Stack, Icon,  } from "@chakra-ui/react"
import { RiNotificationLine, RiUserAddLine  } from "react-icons/ri"

export function Notifications () {
    return (
        <Stack 
        spacing={["8","6"]} 
        direction="row"
        mx={["8","6"]} 
        pr={["8","6"]} 
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700">
            
        <Icon as={RiNotificationLine} fontSize="20"></Icon>
        <Icon as={RiUserAddLine} fontSize="20"></Icon>
    </Stack>
    )
}