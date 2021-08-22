import { Button, Stack, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination () {
    return(
        <Stack direction="row" mt="8" justify="space-between" align="center">
            <Box></Box>
            
            <Stack direction="row">
                <PaginationItem isCurrent page={1} />
                <PaginationItem  page={2} />
                <PaginationItem  page={3} />
                <PaginationItem  page={4} />
            </Stack>
            
        </Stack>
    );
}