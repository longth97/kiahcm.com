import { useQuery } from "@apollo/client";
import React from "react";
import { Loading } from "src/component/Loading/Loading";
import { New, News } from "src/models/News";
import { newsQuery } from "src/services/news.query";
import { NewsCard } from "../src/component/NewsCard/NewsCard";
<<<<<<< HEAD
=======
import MasterPage from "src/component/website/master/MasterPage";
import Container from "src/component/website/elemets/Container";
import Title from "src/component/website/title/Title";
>>>>>>> develop

export default function ProductPage() {
  const { loading, error, data } = useQuery<News>(newsQuery);
  if (loading) return <Loading />;
  if (error) return <h1>Error: {error.message}</h1>;
  if (data)
    return (
<<<<<<< HEAD
      <div>
        <h3>Tin Tức</h3>
        {data.news.map((e: New, i: number) => (
          <NewsCard
            id={e.id}
            date={e.createdAt}
            title={e.title}
            description={e.description}
            url={e.image.url}
            key={i}
          />
        ))}
      </div>
=======
      <MasterPage title={"Tin tức"}>
        <main>
          <Container>
            <br />
            <Title title="tin tức"></Title>
            <br />
              {data.news.map((e: New, i: number) => (
                <NewsCard
                  id={e.id}
                  date={e.createdAt}
                  title={e.title}
                  description={e.description}
                  url={e.image.url}
                  key={i}
                />
              ))}
          </Container>

        </main>
        
      </MasterPage>
>>>>>>> develop
    );
}
