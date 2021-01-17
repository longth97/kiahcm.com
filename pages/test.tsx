import Head from "next/head";
import React from "react";
import MenuList from "src/component/website/menu/MenuList";
import Container from "src/component/website/elemets/Container";
import { ProductCard } from "src/component/ProductCard/ProductCard";
import Carousel from "src/component/website/carousel/Carousel";
import MasterPage from "src/component/website/master/MasterPage";
import { NewsCard } from "src/component/NewsCard/NewsCard";
import TabViewProductDetail from "src/component/Detail/TabViews";

export default function Home() {
  const dateToFormat = new Date('1976-04-19T12:59-0500');
  const dummyData = [
    {
      "date": new Date('1976-04-19T12:59-0500'),
      "image": "https://mazda-automobile.vn/wp-content/uploads/2020/03/mazda2_sdn_galeria01-713x400.jpg",
      "title": "title 1",
      "description": "description 1"
    },
    {
      "date": new Date('1976-04-19T12:59-0500'),
      "image": "https://mazda-automobile.vn/wp-content/uploads/2020/03/mazda2_sdn_galeria01-713x400.jpg",
      "title": "title 2",
      "description": "description 2"
    },
    {
      "date": new Date('1976-04-19T12:59-0500'),
      "image": "https://mazda-automobile.vn/wp-content/uploads/2020/03/mazda2_sdn_galeria01-713x400.jpg",
      "title": "title 3",
      "description": "description 3"
    }
  ]
  return (

    <MasterPage pageName="Trang chủ">

      <main id="pHome" className="pHome">

        <Carousel />
        <div className="body-news">
          {
            dummyData.map((e, i) => <NewsCard
              key={i}
              date={e.date}
              url={e.image}
              title={e.title}
              description={e.description}
            />)
          }
        </div>

      </main>

    </MasterPage>

  );
}
