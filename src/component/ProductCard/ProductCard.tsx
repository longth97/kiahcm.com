import React from "react";
import { Product } from "src/models/Product";
import { PriceRectangle } from "./PriceRectangle";

export const ProductCard = (props?: Product) => {
  return (
    <div>
      <div className="newsCard">
        <div className="box-image">
          <img src={props.image.url} />
        </div>
        <div className="content">
          <h3 >
            {props.name}
          </h3>
          <p>
            {props.description}
          </p>
        </div>
        <div className="price">
          <PriceRectangle price={props.price} />
        </div>
      </div>
      <style jsx>
        {`.newsCard { 
            position: relative;
            .price {
                position: absolute;
                z-index: 2;
                padding: 0px 30px 0px 30px;
                top: 70%;
                right: -50px;
                text-align: center;
                color: #FFF;
            }
            img {
                width: 95%;
                transition: width 0.7s, height 0.7s;
                position: relative;
                z-index: 1;
                &:hover {
                  width: 100%;
                }
            }
        .content {
            padding-top: .7em;
            position: relative;
            width: 100%;
            text-align: center;
            background: white;
            h3 { 
                font-family: 'Roboto-Regular';
                font-size: 1.3em;
                font-weight: 700;
                text-overflow: ellipsis;
                padding-bottom: 10px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-transform: uppercase;
                &:hover {
                  color: #b90000;
                }
            }
            p {
                font-family: 'Roboto-Thin';
                font-size: 1.0em;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-align: left;
            }
        }
        
    }
        `}
      </style>
    </div>
  );
};
