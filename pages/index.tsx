
import { useQuery } from "@apollo/client";
import React from "react";
import { Loading } from "src/component/Loading/Loading";
import { NewsCard } from "src/component/NewsCard/NewsCard";
import CustomCarousel from "src/component/website/carousel/Carousel";
import MasterPage from "src/component/website/master/MasterPage";
import { Home } from "src/models/Home";
import { HomeQuery } from "src/services/homeQuery";

export default function HomePage() {
  const { loading, error, data } = useQuery<Home>(HomeQuery)
  if (loading) return <Loading />
  if (error) return <h1>Error: {error.message}</h1>
  return (
    <MasterPage pageName="Trang chủ">
      <main id="pHome" className="pHome">
        <div className="body-carousel">
          <CustomCarousel images={data.home.hotImage.images} />
        </div>
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
