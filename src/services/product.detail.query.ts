import { gql } from "@apollo/client";

export const ProductDetailQuery = gql`
query{
    product(where: {id: "ckk0szcgo4trq0c98lt024w8p"}){
      name
      imagesCarousel{
        url
      }
      price
      content{
        html
      }
      spectifications{
        html
      }
      feature{
        html
      }
      
      imagesActual{
        html
      }
      
    }
  }
`;