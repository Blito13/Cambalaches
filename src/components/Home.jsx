import { ProductList } from "./ProductList";
import "./Home.css";
import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { Footer } from "./Footer";

export const Home = () => {
return(
    <div className="home-container">
    <NavBar></NavBar>
    <Hero></Hero>
    <ProductList/>
    <Footer></Footer>
    </div>
)
};