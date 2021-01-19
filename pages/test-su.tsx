import Head from "next/head";
import React from "react";
import MenuList from "src/component/website/menu/MenuList";
import Container from "src/component/website/elemets/Container";
import CarouselProduct from "src/component/website/carousel/CarouselProduct";
import MasterPage from "src/component/website/master/MasterPage";
import DescriptionProduct from "src/component/website/description-product/DescriptionProduct";
import TableProducts from "src/component/website/table-product/TableProduct";

const fetData = [
  {
    name : "BT-50 Standard 4x4",
    price : "590.000.000 ",
    contacts : "0903 809 846",
  },
  {
    name : "BT-50 Deluxe 4x2",
    price : "625.000.000",
    contacts : "0903 809 846",
  },
  {
    name : "BT-50 Luxury 4x2",
    price : "664.000.000",
    contacts : "0903 809 846",
  },
  {
    name : "BT-50 Premium 4x4",
    price : "749.000.000",
    contacts : "0903 809 846",
  },

]

export default function Home() {
  const dateToFormat = new Date('1976-04-19T12:59-0500');

  return (

    <MasterPage pageName="San pham">

      <main id="pProduct" className="pProduct">

        <Container>
          <div className="contentProduct">

            <div className="contentDetails carousel">
              <CarouselProduct />
            </div>

            <div className="contentDetails description">
              <DescriptionProduct 
                gallery={"MAZDA"}
                galleryHref={"/"}
                nameProduct={"MAZDA3 SPORT"}
                // nameProductLink={"/"}
                codeProduct={"sususu28373ahuahd"}
                price = {"699,000,000 đ"}
              ></DescriptionProduct>

            </div>
            

          </div>
          
         
          <TableProducts dataList={fetData}></TableProducts>

        </Container>
          
      </main>
      <style jsx>{`
        .contentProduct{
          display: flex;
        }
        .contentDetails{
            width: 50%;
          
        }
        .description{
          margin-left: 2%;
        }
      `}</style>
    </MasterPage>

  );
}
