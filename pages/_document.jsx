import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <link rel="shortcut icon" sizes="96x96" href="/fn.jpg" />
          <meta name="theme-color" content="#2a2a2a"></meta>
        </Head>
        <body>
          <ColorModeScript initialColorMode={"light"} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
