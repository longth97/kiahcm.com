import { gql } from "@apollo/client";

export const newsQuery = gql`
  query {
    news {
      id
      title
      image {
        url
      }
      createdAt
      description
    }
  }
`;
