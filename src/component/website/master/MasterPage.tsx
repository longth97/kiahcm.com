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
    
            <link rel="shortcut icon" href={`${CONFIG.getBasePath()}/favicon.png`} />

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
          <style
            dangerouslySetInnerHTML={{
              __html:
                '.fb-livechat, .fb-widget{display: none}.ctrlq.fb-button, .ctrlq.fb-close{position: fixed; right: 24px; cursor: pointer}.ctrlq.fb-button{z-index: 999; background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMjgiIGhlaWdodD0iMTI4cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB3aWR0aD0iMTI4cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxyZWN0IGZpbGw9IiMwMDg0RkYiIGhlaWdodD0iMTI4IiB3aWR0aD0iMTI4Ii8+PC9nPjxwYXRoIGQ9Ik02NCwxNy41MzFjLTI1LjQwNSwwLTQ2LDE5LjI1OS00Niw0My4wMTVjMCwxMy41MTUsNi42NjUsMjUuNTc0LDE3LjA4OSwzMy40NnYxNi40NjIgIGwxNS42OTgtOC43MDdjNC4xODYsMS4xNzEsOC42MjEsMS44LDEzLjIxMywxLjhjMjUuNDA1LDAsNDYtMTkuMjU4LDQ2LTQzLjAxNUMxMTAsMzYuNzksODkuNDA1LDE3LjUzMSw2NCwxNy41MzF6IE02OC44NDUsNzUuMjE0ICBMNTYuOTQ3LDYyLjg1NUwzNC4wMzUsNzUuNTI0bDI1LjEyLTI2LjY1N2wxMS44OTgsMTIuMzU5bDIyLjkxLTEyLjY3TDY4Ljg0NSw3NS4yMTR6IiBmaWxsPSIjRkZGRkZGIiBpZD0iQnViYmxlX1NoYXBlIi8+PC9zdmc+) center no-repeat #0084ff; width: 60px; height: 60px; text-align: center; bottom: 30px; border: 0; outline: 0; border-radius: 60px; -webkit-border-radius: 60px; -moz-border-radius: 60px; -ms-border-radius: 60px; -o-border-radius: 60px; box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16); -webkit-transition: box-shadow .2s ease; background-size: 80%; transition: all .2s ease-in-out}.ctrlq.fb-button:focus, .ctrlq.fb-button:hover{transform: scale(1.1); box-shadow: 0 2px 8px rgba(0, 0, 0, .09), 0 4px 40px rgba(0, 0, 0, .24)}.fb-widget{background: #fff; z-index: 1000; position: fixed; width: 360px; height: 435px; overflow: hidden; opacity: 0; bottom: 0; right: 24px; border-radius: 6px; -o-border-radius: 6px; -webkit-border-radius: 6px; box-shadow: 0 5px 40px rgba(0, 0, 0, .16); -webkit-box-shadow: 0 5px 40px rgba(0, 0, 0, .16); -moz-box-shadow: 0 5px 40px rgba(0, 0, 0, .16); -o-box-shadow: 0 5px 40px rgba(0, 0, 0, .16)}.fb-credit{text-align: center; margin-top: 8px}.fb-credit a{transition: none; color: #bec2c9; font-family: Helvetica, Arial, sans-serif; font-size: 12px; text-decoration: none; border: 0; font-weight: 400}.ctrlq.fb-overlay{z-index: 0; position: fixed; height: 100vh; width: 100vw; -webkit-transition: opacity .4s, visibility .4s; transition: opacity .4s, visibility .4s; top: 0; left: 0; background: rgba(0, 0, 0, .05); display: none}.ctrlq.fb-close{z-index: 4; padding: 0 6px; background: #365899; font-weight: 700; font-size: 11px; color: #fff; margin: 8px; border-radius: 3px}.ctrlq.fb-close::after{content: "X"; font-family: sans-serif}.bubble{width: 20px; height: 20px; background: #c00; color: #fff; position: absolute; z-index: 999999999; text-align: center; vertical-align: middle; top: -2px; left: -5px; border-radius: 50%;}.bubble-msg{width: 120px; left: -140px; top: 5px; position: relative; background: rgba(59, 89, 152, .8); color: #fff; padding: 5px 8px; border-radius: 8px; text-align: center; font-size: 13px;}',
            }}
          />
          <div className="fb-livechat">
            {" "}
            <div className="ctrlq fb-overlay" />
            <div className="fb-widget">
              {" "}
              <div className="ctrlq fb-close" />
              <div
                className="fb-page"
                data-href="https://www.facebook.com/KhangKiaGoVap"
                data-tabs="messages"
                data-width={360}
                data-height={400}
                data-small-header="true"
                data-hide-cover="true"
                data-show-facepile="false"
              >
                {" "}
              </div>
              <div className="fb-credit">
                {" "}
                <a href="https://chanhtuoi.com" target="_blank">
                  Powered by ChanhTuoi
                </a>{" "}
              </div>
              <div id="fb-root" />
            </div>
            <a
              href="https://m.me/KhangKiaGoVap"
              title="Gửi tin nhắn cho chúng tôi qua Facebook"
              className="ctrlq fb-button"
            >
              {" "}
              <div className="bubble">1</div>
              <div className="bubble-msg">Bạn cần hỗ trợ?</div>
            </a>
          </div>
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
