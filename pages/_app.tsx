import "../styles/globals.css";

import { AppProps } from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo/apollo";
import Home from "./index";
import { IntlProvider } from "react-intl";

const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::ddMMyyyy}",
}

function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
    <IntlProvider messages={messagesInFrench} locale="vi" defaultLocale="vi">
      <Component {...pageProps} />
    </IntlProvider>
  </ApolloProvider>;
}

export default App;
