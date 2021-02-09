import Head from "next/head";
import CONFIG from "web.config";
import { useRouter } from "next/router";
// import { NextSeo } from 'next-seo';
import asset from "plugins/assets/asset";
import { ReactNode } from "react";
import React from "react";
import Header from "src/component/website/header/Header";
import FooterCustom from "src/component/website/footer/FooterCustom";
import { NextSeo } from 'next-seo';

import MetaCustom from "src/component/website/meta/MetaCustom";

type Props = {
  children: ReactNode;
  title ?: string;
  pageName?: string; 
};


const MasterPage = (props: Props) => {
  
  
    return <>
        <NextSeo nofollow={CONFIG.environment != "production"}
            noindex={CONFIG.environment != "production"}/>
        <MetaCustom pageName={props.pageName}></MetaCustom>
        <body>
            <Header></Header>
          
            {props.children}

            <FooterCustom></FooterCustom>

        </body>
        
      </>
  
};

export default MasterPage;
