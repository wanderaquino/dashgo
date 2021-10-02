import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    isCurrent?: boolean,
    page: number,
    onPageChange: (page: number) => void
}

export function PaginationItem ({isCurrent, page, onPageChange}: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button 
            size="sm"
            fontSize="xs"
            w="4"
            colorScheme="pink"
            disabled
            _disabled={
            {
                bgColor: "pink.500",
                cursor:"default"
            }}>
            {page}
            </Button>
        )
    }
    
    return (
        <Button 
        size="sm"
        fontSize="xs"
        w="4"
        bgColor="gray.700"
        onClick={() => onPageChange(page)}
        _hover={
            {
                bgColor: "gray.500"
            }
        }
        >
        {page}
        </Button>
    )
}