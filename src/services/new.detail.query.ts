import { gql } from "@apollo/client";

export const newQuery = gql`
  query($id: ID!) {
    new(where: { id: $id }) {
      id
      title
      image {
        url
      }
      createdAt
      description
      content {
        markdown
      }
    }
  }
`;
