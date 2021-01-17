import { Image } from "./Image";

export type News = {
    id: any;
    title: string;
    image: Image;
    description: string;
    createdAt: Date;
}