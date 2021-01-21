import { useQuery } from "@apollo/client";
import React from "react";
import { Loading } from "src/component/Loading/Loading";
import CarouselProduct from "src/component/website/carousel/CarouselProduct";
import DescriptionProduct from "src/component/website/description-product/DescriptionProduct";
import { Product } from "src/models/Product";
import { ProductDetailQuery } from "src/services/product.detail.query";
import MasterPage from "src/component/website/master/MasterPage";
import Container from "src/component/website/elemets/Container";
import TabViewProductDetail from "src/component/Detail/TabViews";
import { IDVar } from "src/models/Id";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import TableProducts from "src/component/website/table-product/TableProduct";

type ProductVar = {
    product: Product
}

export default function DetailPage() {
    const router = useRouter()
    const { loading, error, data } = useQuery<ProductVar, IDVar>(
        ProductDetailQuery,
        { variables: { id: `${router.query.slug}` } }
    )
    // useEffect(() => {
    //     console.log(router.query.slug);
    // },[])
    if (loading) return <Loading />
    if (error) return <h1> Error: {error.message}</h1>
    
    return (
        <MasterPage pageName="San pham">
            <main id="pProductDetail" className="pProductDetail">
                <Container>
                    <div className="description-product">
                        <div className="contentDetails carousel">
                            <CarouselProduct images={data.product.imagesCarousel} />
                        </div>
                        <div className="contentDetails description">
                            <DescriptionProduct
                                nameProduct={data.product.name}
                                price={data.product.price}
                                codeProduct={data.product.name}
                            />
                        </div>
                    </div>
                    <div className="content-product">
                        <TabViewProductDetail
                            description={data.product.content?.markdown}
                            feature={data.product.feature?.markdown}
                            specifications={data.product.spectifications?.markdown}
                            imagesActual={data.product.imagesActual?.markdown}
                        />
                    </div>
                </Container>
                <style jsx>{`
                    .contentDetails{
                        width: 50%;
                        
                    }
                    .description{
                        margin-left: 2%;
                    }
                    .content-product {
                        padding-top: 50px;
                    }
                `}</style>

            </main>

        </MasterPage>

    )
}
