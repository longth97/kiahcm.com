import asset from "plugins/assets/asset";
import { useState, useRef, useEffect } from "react";
// import { ReactNode } from "react";
import Slider from "react-slick";
import { Image } from "src/models/Image";

type CarouselProps = {
    images?: Image[],
}

type CarouselPopupProps = {
    images ?: Image[],
    status ?: boolean,
    settings : Object,
    handleClose : Function,
}

const fetchData = [
    {
        name: "slide 1",
        srcImg: "/image/demo/products/sp-01.png"
    },
    {
        name: "slide 2",
        srcImg: "/image/demo/products/sp-02.png"
    },
    {
        name: "slide 3",
        srcImg: "/image/demo/products/sp-03.png"
    },
]

function CarouselProduct(props?: CarouselProps) {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [nav3, setNav3] = useState(null);

    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);

    const sliderRef1 = useRef();
    const sliderRef2 = useRef();
    const sliderRef3 = useRef();

    useEffect(() => {
      
        setNav1(sliderRef1.current)
        setNav2(sliderRef2.current)
        setNav3(sliderRef3.current)

    }, []);

    useEffect(() => {
        // console.log(slideIndex);
        if(sliderRef3.current){
            sliderRef3.current.slickGoTo(slideIndex);
        }
        
    },[slideIndex])

    const settings1 = {
        
        dots: false,
        arrows: true,
        autoplaySpeed: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: nav2,
        ref : slider => (sliderRef1.current = slider),
        
    };

    const settings2 = {

        focusOnSelect: true,
        dots: false,
        arrows: true,
        autoplaySpeed: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: nav1,
        ref : slider => (sliderRef2.current = slider),
        afterChange: () => setUpdateCount( updateCount + 1 ),
        beforeChange: (current, next) => setSlideIndex( next ),

    };

    const settings3 = {

        dots: false,
        arrows: true,
        autoplaySpeed: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ref : slider => (sliderRef3.current = slider),

    };
    
    const [statusShow, setStatusShow] = useState (false);

    useEffect(() =>{},[])

    const handleShowHide = () => setStatusShow(!statusShow);

    return <div className="carouselProduct">

        {
            props.images

                ? <>
                    <div className="contentCarouselProduct big" onClick={handleShowHide} >
                        <Slider {...settings1}>
                            {
                                props.images.map((image: Image, index: number) => {
                                    return (
                                        <div key={index} className="itemCarousel" >
                                            <img src={image.url} />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                    <div className="contentCarouselProduct mini" >
                        <Slider {...settings2}>
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
                    </div>
                </>

                : <>
                    <div className="contentCarouselProduct big" onClick={handleShowHide}>
                        <Slider {...settings1}>
                            {
                                fetchData.map((value, index) => {
                                    return (
                                        <div key={index} className="itemCarousel" >
                                            <img src={asset(value.srcImg)} />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                    <div className="contentCarouselProduct mini" >
                        <Slider {...settings2}>
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
                    </div>
                </>
        }
 

        {
            props.images 
            ? <PopupView settings={settings3} status={statusShow} handleClose={handleShowHide} images={props.images} /> 
            : <PopupView settings={settings3} status={statusShow} handleClose={handleShowHide}/>
        }

        <style jsx>{`
            img{
                display:block;
                width:100%;
            }
            .contentCarouselProduct.big{

                position: relative;

                &::after{
                    content:"";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    z-index:2;
                }
            }
        `}</style>
    </div>
}

export default CarouselProduct;


const PopupView = ( props :  CarouselPopupProps)=>{

    return <div className={ props.status ? `carouselPopupView show` : `carouselPopupView hide` }>

        <div className="contentPopupView">
            {
                props.images

                    ? <Slider {...props.settings}>
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

                    : <Slider {...props.settings}>
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
            <p className="iconClosePopup" onClick={ () => props.handleClose() }><span></span></p>
        </div>
        

        <style jsx>{`
            .carouselPopupView{
                display: flex;
                margin-top: auto;
                margin-bottom: auto;
                padding: 0;
                position: fixed;
                width: 0;
                height:0;
                transition: 0.4s;
                opacity:0;
                left:50%;
                top:50%;
                transform: translate(-50, -50%) scale(0);
                overflow: hidden;
                
                img{
                    display:block;
                    width:100%;
                }

            }
            .contentPopupView{
                position: relative;
                width:100%;
                max-width: 1220px;
                padding: 25px;
                margin: auto;
                
            }
            .iconClosePopup{
                position: absolute;
                width: 30px;
                height: 30px;
                top: 0;
                right: 0;
                border: solid 1px #fff;
                background-color: #333;
                border-radius: 5px;
                box-sizing: border-box;
                cursor: pointer;
                transition: 0.3s;
                span{
                    position: relative;
                    display: flex;
                    width:100%;
                    height:100%;
                    border-radius: 5px;
                    box-sizing: border-box;
                    transition: 0.3s;

                    &::after{
                        content:"";
                        position: absolute;
                        width:100%;
                        height: 2px;
                        border-radius: 3px;
                        top: 49%;
                        left: 50%;
                        transform: translate(-50%,0) rotate(-45deg);
                        background-color: #fff;
                        transition: 0.3s;
                    }
                    &::before{
                        content:"";
                        position: absolute;
                        width:100%;
                        height: 2px;
                        border-radius: 3px;
                        top: 49%;
                        left: 50%;
                        transform: translate(-50%,0) rotate(45deg);
                        background-color: #fff;
                        transition: 0.3s;
                    }
                }

                &:hover > ::before, &:hover > ::after{
                   background-color: red;
                }

                
            }
            .carouselPopupView.show{
                position: fixed;
                z-index:99;
                padding: 50px;
                width:100vw;
                height:100vh;
                left:0;
                top:0;
                opacity:1;
                background-color: rgba(0,0,0,0.8);
                padding: 25px;
                transform:scale(1);
            }
        
        `}</style>

    </div>
}
