import asset from "plugins/assets/asset";

export default function FooterCustom () {
    return <footer>
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
}