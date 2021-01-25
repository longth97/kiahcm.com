import { useQuery } from "@apollo/client";
import Head from "next/head";
import React from "react";
import { Loading } from "src/component/Loading/Loading";
import { ProductCard } from "src/component/ProductCard/ProductCard";
import CustomCarousel from "src/component/website/carousel/Carousel";
import Container from "src/component/website/elemets/Container";
import MasterPage from "src/component/website/master/MasterPage";
import Title from "src/component/website/title/Title";
import { Products } from "src/models/Product";
import { productQuery } from "src/services/productQuery";

export default function ProductPage() {
  const { loading, error, data } = useQuery<Products>(productQuery);
  if (loading) return <Loading />;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      <MasterPage title="Sản phẩm">
        <CustomCarousel />
        <main id="pProduct" className="pProduct">
          <Container>
            <div className="title-product">
              <Title title="HATCHBACK" />
            </div>
            <div className="body-products">
              {data.products
                .filter((product) => product.segment === "HATCHBACK")
                .map((e, i) => (
                  <ProductCard
                    key={i}
                    id={e.id}
                    name={e.name}
                    price={e.price}
                    image={e.image}
                    description={e.description}
                  />
                ))}
            </div>
            <Title title="SEDAN" />
            <div className="body-products">
              {data.products
                .filter((product) => product.segment === "SEDAN")
                .map((e, i) => (
                  <ProductCard
                    key={i}
                    id={e.id}
                    name={e.name}
                    price={e.price}
                    image={e.image}
                    description={e.description}
                  />
                ))}
            </div>
            <Title title="SUV" />
            <div className="body-products">
              {data.products
                .filter((product) => product.segment === "SUV")
                .map((e, i) => (
                  <ProductCard
                    key={i}
                    id={e.id}
                    name={e.name}
                    price={e.price}
                    image={e.image}
                    description={e.description}
                  />
                ))}
            </div>

            <Title title="MPV" />
            <div className="body-products">
              {data.products
                .filter((product) => product.segment === "MPV")
                .map((e, i) => (
                  <ProductCard
                    key={i}
                    id={e.id}
                    name={e.name}
                    price={e.price}
                    image={e.image}
                    description={e.description}
                  />
                ))}
            </div>
          </Container>
        </main>
      </MasterPage>
    </div>
  );
}
