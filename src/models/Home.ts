import { HotImages } from "./HotImages";
import { News } from "./News";
import { Product } from "./Product";

export type Home = {
    home: {
        hotImage: HotImages;
        products: Product[];
        news: News[];
    }
}