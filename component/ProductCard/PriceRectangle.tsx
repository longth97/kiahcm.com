import React from "react"
import { FormattedNumber } from "react-intl"

type PriceProps = {
    price: number;
}
export const PriceRectangle = (props: PriceProps) => {
    return (
        <div className="price">
            <FormattedNumber value={props.price} style="currency" currency="VND" />
            <style jsx>{`
            .price {
                padding: 15px 10px 15px 10px;
                align-items: center;
                background-color: #DD8412;
                transform: skewX(-20deg);
            }
              
        `}</style>
        </div>
    )
}