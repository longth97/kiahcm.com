import { HotImages } from "./HotImages";
import { New } from "./News";
import { Product } from "./Product";

export type Home = {
    home: {
        hotImage: HotImages;
        products: Product[];
        news: New[];
    }
}