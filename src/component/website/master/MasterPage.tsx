import Head from "next/head";
import CONFIG from "web.config";
import { useRouter } from "next/router";
// import { NextSeo } from 'next-seo';
import asset from "plugins/assets/asset";
import { type } from "os";
import { ReactNode } from "react"
import React from "react";
import MenuList from "src/component/website/menu/MenuList";
import Container from "src/component/website/elemets/Container";

type Props = {
  pageName?: string,
  children: ReactNode,
}

const BlankMasterPage = (props: Props) => {
  const router = useRouter();

  return (
    <>
      {/* <NextSeo
        nofollow={CONFIG.environment != "production"}
        noindex={CONFIG.environment != "production"}
      /> */}

      <Head>

        <title>
          {props.pageName || "Trang chủ"} | {CONFIG.site.title}
        </title>

        <meta name="description" content={CONFIG.site.description}></meta>

        <link rel="shortcut icon" href={`${CONFIG.getBasePath()}/favicon.ico`} />

        <meta property="og:title" content={CONFIG.site.title} />
        <meta property="og:description" content={CONFIG.site.description} />
        <meta property="og:url" content={CONFIG.getBasePath() + router.asPath} />
        <meta property="og:image" content={`${CONFIG.getBasePath()}/share.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="fb:app_id" content={CONFIG.NEXT_PUBLIC_FB_APP_ID} />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link href={asset("/dashkit/fonts/cerebrisans/cerebrisans.css")} rel="stylesheet" />
      </Head>
      <header>
        <Container>
          <MenuList></MenuList>
        </Container>
      </header>
      {props.children}
      <footer>
        <a href="https://kmasoft.vn/" target="_blank">
          <img src={asset("/kmasoft.png")} height="50px" />
          <span style={{paddingLeft: '20px'}}>Design by KMASoft</span>
        </a>
      </footer>
    </>
  );
};

export default BlankMasterPage;
