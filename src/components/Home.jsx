import { ProductList } from "./ProductList";
import "./Home.css";
import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { FilterForm } from "./FilterForm";

export const Home = () => {
return(
    <div className="home-container">
    <NavBar></NavBar>
    <Hero></Hero>
    <FilterForm></FilterForm>
    <ProductList/>
    <Footer></Footer>
    </div>
)
};