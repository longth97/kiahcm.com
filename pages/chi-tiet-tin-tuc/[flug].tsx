import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Loading } from "src/component/Loading/Loading";
import { IDVar } from "src/models/Id";
import { newQuery } from "src/services/new.detail.query";
import { New } from "../../src/models/News";
import ReactMarkdown from "react-markdown";
import React from "react";
import MasterPage from "src/component/website/master/MasterPage";
import Container from "src/component/website/elemets/Container";

type NewVar = {
  new: New;
};

export default function DetailPage() {
  const router = useRouter();
  const { loading, error, data } = useQuery<NewVar, IDVar>(newQuery, {
    variables: { id: `${router.query.slug}` },
  });
  if (loading) return <Loading />;
  if (error) return <h1> Error: {error.message}</h1>;
  if (data)
    return (
      <MasterPage title={"Tin tức"}>
        <Container>
          {data.new == null ? (
            <div>Chưa có dữ liệu</div>
          ) : (
            <ReactMarkdown
              source={data.new?.content?.markdown}
              escapeHtml={false}
              transformImageUri={(uri) =>
                uri.startsWith("http")
                  ? uri
                  : `${process.env.NEXT_PUBLIC_API_URL}${uri}`
              }
            />
          )}
          <h3>{data.new?.title}</h3>
        </Container>
      </MasterPage>
    );
}
