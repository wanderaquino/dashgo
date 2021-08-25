import Link, {LinkProps} from "next/link";
import { cloneElement } from "react";
import { ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement
}

export function ActiveLink ({children, ...rest} : ActiveLinkProps) {
    const activeLink = true;

    return (
        <Link {...rest}>
            {
                cloneElement(children, {color: activeLink ? "pink.400" : "gray.50"})
            }
            children
        </Link>
    )
}
