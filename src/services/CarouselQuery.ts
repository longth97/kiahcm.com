import { gql } from "@apollo/client";

export const CarouselQuery = gql`
hotImage{
    images{
      url
    }
  }
`