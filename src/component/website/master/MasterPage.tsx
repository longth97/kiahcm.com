import Head from "next/head";
import CONFIG from "web.config";
import { useRouter } from "next/router";
// import { NextSeo } from 'next-seo';
import asset from "plugins/assets/asset";
import { type } from "os";
import { ReactNode } from "react";
import React from "react";
import MenuList from "src/component/website/menu/MenuList";
import Container from "src/component/website/elemets/Container";
import MenuCustom from "src/component/website/menu/CustomMenu";
import { useState, useEffect, useRef } from "react";
import useScroll from "src/component/website/hooks-custom/useScroll";


type Props = {
  children: ReactNode;
  title: string;
};

const BlankMasterPage = (props: Props) => {
  const router = useRouter();

  const { scrollX, scrollY, scrollDirection } = useScroll();
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    // console.log("scrollY", scrollY);
    // console.log("scrollDirection", scrollDirection);
    if(scrollY && scrollY >= 200){
      setFixed(true);
    }else{
      setFixed(false);
    }
  }, [scrollY, scrollDirection] );

  return (
    <>
      {/* <NextSeo
        nofollow={CONFIG.environment != "production"}
        noindex={CONFIG.environment != "production"}
      /> */}

      <Head>
        <meta name="description" content={CONFIG.site.description}></meta>
        <title>
          {props.title} - {CONFIG.site.title}
        </title>
        <link
          rel="shortcut icon"
          href={`${CONFIG.getBasePath()}/favicon.ico`}
        />

        <meta property="og:title" content={CONFIG.site.title} />
        <meta property="og:description" content={CONFIG.site.description} />
        <meta
          property="og:url"
          content={CONFIG.getBasePath() + router.asPath}
        />
        <meta
          property="og:image"
          content={`${CONFIG.getBasePath()}/share.png`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="fb:app_id" content={CONFIG.NEXT_PUBLIC_FB_APP_ID} />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href={asset("/dashkit/fonts/cerebrisans/cerebrisans.css")}
          rel="stylesheet"
        />
      </Head>
      <header className={fixed === true ? "fixed": "" }>
        <Container>
          <MenuList></MenuList>
          <MenuCustom></MenuCustom>
        </Container>

      </header>
      <body>
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
      </body>
      <footer>
        <a href="https://kmasoft.vn/" target="_blank">
          <img src={asset("/kmasoft.png")} height="50px" />
          <span style={{ paddingLeft: "20px" }}>Design by KMASoft</span>
        </a>
      </footer>
    </>
  );
};

export default BlankMasterPage;
