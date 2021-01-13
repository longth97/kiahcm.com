import CONFIG from "web.config";
import { useRouter } from "next/router";
// import PopupRule from "components/website/popup/PopupRule";
import { useRef, useState, useEffect } from "react";

type MenuProps = {
  open: boolean;
  setOpen: Function;
  setContext: Function;
};
const Menu = (props: MenuProps) => {
  const router = useRouter();
  const handleClick = () => {
    props.setOpen(!props.open);
    props.setContext(true);
  };

  const baseUrlShare = CONFIG.NEXT_PUBLIC_BASE_URL;

  // console.log(router);
  return (
    <div className="StyledMenu" open={props.open}>
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
      <a onClick={() => router.push("/ban-gia")}>
        <span role="img" aria-label="Bản giá"></span>
        Bản giá
      </a>
      <a onClick={() => router.push("/tin-tuc")}>
        <span role="img" aria-label="Tin tức"></span>
        Tin tức
      </a>
      <a onClick={() => router.push("/gioi-thieu")}>
        <span role="img" aria-label="Giới thiệu"></span>
        Giới thiệu
      </a>
      <a onClick={() => router.push("/gioi-thieu")}>
        <span role="img" aria-label="Liên hệ"></span>
        Liên hệ
      </a>
      {/* <a onClick={handleClick}>
            <span role="img" aria-label={"T&C"}></span>
            {"Thể lệ chương trình"}
        </a> */}
      <style jsx>{`
        .StyledMenu {
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: gray;
          transform: ${props.open ? "translateX(0)" : "translateX(-100%)"};
          height: 100vh;

          text-align: left;
          padding: 2rem;
          position: absolute;
          top: 0;
          left: 0;
          transition: transform 0.3s ease-in-out;
          @media (max-width: 1024px) {
            width: 30%;
          }

          @media (max-width: 768px) {
            width: 50%;
          }
          @media (max-width: 599px) {
            width: 100%;
          }

          a {
            font-size: 1.5rem;
            text-transform: uppercase;
            padding: 1rem 0;
            font-weight: bold;
            letter-spacing: 0.2rem;
            color: #fff;
            text-decoration: none;
            transition: color 0.3s linear;

            @media (max-width: 576px) {
              font-size: 1.5rem;
              text-align: center;
            }

            &:hover {
              color: #343078;
            }
          }
        }
      `}</style>
    </div>
  );
};

type BurgerProps = {
  open: boolean;
  setOpen: Function;
};

const Burger = (props: BurgerProps) => {
  return (
    <div className={"StyledBurger"} open={props.open} onClick={() => props.setOpen(!props.open)}>
      <div />
      <div />
      <div />
      <style jsx>{`
        .StyledBurger {
          position: absolute;
          top: 5%;
          left: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 2rem;
          height: 2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;

          &:focus {
            outline: none;
          }

          div {
            width: 2rem;
            height: 0.25rem;
            background: ${props.open ? "#FFF" : "#000000"};
            border-radius: 10px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;

            :first-child {
              transform: ${props.open ? "rotate(45deg)" : "rotate(0)"};
            }

            :nth-child(2) {
              opacity: ${props.open ? "0" : "1"};
              transform: ${props.open ? "translateX(20px)" : "translateX(0)"};
            }

            :nth-child(3) {
              transform: ${props.open ? "rotate(-45deg)" : "rotate(0)"};
            }
          }
        }
      `}</style>
    </div>
  );
};

export default function MenuDemo() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    console.log(status);
  }, [status]);

  const handleOutSidePopup = () => setStatus(false);

  const Popup = (statusShowPopup) => {
    switch (statusShowPopup) {
      case true:
        return (
          <PopupRule
            statusShow={true}
            handleOutSiteClose={handleOutSidePopup}
          ></PopupRule>
        );

      default:
        return <PopupRule statusShow={false}></PopupRule>;
    }
  };

  return (
    <div className="menuCustom_su">
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu
          open={open}
          setOpen={setOpen}
          status={status}
          setContext={setStatus}
        />
      </div>
      {/* {
        Popup(status)
      } */}
    </div>
  );
}

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
