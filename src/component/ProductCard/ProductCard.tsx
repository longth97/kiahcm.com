import React from "react";
import { Product } from "src/models/Product";
import { DescriptionCar } from "./DescriptionCar";
import { ImageCar } from "./ImageCar";
import { CarName } from "./NameCar";
import { PriceRectangle } from "./PriceRectangle";

export const ProductCard = (props?: Product) => {
  return (
    <div>
      <div className="wrapper">
        <div className="dashed-box">
          <ImageCar href={props.href ?? "#"} src={props.image} />
        </div>
        <div className="gold-box">
          <div className="name-title">
            <CarName name={props.name} href={props.href ?? "#"} />
          </div>
          <div className="name-description">
            <DescriptionCar description={props.description} />
          </div>
        </div>
        <div className="green-box">
          <PriceRectangle price={props.price} />
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
};
