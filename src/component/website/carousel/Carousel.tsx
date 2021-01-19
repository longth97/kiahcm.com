import { useQuery } from "@apollo/client";
import asset from "plugins/assets/asset";
import React from "react";
// import { ReactNode } from "react";
import Slider from "react-slick";
import { Loading } from "src/component/Loading/Loading";
import { HotImages } from "src/models/HotImages";
import { Image } from "src/models/Image";
import { CarouselQuery } from "src/services/CarouselQuery";

type HotImage = {
    hotImage: HotImages;
}

function CustomCarousel() {
    const { loading, error, data } = useQuery<HotImage>(CarouselQuery);
    if (loading) return <Loading />
    if (error) return <h1>Error: {error.message}</h1>

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
            data.hotImage.images
                ? <Slider {...settings}>
                    {
                        data.hotImage.images.map((image: Image, index: number) => {
                            return (
                                <div key={index} className="itemCarousel">
                                    <img src={image.url} />
                                </div>
                            )
                        })
                    }
                </Slider>
                : <div />
        }
        <style jsx>{`
            img{
                display:block;
                width:100%;
            }
        `}</style>
    </div>
}

export default CustomCarousel;
