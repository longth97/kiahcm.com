import { gql } from "@apollo/client";

export const ProductDetailQuery = gql`
query ($id: ID!){
    product(where: {id: $id}){
      name
      imagesCarousel{
        url
      }
      price
      content{
        html
        markdown
      }
      spectifications{
        html
        markdown
      }
      feature{
        html
        markdown
      }
      
      imagesActual{
        html
        markdown
      }
      
    }
  }
`;