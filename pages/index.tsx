
import { useQuery } from "@apollo/client";
import React from "react";
import { Loading } from "src/component/Loading/Loading";
import { NewsCard } from "src/component/NewsCard/NewsCard";
import { ProductCard } from "src/component/ProductCard/ProductCard";
import { TitleHeader } from "src/component/TitleHeader/TitleHeader";
import CustomCarousel from "src/component/website/carousel/Carousel";
import MasterPage from "src/component/website/master/MasterPage";
import PrimaryButton from "src/component/website/primary-button/PrimaryButton";
import Title from "src/component/website/title/Title";
import { Home } from "src/models/Home";
import { HomeQuery } from "src/services/homeQuery";

export default function HomePage() {
  const { loading, error, data } = useQuery<Home>(HomeQuery)
  if (loading) return <Loading />
  if (error) return <h1>Error: {error.message}</h1>
  return (
    <MasterPage pageName="Trang chủ">
      <div className="body-carousel">
        <CustomCarousel />
      </div>
      <main id="pHome" className="pHome">

        <div className="body-products">
          {
            data.home.products.map((e, i) =>
              <ProductCard
                key={i}
                id={e.id}
                name={e.name}
                price={e.price}
                image={e.image}
                description={e.description}
              />
            )
          }
        </div>
        <div className="body-button">
          <PrimaryButton text={"Xem tất cả các dòng xe"} />
        </div>
        <Title value="Tin tức" />
        <div className="body-news">
          {
            data.home.news.map((e, i) => <NewsCard
              key={i}
              date={e.createdAt}
              url={e.image.url}
              title={e.title}
              description={e.description}
            />)
          }
        </div>
      </main>
    </MasterPage>

  );
}
