
import CONFIG from "web.config";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
// import { assertInputObjectType } from "graphql";
import asset from "plugins/assets/asset";
import useScroll from "src/component/website/hooks-custom/useScroll";

export default function menuCustomList() {
  const node = useRef();
  const router = useRouter();

  const { scrollX, scrollY, scrollDirection } = useScroll();
  const [fixed, setFixed] = useState(false);
  // const baseUrlShare = CONFIG.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    // console.log("scrollY", scrollY);
    // console.log("scrollDirection", scrollDirection);
    if(scrollY && scrollY >= 250){
      console.log("FIXED !!!")
      setFixed(true);
    }else{
      setFixed(false);
    }
  }, [scrollY, scrollDirection] );

  return (
    <div className={ fixed === true ? "menuCustomList fixed": "menuCustomList" }>
      <div ref={node}>
        <a onClick={() => router.push("/")} className="logoDesktop">
          <img src={asset("/logo.jpg")}/>
        </a>
        <a onClick={() => router.push("/")}>
          <span role="img" aria-label="Trang chủ"></span>
                Trang chủ
            </a>
        <a onClick={() => router.push("/san-pham")}>
          <span role="img" aria-label="Sản phẩm"></span>
                Sản phẩm
            </a>
        <a onClick={() => router.push("/dich-vu")}>
          <span role="img" aria-label="Dịch vụ"></span>
                Dịch vụ
            </a>
        <a onClick={() => router.push("/bang-gia")}>
          <span role="img" aria-label="Bảng giá"></span>
                Bảng giá
            </a>
        <a onClick={() => router.push("/tin-tuc")}>
          <span role="img" aria-label="Tin tức"></span>
                Tin tức
            </a>
        <a onClick={() => router.push("/gioi-thieu")}>
          <span role="img" aria-label="Giới thiệu"></span>
                Giới thiệu
            </a>
        <a onClick={() => router.push("/lien-he")}>
          <span role="img" aria-label="Liên hệ"></span>
                Liên hệ
            </a>
      </div>
      <style jsx>{`
        .menuCustomList.fixed{
            position: fixed;
            z-index:9;
            width:100%;
            background-color: #fff;
            right: 0;
            top: 0;
            padding: 5px 0;
            transition: 0.4s;
        }
        .menuCustomList.fixed{
              -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0) inset;
                -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0) inset;
                      box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0) inset;
        }
        .menuCustomList{
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            /* background-color: #a5c9ca; */
            padding:20px 0;
            color: #000;
            transition: 0.3s;
            >div{
              display: flex;
            }
            a{
                color: #000;
                padding: 5px 10px;
                font-size: 1vw;
                margin: 0 20px;
                text-transform: uppercase;
                display: flex;
                align-items: center;
                cursor: pointer;
                &:hover{
                  transition: 0.2s;
                  color: #ed1c24;
                }
                img {
                  width: 100px;
                }
            }
        }
        .logoDesktop{
          img{
            display: block;
            width: 170px;
          }
        }
        @media screen and (min-width : 1919px){
          .menuCustomList{
            a{
              font-size: 19px;
            }
          }
        }
        @media screen and (min-width : 1023px){
          .menuCustomList{
            display: flex;
          }
        }
      `}</style>
    </div>
  )
}
