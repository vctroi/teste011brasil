import '../styles/globals.css'

import Head from "next/head";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const GlobalStyle = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Victor Sousa</title>
      <meta name="description" content={"teste 011brasil"} />
      <meta name="keywords" content={"teste 011brasil"} />
    </Head>
    <CSSReset />
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          height: 100%;
          flex-direction: column;
          min-height: 100vh;
        }
        ::selection {
          color: #2a2a2a;
          background: #fcc135;
        }
        .css-ober8q > *:not(style) ~ *:not(style) {
          margin-top: 0px !important;
          margin: 0px !important;
        }
        #pg::-webkit-scrollbar-track,
        #body::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          background-color: #f5f5f5;
        }

        #pg::-webkit-scrollbar,
        #body::-webkit-scrollbar {
          width: 10px;
          background-color: #f5f5f5;
        }

        #pg::-webkit-scrollbar-thumb,
        #body::-webkit-scrollbar-thumb {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 6px rgba(70, 60, 60, 0.3);
          background-color: #c2c2c2;
        }
        @media screen and (min-width: 2600px) {
          #__next {
            display: none;
          }
        }
      `}
    />
    {children}
  </>
);

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "425px",
  lg: "768px",
  xl: "1024px",
  base: "1440",
  "2xl": "2560",
});

const theme = extendTheme({ initialColorMode: "light", breakpoints });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

