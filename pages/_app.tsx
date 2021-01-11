import "../styles/globals.css";

import { AppProps } from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo/apollo";

function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
    
  </ApolloProvider>;
}

export default App;
