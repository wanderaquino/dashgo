import {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "../styles/theme";
import { SiderbarProvider } from "../contexts/SidebarDrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
        <SiderbarProvider>
          <Component {...pageProps} />
        </SiderbarProvider>
      </ChakraProvider>
  )
}

export default MyApp
