import asset from "plugins/assets/asset";
// import { ReactNode } from "react";
import Slider from "react-slick";
import { Image } from "src/models/Image";

type CarouselProps = {
    images?: Image[],
}

function CarouselCustomsComponent(props?: CarouselProps) {

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
    return <div className="carouselCustom">

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
        <style jsx>{`
            img{
                display:block;
                width:100%;
            }
        `}</style>
    </div>
}

export default CarouselCustomsComponent;
