import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useContext } from "react";
import { createContext, ReactNode } from "react";

interface SidebarDrawerProviderProps {
    children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);


export function SiderbarProvider ({children} : SidebarDrawerProviderProps) {
    const disclosure = useDisclosure();
    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);