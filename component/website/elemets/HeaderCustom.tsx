import MenuList from "component/website/menu/MenuList";
import MenuCustom from "component/website/menu/MenuCustom_su";
import React from "react";
import { CustomContainer } from "./Container";
export default function CustomHeader() {
  return (
    <header>
      <CustomContainer>
        <MenuList></MenuList>
        <div className="headerMoblie">
          <MenuCustom></MenuCustom>
        </div>
      </CustomContainer>
    </header>
  );
}
