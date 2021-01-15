import { CardMedia, Grid, Typography } from "@material-ui/core";
import React from "react";
import { DescriptionCar } from "./DescriptionCar";
import { ImageCar } from "./ImageCar";
import { CarName } from "./NameCar";
import { PriceRectangle } from "./PriceRectangle";

export const ProductCard = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="dashed-box">
          <ImageCar
            href="#"
            src="https://mazda-automobile.vn/wp-content/uploads/2020/03/NEW-MAZDA2-SPORT-DO.png"
          />
        </div>
        <div className="gold-box">
          <div className="name-title">
            <CarName name="ALL NEW MAZDA3" href="#" />
          </div>
          <div className="name-description">
            <DescriptionCar description=" NGOẠI THẤT MAZDA 3 Về kích thước tổng thể Mazda 3 2019, phiên bản SPORT LUXURY (Hatchback) và LUXURY (Sedan) chỉ khác nhau về chiều dài, các thông số khác gần như tương đồng nhau. Phiên bản hatchback" />
          </div>
        </div>
        <div className="green-box">
          <PriceRectangle price={100000000} />
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            position: relative;
            max-height: 600px;
          }

          .dashed-box {
            max-height: 70%;
            min-width: 70%;
            z-index: 1;
            margin-bottom: 1em;
          }
          .gold-box {
            background: #fff;
            position: absolute;
            z-index: 2;
            bottom: 1px;
            .name-title {
              text-align: center;
              padding-bottom: 15px;
            }
          }
          .green-box {
            position: absolute;
            z-index: 3; 
            right: 1px;
            top: 60%;
          }
        `}
      </style>
    </div>
  );
  // return (
  //   <div>
  //     <Grid
  //       className="dashedBox"
  //       container
  //       direction="column"
  //       alignItems="center"
  //       style={{ maxWidth: "800px" }}
  //     >
  //       <Grid item style={{ maxHeight: "320px", minHeight: "220px" }}>
  //         <ImageCar
  //           href="#"
  //           src="https://mazda-automobile.vn/wp-content/uploads/2020/03/NEW-MAZDA2-SPORT-DO.png"
  //         />
  //       </Grid>
  //       <Grid className="price" item>
  //         <PriceRectangle price={100000000} />
  //       </Grid>
  //       <Grid item>
  //         <CarName name="ALL NEW MAZDA3" href="#" />
  //       </Grid>
  //       <Grid item>
  //         <DescriptionCar description=" NGOẠI THẤT MAZDA 3 Về kích thước tổng thể Mazda 3 2019, phiên bản SPORT LUXURY (Hatchback) và LUXURY (Sedan) chỉ khác nhau về chiều dài, các thông số khác gần như tương đồng nhau. Phiên bản hatchback" />
  //       </Grid>
  //     </Grid>
  //     <style jsx>
  //       {`
  //         .dashedBox {
  //           position: relative;
  //           z-index: 1;
  //           border: dashed;
  //           height: 8em;
  //           margin-bottom: 1em;
  //           margin-top: 2em;
  //         }
  //         .price {
  //           z-index: 3;
  //           position: absolute;
  //           right: 0px;
  //         }
  //       `}
  //     </style>
  //   </div>
  // );
};
