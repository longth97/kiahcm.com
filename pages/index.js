import Head from 'next/head'
import MasterPage from "component/website/master/MasterPage";
import Header from "component/website/elemets/HeaderCustom";
import Footer from "component/website/elemets/Footer";

export default function Home() {
  return (
    <MasterPage pageName="Home" >
        <Header></Header>
        
        <main id={"pHome"} className="homePage">
          
        </main>
        <Footer></Footer>
    </MasterPage>
   
  )
}
