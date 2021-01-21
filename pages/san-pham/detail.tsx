import { useQuery } from "@apollo/client";
import React from "react";
import { Loading } from "src/component/Loading/Loading";
import CarouselProduct from "src/component/website/carousel/CarouselProduct";
import DescriptionProduct from "src/component/website/description-product/DescriptionProduct";
import { Product } from "src/models/Product";
import { ProductDetailQuery } from "src/services/product.detail.query";
import MasterPage from "src/component/website/master/MasterPage";
import Container from "src/component/website/elemets/Container";
// import TableProducts from "src/component/website/table-product/TableProduct";

export default function DetailPage() {
    const { loading, error, data } = useQuery<Product>(ProductDetailQuery)
    if (loading) return <Loading />
    if (error) return <h1> Error: {error.message}</h1>
    return (
        <MasterPage pageName="San pham">
            <main id="pProduct" className="pProduct">
                <Container>
                    <div className="contentProduct">

                        <div className="contentDetails carousel">
                            <CarouselProduct images={data.imagesCarousel} />
                        </div>

                        <div className="contentDetails description">
                        
                        <DescriptionProduct
                            nameProduct={data.name}
                            price={data.price}
                            codeProduct={data.name}
                        />

                        </div>
                        
                    </div>
                    
                </Container>

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
              
            </main>
            
        </MasterPage>
        
    )
}
