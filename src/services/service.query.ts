import { gql } from "@apollo/client";

export const serviceQuery = gql`
  query {
    services {
      id
      content {
        markdown
      }
    }
  }
`;
