import React from "react";

type PriceProps = {
  price: number;
};
export const PriceRectangle = (props: PriceProps) => {
  return (
    <div className="price">
      {new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(props.price)}
      <style jsx>{`
        .price {
          padding: 15px 10px 15px 10px;
          align-items: center;
          background-color: #dd8412;
          transform: skewX(-20deg);
        }
      `}</style>
    </div>
  );
};
