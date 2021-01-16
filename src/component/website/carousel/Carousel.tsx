import asset from "plugins/assets/asset";
// import { ReactNode } from "react";
import Slider from "react-slick";

type Carousel = {
    // children: ReactNode,
    data ?: any,

}



function CarouselCustomsComponent(props : Carousel) {

    const fetchData = [
        {
            name: "slide 1",
            srcImg : "/image/demo/banner-01.png"
        },
        {
            name: "slide 2",
            srcImg : "/image/demo/banner-02.jpg"
        },
        {
            name: "slide 3",
            srcImg : "/image/demo/banner-01.png"
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        centerMode: true,
        centerPadding :0,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    };
    return <div className="carouselCustom">

        {
            props.data 

            ? <Slider {...settings}>
                {
                    props.data.map((value, index)=>{
                        return (
                            <div key={index} className="itemCarousel">
                                {/* <h3>{value.name}</h3> */}
                                <img src={value.srcImg}/>
                            </div>
                        )
                    })
                }
            </Slider>

            :<Slider {...settings}>
                {
                    fetchData.map((value, index) =>{
                        return (
                            <div key={index} className="itemCarousel">
                                {/* <h3>{value.name}</h3> */}
                                <img src={asset(value.srcImg)}/>
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
  