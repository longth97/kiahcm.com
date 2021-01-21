import { useRouter } from "next/router";
import PrimaryButton from "src/component/website/primary-button/PrimaryButton";

type DescriptionProduct = {
    gallery?: string,
    galleryHref?: string,
    nameProduct: string,
    // nameProductLink : string,
    codeProduct: string,
    price: number,
}

export default function Description(props: DescriptionProduct) {

    const router = useRouter()

    return <div className="descriptionProduct">

        <h4 className="listHref">
            <span onClick={() => router.push("/")}>
                Trang chủ
            </span>/
            <span onClick={() => router.push(props.galleryHref)}>
                {props.gallery}
            </span>
        </h4>
        <div className="price"><span>{props.price}</span></div>

        <h2 className="nameProduct"> {props.nameProduct} </h2>

        <div className="btnGroup">
            <PrimaryButton text="đăng ký lái thử"></PrimaryButton>
            <span className="margin"></span>
            <PrimaryButton text="Báo giá cho tôi"></PrimaryButton>
        </div>

        <div className="codeProduct">
            <h4>Mã : <span>{props.codeProduct}</span></h4>
        </div>
        <div className="galleryProduct">
            <h4>Danh mục : <span>{props.gallery}</span></h4>
        </div>
        <style jsx>{`
            .listHref{
                text-transform: uppercase;
                padding: 10px 0;
                font-size: 1vw;
                color: #888;
                span{
                    margin-right: 5px;
                }
                span:nth-child(n+1){
                    margin-left: 5px;
                }
                span:nth-child(1){
                    margin-left: 0;
                }
            }
            .descriptionProduct{
                position: relative;
                
            }
            .price{
                position : absolute;
                z-index: 2;
                background-color: rgb(221, 132, 17);
                color: #fff;
                font-size: 2vw;
                transform: skew(-15deg);
                padding: 10px 20px;
                right: 0;
                top: 10px;
            }
            .nameProduct{
                font-family: "Roboto-Bold";
                font-size: 2vw;
                padding: 10px 0;
                position: relative;
                margin-bottom: 20px;
                text-transform: uppercase;
                color: rgb(85, 85, 85);
                &::after{
                    content: "";
                    position: absolute;
                    width:30px;
                    height: 3px;
                    background-color: #cacaca;
                    top: 100%;
                    left:0;
                }
            }
            .btnGroup{
                padding: 20px 0;
                display: flex;
                flex-direction: row;
                justify-content:flex-start;
                .margin{
                    width:20px;
                }
            }
            .codeProduct,.galleryProduct{
                padding: 20px 0;
                padding-top: 10px;
                margin-top: 10px;
                border-top: 1px #999 dotted;
                font-size: 1vw;
                color: #888;
                text-transform: uppercase;
            }
        `}</style>
    </div>
}