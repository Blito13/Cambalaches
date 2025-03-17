import React from "react";
import { useSelector } from "react-redux";
import { Auction } from "./Auction";
import { ProductList } from "./ProductList";

export const Home = () => {
return(
    <>
    <Auction/>
    <ProductList/>
    </>
)
};