import Container from "component/website/elemets/Container";
import MenuList from "component/website/menu/MenuList";
import MenuCustom from "component/website/menu/MenuCustom_su";
export default function Header (){
    return (
            <header>

                <Container> 

                    <MenuList></MenuList>
                    
                    <div className="headerMoblie">
                        <MenuCustom></MenuCustom>
                    </div>

                </Container>

            </header>
    )
}