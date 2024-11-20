import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import SinglePost from "../components/SinglePost";


export default function Home(){
  return(
    <>
      <Nav/>
      <Header title="Clean Blog" subTitle="A Blog Theme by Start Bootstrap" bgImage="home-bg.jpg"/>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
               <SinglePost/>
            </div>
        </div>
    </div>
      <Footer/>
    </>
  )
}