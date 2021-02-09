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
import renderHTML from "react-render-html";
import CustomThemeProvider from "src/theme/theme";
import CONFIG from "web.config";
// import MasterPage from "src/component/website/master/MasterPage";
// import dynamic from "next/dynamic";
// const FacebookChatPlugin = dynamic(() => import("src/component/website/facebook/FacebookChat"), { ssr: false });

function App({ Component, pageProps, router }: AppProps) {
  moment.locale("vi");
  // const isOnAdminPages = router && router.asPath && router.asPath.includes("/admin");
  const FB = `<!-- Load Facebook SDK for JavaScript -->
  <div id="fb-root"></div>
  <script>
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v9.0'
      });
    };

    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script>

  <!-- Your Chat Plugin code -->
  <div class="fb-customerchat"
    attribution="setup_tool"
    page_id="${CONFIG.NEXT_PUBLIC_FB_PAGE_ID}"
theme_color="#fa3c4c">
  </div>`;

  return (
    <ApolloProvider client={client}>
      <CustomThemeProvider>
        <Component {...pageProps} />
        {/* {!isOnAdminPages && <FacebookChatPlugin />} */}
        {renderHTML(FB)}
      </CustomThemeProvider>
    </ApolloProvider>
  );
}

export default App;
