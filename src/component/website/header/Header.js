
import MenuList from "src/component/website/menu/MenuList";
import Container from "src/component/website/elemets/Container";
import MenuCustom from "src/component/website/menu/CustomMenu";
import { useState, useEffect, useRef } from "react";
import useScroll from "src/component/website/hooks-custom/useScroll";

export default function Header(){

    const { scrollX, scrollY, scrollDirection } = useScroll();
    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        // console.log("scrollY", scrollY);
        // console.log("scrollDirection", scrollDirection);
        if (scrollY && scrollY >= 200) {
          setFixed(true);
        } else {
          setFixed(false);
        }
      }, [scrollY, scrollDirection]);
    return<>
    <header className={fixed === true ? "fixed" : ""}>
        <Container>
          <MenuList></MenuList>
          <MenuCustom></MenuCustom>
        </Container>
      </header>
    
    </>
}