import Head from "next/head";
import CONFIG from "web.config";
import { useRouter } from "next/router";
// import { NextSeo } from 'next-seo';
import asset from "plugins/assets/asset";
import { ReactNode } from "react";
import React from "react";
import Header from "src/component/website/header/Header";
import { NextSeo } from 'next-seo';

type Props = {
  children: ReactNode;
  title: string;
  pageName?: string;
};

const MasterPage = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
            nofollow={CONFIG.environment != "production"}
            noindex={CONFIG.environment != "production"}
          />
          <Head>
    
            <title>
              {CONFIG.site.title} | {props.pageName || "Trang chủ"}
            </title>
    
            <link rel="shortcut icon" href={"/favicon.png"} />

            {/* Search engine */}
            <meta name="description" content={CONFIG.site.description} />
            <meta name="keywords" content={CONFIG.site.keyword} />
            <meta name="author" content="Su-Phan" />
            {/* socials */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={CONFIG.site.title} />
            <meta property="og:description" content={CONFIG.site.description} />
            <meta property="og:url" content={CONFIG.getBasePath() + router.asPath} />
            <meta property="og:image" content={`${CONFIG.getBaseUrl()}/sharefb.png`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={CONFIG.site.title} />
            <meta property="fb:app_id" content={CONFIG.NEXT_PUBLIC_FB_APP_ID} />
    
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0" />
            

        <link
          href={asset("/dashkit/fonts/cerebrisans/cerebrisans.css")}
          rel="stylesheet"
        />
      </Head>
      
      <body>
          <Header></Header>
        <div>
         
          
                
        </div>
        {props.children}
        <footer>
        <a href="https://kmasoft.vn/" target="_blank">
          <img src={asset("/kmasoft.png")} height="50px" />
          <span style={{ paddingLeft: "20px" }}>Design by KMASoft</span>
        </a>
        <a href="tel:0972205133" className="icon-call">
          <img src={asset("/image/icon-phone-call.png")} />
          <h5 className="text">
            Hotline : <b>097 220 5133</b>
          </h5>
        </a>
        <style jsx>{`
          .icon-call {
            .text {
              opacity: 0;
              right: 0%;
              position: absolute;
              width: 190px;
              font-family: Montserrat-Black;
              background-color: rgba(255, 255, 255, 0.9);
              padding: 3px 5px;
              border-radius: 2px;
              text-align: center;
              b {
                color: #ed1c24;
                font-weight: bold;
                font-size: 18px;
              }
            }
            cursor: pointer;
            position: fixed;
            bottom: 120px;
            right: 32px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
            border-color: #00aff2;
            background-color: rgba(0, 175, 242, 0.9);
            animation: play 2s ease infinite;
            -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            -ms-backface-visibility: hidden;
            backface-visibility: hidden;
            img {
              z-index: 2;
              animation: playCall 2s ease infinite;
              -webkit-backface-visibility: hidden;
              -moz-backface-visibility: hidden;
              -ms-backface-visibility: hidden;
              backface-visibility: hidden;
            }
          }
          .icon-call:hover {
            background-color: rgba(117, 235, 80, 1);
            animation: playHover 2s ease infinite;
            -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            -ms-backface-visibility: hidden;
            backface-visibility: hidden;
          }
          .icon-call:hover .text {
            right: 140%;
            transition: 0.5s;
            opacity: 1;
          }
          @keyframes play {
            0% {
              transform: scale(1);
            }
            15% {
              box-shadow: 0 0 0 5px rgba(0, 175, 242, 0.4);
            }
            25% {
              box-shadow: 0 0 0 10px rgba(0, 175, 242, 0.4),
                0 0 0 20px rgba(0, 175, 242, 0.2);
            }
            25% {
              box-shadow: 0 0 0 15px rgba(0, 175, 242, 0.4),
                0 0 0 30px rgba(0, 175, 242, 0.2);
            }
          }

          @keyframes playHover {
            0% {
              transform: scale(1);
            }
            15% {
              box-shadow: 0 0 0 5px rgba(117, 235, 80, 0.4);
            }
            25% {
              box-shadow: 0 0 0 10px rgba(117, 235, 80, 0.4),
                0 0 0 20px rgba(117, 235, 80, 0.2);
            }
            25% {
              box-shadow: 0 0 0 15px rgba(117, 235, 80, 0.4),
                0 0 0 30px rgba(117, 235, 80, 0.2);
            }
          }
          @keyframes playCall {
            0% {
              transform: rotate(30deg);
            }
            10% {
              transform: rotate(0deg);
            }
            20% {
              transform: rotate(30deg);
            }
            30% {
              transform: rotate(0deg);
            }
            40% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(0deg);
            }
            70% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
          @media screen and (max-width: 599px) {
            .icon-call {
              width: 40px;
              height: 40px;
              right: 32px;
            }
          }
        `}</style>
      </footer>
      </body>
      
    </>
  );
};

export default MasterPage;
