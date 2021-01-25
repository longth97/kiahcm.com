import { type } from "os";
import { Image } from "./Image";
import { RichText } from "./RichText";

export type New = {
  id: any;
  title: string;
  image: Image;
  description: string;
  createdAt: Date;
  content?: RichText;
};

export type News = {
  news: New[];
};
