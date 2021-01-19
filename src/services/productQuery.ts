import { gql } from "@apollo/client";

export const productQuery = gql`
query{
    products{
     id
     name
     image{
       url
     }
     description
     price
     segment
     createdAt
   }
}

`