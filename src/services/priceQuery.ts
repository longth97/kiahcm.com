import { gql } from "@apollo/client";

export const pricesQuery = gql`
  query {
    prices {
      id
      content {
        markdown
      }
    }
  }
`;
