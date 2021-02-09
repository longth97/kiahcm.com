import { gql } from "@apollo/client";

export const contactQuery = gql`
  query {
    hotImages {
      images {
        url
      }
    }
  }
`;
