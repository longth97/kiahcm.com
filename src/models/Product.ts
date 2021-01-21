import { Image } from "./Image";

export type Product = {
  id?: any;
  name?: string;
  image?: Image;
  imagesCarousel?: Image[];
  description?: string;
  images?: Image[];
  href?: string | undefined;
  price?: number;
  segment?: string;
};


export type Products = {
  products?: Product[]
}