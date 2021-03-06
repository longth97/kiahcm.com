import { useQuery } from "@apollo/client";
import { Service } from "src/models/Service";
import { serviceQuery } from "src/services/service.query";
import { Loading } from "src/component/Loading/Loading";
import Container from "src/component/website/elemets/Container";
import ReactMarkdown from "react-markdown";
import React from "react";
import MasterPage from "src/component/website/master/MasterPage";
import { introQuery } from "../src/services/intro.query";

type IntroVar = {
  intros: Service[];
};

export default function ProductPage() {
  const { loading, error, data } = useQuery<IntroVar>(introQuery);
  if (loading) return <Loading />;
  if (error) return <h1>Error: {error.message}</h1>;
  if (data)
    return (
      <MasterPage title="Dịch vụ">
      
        <main  id="pIntroduce" className="pIntroduce">
          <hr />
          <Container>
            {data.intros.length === 1 ? (
              <ReactMarkdown
                source={data?.intros[0]?.content.markdown}
                escapeHtml={false}
                transformImageUri={(uri) =>
                  uri.startsWith("http")
                    ? uri
                    : `${process.env.NEXT_PUBLIC_API_URL}${uri}`
                }
              />
            ) : (
              <div>Chưa có dữ liệu</div>
            )}
          </Container>
        </main>
        
      </MasterPage>
    );
}
