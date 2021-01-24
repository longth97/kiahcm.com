import { gql } from "@apollo/client";

export const introQuery = gql`
  query {
    intros {
      id
      content {
        markdown
      }
    }
  }
`;
