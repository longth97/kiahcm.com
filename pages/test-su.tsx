import Head from "next/head";
import React from "react";
import MenuList from "src/component/website/menu/MenuList";
import Container from "src/component/website/elemets/Container";
import CarouselProduct from "src/component/website/carousel/CarouselProduct";
import MasterPage from "src/component/website/master/MasterPage";

export default function Home() {
  const dateToFormat = new Date('1976-04-19T12:59-0500');

  return (

    <MasterPage pageName="Trang chủ">

      <main id="pProduct" className="pProduct">
            <CarouselProduct />
      </main>

    </MasterPage>

  );
}
