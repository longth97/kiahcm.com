import { gql } from "@apollo/client";

export const CarouselQuery = gql`
query{
  hotImage(where: {id: "ckk0skmdc4sy50947h48zegie"}){
     images{
       url
     }
 }
 }
`