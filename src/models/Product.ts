import { Image } from "./Image";

export type Product = {
  id: any;
  name: string;
  image: Image;
  description: string;
  href?: string | undefined;
  price: number;
};
