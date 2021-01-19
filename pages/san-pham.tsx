
import React from "react";
import CustomCarousel from "src/component/website/carousel/Carousel";
import MasterPage from "src/component/website/master/MasterPage";

export default function Product() {
  return (

    <MasterPage pageName="Sản Phẩm">
      <div className="body-carousel">
        <CustomCarousel />
      </div>
      <main id="pProduct" className="pProduct">
        <div className="body-content">

        </div>
      </main>

    </MasterPage>

  );
}
