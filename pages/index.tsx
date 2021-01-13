import Head from "next/head";
import MasterPage from "component/website/master/MasterPage";
import HeaderCustom from "component/website/elemets/HeaderCustom";
import { CustomFooter } from "component/website/elemets/FooterCustom";

export default function Home() {
  return (
    <MasterPage pageName="Home">
      <HeaderCustom />

      <main id={"pHome"} className="homePage"></main>
      <CustomFooter />
    </MasterPage>
  );
}
