import { useQuery } from "@apollo/client";
import React from "react";
import { Loading } from "src/component/Loading/Loading";
import CarouselProduct from "src/component/website/carousel/CarouselProduct";
import DescriptionProduct from "src/component/website/description-product/DescriptionProduct";
import { Product } from "src/models/Product";
import { ProductDetailQuery } from "src/services/product.detail.query";

export default function DetailPage() {
    const { loading, error, data } = useQuery<Product>(ProductDetailQuery)
    if (loading) return <Loading />
    if (error) return <h1> Error: {error.message}</h1>
    return (
        <div className="pProductDetail">
            <div className="carousel-product-detail">
                <CarouselProduct images={data.imagesCarousel} />
                <DescriptionProduct
                    nameProduct={data.name}
                    price={data.price}
                    codeProduct={data.name}
                />
            </div>
        </div>
    )
}