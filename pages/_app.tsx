import "styles/globals.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "styles/common.scss";
import "styles/responsive.scss";

import { AppProps } from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo/apollo";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
