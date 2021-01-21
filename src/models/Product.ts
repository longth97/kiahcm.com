import { Image } from "./Image";
import { RichText } from "./RichText";

export type Product = {
  id?: any;
  name?: string;
  image?: Image;
  imagesCarousel?: Image[];
  description?: string;
  feature?: RichText;
  spectifications?: RichText;
  content?: RichText;
  imagesActual?: RichText;
  href?: string | undefined;
  price?: number;
  segment?: string;
};


export type Products = {
  products?: Product[]
}