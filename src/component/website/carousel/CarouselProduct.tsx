import asset from "plugins/assets/asset";
import { useState } from "react";
// import { ReactNode } from "react";
import Slider from "react-slick";
import { Image } from "src/models/Image";

type CarouselProps = {
    images?: Image[],
}

type CarouselPopupProps = {
    images ?: Image[],
    status ?: boolean,
    // handleClose : boolean,
}

const fetchData = [
    {
        name: "slide 1",
        srcImg: "/image/demo/banner-01.png"
    },
    {
        name: "slide 2",
        srcImg: "/image/demo/banner-02.jpg"
    },
    {
        name: "slide 3",
        srcImg: "/image/demo/banner-01.png"
    },
]

function CarouselProduct(props?: CarouselProps) {

    const settings = {
        dots: true,
        // infinite: true,
        arrows: true,
        // centerMode: true,
        // centerPadding: 0,
        autoplaySpeed: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    const [statusShow, setStatusShow] = useState (false);

    const handleShow = ()=> setStatusShow(true);
    const handleClose = ()=> setStatusShow(false);

    return <div className="carouselProduct">

        {
            props.images

                ? <Slider {...settings}>
                    {
                        props.images.map((image: Image, index: number) => {
                            return (
                                <div key={index} className="itemCarousel" onClick={handleShow}>
                                    <img src={image.url} />
                                </div>
                            )
                        })
                    }
                </Slider>

                : <Slider {...settings}>
                    {
                        fetchData.map((value, index) => {
                            return (
                                <div key={index} className="itemCarousel" onClick={handleShow}>
                                    <img src={asset(value.srcImg)} />
                                </div>
                            )
                        })
                    }
                </Slider>
        }

        {
            props.images 
            ? <PopupView status={statusShow} images={props.images} /> 
            : <PopupView status={statusShow}/>
        }

        <style jsx>{`
            img{
                display:block;
                width:100%;
            }
        `}</style>
    </div>
}

export default CarouselProduct;


const PopupView = ( props :  CarouselPopupProps)=>{

    const settings = {

        dots: false,
        arrows: true,
        autoplaySpeed: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    return <div className={ props.status ? `carouselPopupView show` : `carouselPopupView hide` }>

        <div className="contentPopupView">
            {
                props.images

                    ? <Slider {...settings}>
                        {
                            props.images.map((image: Image, index: number) => {
                                return (
                                    <div key={index} className="itemCarousel">
                                        <img src={image.url} />
                                    </div>
                                )
                            })
                        }
                    </Slider>

                    : <Slider {...settings}>
                        {
                            fetchData.map((value, index) => {
                                return (
                                    <div key={index} className="itemCarousel">
                                        <img src={asset(value.srcImg)} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
            }
           
        </div>
        

        

        <style jsx>{`
            .carouselPopupView{
                display: block;
                margin-top: auto;
                margin-bottom: auto;
                padding: 50px;
                position: fixed;
                width: 0;
                height:0;
                transition: 0.4s;
                opacity:0;
                left:0;
                top:0;
                transform: translate(-50, -50%) scale(0);
                
                img{
                    display:block;
                    width:100%;
                }

            }
            .contentPopupView{
                position: relative;
                width:100%;
                max-width: 1220px;
                padding: 20px;
                margin: auto;
                
            }
            .iconClosePopup{
                position: absolute;
                width: 30px;
                height: 30px;
                top: 0;
                right: 0;
                background-color: #555;
            }
            .carouselPopupView.show{
                position: fixed;
                z-index:99;
                width:100vw;
                height:100vh;
                left:0;
                top:0;
                opacity:1;
                background-color: rgba(0,0,0,0.5);
                padding: 25px;
                transform: translate(-50, -50%) scale(1);
            }
        
        `}</style>

    </div>
}
