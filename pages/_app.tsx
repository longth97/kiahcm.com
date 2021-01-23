import "styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "styles/common.scss";
import "styles/responsive.scss";

import { AppProps } from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo/apollo";
import moment from "moment";
import CustomThemeProvider from "src/theme/theme";
import MasterPage from "src/component/website/master/MasterPage";

function App({ Component, pageProps }: AppProps) {
  moment.locale("vi");
  return (
    <ApolloProvider client={client}>
      <CustomThemeProvider>
          <Component {...pageProps} />
      </CustomThemeProvider>
    </ApolloProvider>
  );
}

export default App;
