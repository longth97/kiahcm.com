import Head from "next/head";
import CONFIG from "web.config";
import asset from "plugins/assets/asset";
import { useRouter } from "next/router";

export default function MetaCustom (props){
    const router = useRouter();
    return <Head>
      
      <title>
        {CONFIG.site.title} | {props.pageName || "Trang chủ"}
      </title>

      <link rel="shortcut icon" href={"/favicon.png"} />

      {/* Search engine */}
      <meta name="description" content={CONFIG.site.description} />
      <meta name="keywords" content={CONFIG.site.keyword} />
      <meta name="author" content="suphan" />
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
}