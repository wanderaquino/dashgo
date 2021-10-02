import { Stack, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";


interface PaginationProps {
    totalCountRegisters: number,
    registersPerPage: number,
    currentPage?: number,
    onPageChange: (page: number) => void
}

export function Pagination ({totalCountRegisters, registersPerPage = 10, currentPage = 1, onPageChange}:PaginationProps) {

    const siblingsCount = 2;

    const lastPage = Math.floor(totalCountRegisters / registersPerPage);

    function generatePagesArray (from: number, to: number) {
        return [...new Array (to-from)]
            .map((_, index) => {
                return from + index + 1
        }).filter(page => page > 0);
    }

    const previousPages = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];
    const nextPages = currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : [];

    return(
        <Stack direction="row" mt="8" justify="space-between" align="center">
            <Box></Box>
            
            <Stack direction="row">

                {currentPage > (1 + siblingsCount) && (
                    <>
                    <PaginationItem onPageChange={onPageChange} page={1} />
                    {currentPage > (2*siblingsCount) && <Text color="gray.300" width="8" textAlign="center">...</Text>}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange} key={page} page={page} />
                })}

                <PaginationItem onPageChange={onPageChange} page={currentPage} isCurrent />

                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange} key ={page} page={page} />
                })}

                {
                    (currentPage +1 + siblingsCount) < lastPage && <Text color="gray.300" width="8" textAlign="center">...</Text>
                }

                {(currentPage + siblingsCount) < lastPage && (
                    <PaginationItem onPageChange={onPageChange} page={lastPage} />
                )}


            </Stack>
            
        </Stack>
    );
}