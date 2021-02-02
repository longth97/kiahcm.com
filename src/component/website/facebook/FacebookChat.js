//import useTranslation from '@/plugins/utils/useTranslation';
import { useEffect, useState } from 'react';

import CONFIG from 'web.config';
// const scriptContent2 = `
//     setTimeout(function(){
//     window.fbAsyncInit = function() {
//     FB.init({
//     xfbml : true,
//     version : 'v6.0'
//     });
//     };
//     (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//     fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));
//     }, 3000);
// `;
// const scriptContent = `
//     <!-- switch between vi_VN and en_US ?? -->
//     <!-- Facebook JS SDK -->
//     <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
// `;

const FacebookChatPlugin = ({
    color = "",
    className = ""
}) => {

    const [scriptInjected, setScriptInjected] = useState(false);
    const [queue, setQueue] = useState([]);

    //const { t } = useTranslation();

    useEffect(() => {
        // console.log("[FacebookChat] start useEffects");
        if (typeof window == "undefined") return;
        if (scriptInjected) return;

        // console.log("[Facebookchat] window and script not injected");
        // const FBChatScript = document.createElement();
        // (function (d, s, id) {
        // // }(document, 'script', 'facebook-jssdk'));
        // var js, fjs = document.getElementsByTagName("script")[0];
        // if (document.getElementById("facebook-jssdk")) return;
        // js = document.createElement("script"); js.id = "facebook-jssdk";
        // js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        // fjs.parentNode.insertBefore(js, fjs);




        const timeout = setTimeout(function () {
            // console.log("[FacebookChat]start set timeout ");
            // window.fbAsyncInit = function () {
            //     FB.init({
            //         appId: CONFIG.NEXT_PUBLIC_FB_APP_ID,
            //         autoLogAppEvents: true,
            //         xfbml: true,
            //         version: 'v8.0'
            //     });
            // };
            // (function (d, s, id) {
            //     var js, fjs = d.getElementsByTagName(s)[0];
            //     if (d.getElementById(id)) return;
            //     js = d.createElement(s); js.id = id;
            //     js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat/debug.js#xfbml=1&version=v6.0&autoLogAppEvents=1"
            //     fjs.parentNode.insertBefore(js, fjs);
            //     console.log("[FacebookChat] done ??")
            // }(document, 'script', 'facebook-jssdk'));

            // setScriptInjected(true);


            fb(FB => timeout && FB.XFBML.parse())
            fb(FB => timeout && FB.CustomerChat.show(true));
            fb(FB => timeout && FB.CustomerChat.showDialog(true));

            fb(FB => timeout && FB.AppEvents.logPageView());

            fb(FB => timeout && FB.getLoginStatus(response => {


                // {
                //     status: 'connected', 'not_authorized, 'unknown' (not logged in)
                //     authResponse: {
                //         accessToken: '...',  // contains an access token for the person using the app.
                //         expiresIn:'...',     // indicates the UNIX time when the token expires and needs to be renewed.
                //         signedRequest:'...', // a signed parameter that contains information about the person using the app.
                //         userID:'...'         // the ID of the person using the app.
                //     }
                // }

                console.log("[checkFacebookLoginStatus] response ", response);
                if (response && response.status === 'connected') {
                    // console.log("[checkFacebookLoginStatus] response connected ?", response);
                } else {
                    // The person is not logged into your webpage or we are unable to tell.
                    // console.log("[checkFacebookLoginStatus] not connected ?", response);
                }

            }))
        }, 3000);

        return () => {
            clearTimeout(timeout);

        }
    }, []);

    // useEffect(() => {
    //     if(FB) {
    //         console.log("FB", FB);
    //     }
    //     return () => {
    //         cleanup
    //     }
    // }, [scriptInjected])


    const fb = (callback) => {
        if (scriptInjected) {
            if (typeof window !== "undefined") {

                callback(window.FB);
            } else {
                // console.log("[FacebookChat] window is undefined");
            }
        } else {
            setQueue([...queue, callback]);
            if (!window.fbAsyncInit) {
                window.fbAsyncInit = () => {
                    window.FB.init({
                        appId: CONFIG.NEXT_PUBLIC_FB_APP_ID,
                        autoLogAppEvents: true,
                        xfbml: true,
                        cookie: true,
                        version: 'v9.0',
                    });

                    setScriptInjected(true);
                    queue.forEach(cb => cb(window.FB))
                    setQueue(null);
                };
                const skdScript = "https://connect.facebook.net/en_US/sdk.js";
                const customerChatScript = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";

                const fbScrips = [
                    { id: "facebook-jssdk", dataId: "2", script: customerChatScript },
                    { id: "facebook-jssdk", dataId: "1", script: skdScript }
                ];

                fbScrips.forEach(scriptInfo => {

                    let js, fjs = document.getElementsByTagName('script')[0];
                    // if (document.getElementById(scriptInfo.id)) return;
                    const injected = document.getElementById(scriptInfo.id);
                    if (injected) {
                        if (injected.dataset["id"] == scriptInfo.dataId) return;
                    }
                    js = document.createElement('script');
                    js.id = scriptInfo.id;
                    js.dataset.id = scriptInfo.dataId;
                    js.src = scriptInfo.script;
                    fjs.parentNode.insertBefore(js, fjs);
                })

                // var js, fjs = document.getElementsByTagName('script')[0];
                // if (document.getElementById('facebook-jssdk')) return;
                // js = document.createElement('script'); js.id = 'facebook-jssdk';
                // js.src = script;
                // fjs.parentNode.insertBefore(js, fjs);

            }
        }
    }

    return (<>
        <div id="fb-root"></div>
        <div
            className="fb-customerchat"
            attribution="setup_tool"
            page_id={CONFIG.NEXT_PUBLIC_FB_PAGE_ID}
            theme_color="#087CFE"
            greetting_dialog_display="show"
            logged_in_greeting="Chat ngay để được tư vấn"
            logged_out_greeting="Chat ngay để được tư vấn"
        >
        </div>
    </>);
}

export default FacebookChatPlugin;