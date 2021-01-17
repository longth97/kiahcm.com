import { gql } from "@apollo/client";

export const HomeQuery = gql`
query{
  home(where: {id: "ckk0sqlnc4wu40b13fe93a0dj"}){
   hotImage{
     images{
       url
     }
   }
   products{
     id
     name
     image{
       url
     }
     description
     price
     createdAt
   }
   news{
     id
     title
     image{
       url
     }
     description
     createdAt
   }
 }
}

`