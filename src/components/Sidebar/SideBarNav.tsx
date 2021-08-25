import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function SidebarNav () {
    return (
        <Stack spacing="12" align="flex-start">
                
        <NavSection title="GERAL">
            <NavLink href="/dashboard" icon={RiDashboardLine} text="Dashboard" />
            <NavLink href="/users" icon={RiContactsLine} text="Usuários" />
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
                <NavLink href="/forms" icon={RiInputMethodLine} text="Formulários" />
                <NavLink href="/automation" icon={RiGitMergeLine} text="Automação" /> 
        </NavSection>

    </Stack>
    )
}