import { CardMedia, Grid, Typography } from "@material-ui/core"
import React from "react"
import { DescriptionCar } from "./DescriptionCar";
import { ImageCar } from "./ImageCar";
import { CarName } from "./NameCar";
import { PriceRectangle } from "./PriceRectangle";

export const ProductCard = () => {
    return (
        <div>
            <Grid container direction="column" alignItems="center" style={{ maxWidth: "800px" }}>
                <Grid item style={{ maxHeight: "320px", minHeight: "220px" }}>
                    <ImageCar href="#" src="https://mazda-automobile.vn/wp-content/uploads/2020/03/NEW-MAZDA2-SPORT-DO.png" />
                </Grid>
                <Grid item>

                    <div className="price" >
                        <PriceRectangle price={100000000}/>
                    </div>
                </Grid>
                <Grid item >
                    <CarName name="ALL NEW MAZDA3" href="#" />
                </Grid>
                <Grid item>
                    <DescriptionCar description=" NGOẠI THẤT MAZDA 3 Về kích thước tổng thể Mazda 3 2019, phiên bản SPORT LUXURY (Hatchback) và LUXURY (Sedan) chỉ khác nhau về chiều dài, các thông số khác gần như tương đồng nhau. Phiên bản hatchback" />
                </Grid>
            </Grid>
            <style jsx>{`
            .price {
               z-index: 1;
               position: absolute;
               bottom: 100px;
               right: 0px;
            }   
            `}
            </style>
        </div>
    )
}

