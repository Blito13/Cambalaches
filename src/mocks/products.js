/* import * as AllImages from '../media/realMedia/indexMedia'; */
import { collection , getDocs } from "firebase/firestore";
import { db } from "../firebase/config.js";
import {doc , getDoc} from "firebase/firestore";

   export const products=[
      {
    id: 30,
    title: "Alfajor de chocolate con dulce de leche de coco ",
    description: "Ingredientes : harina integral , azucar mascabo , leche de coco , cacao amargo, aceite de girasol, dulce de leche de coco ",
    price: 1000,
    discountPercentage: 8.33,
    rating: 8.33,
    stock: 54,
    brand: " 1/2 docena $5.500 , 1 docena $10.000",
    category: "home-decoration",
   /*  thumbnail:AllImages.alfajoresChocolate, */
    images: [
      "https://i.dummyjson.com/data/products/30/1.jpg",
      "https://i.dummyjson.com/data/products/30/2.jpg",
      "https://i.dummyjson.com/data/products/30/3.jpg",
      "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
    ]
      },
      {
         id: 31,
    title: "Alfajor integral con dulce de leche de coco",
    description: "Ingredientes : harina integral , azucar mascabo , leche de coco , aceite de girasol, dulce de leche de coco",
    price: 1000,
    discountPercentage: 8.33,
    rating: 4.92,
    stock: 54,
    brand: " 1/2 docena $5.500 , 1 docena $10.000",
    category: "home-decoration",
  /*   thumbnail:AllImages.alfajoresCoco, */
    images: [
      "https://i.dummyjson.com/data/products/30/1.jpg",
      "https://i.dummyjson.com/data/products/30/2.jpg",
      "https://i.dummyjson.com/data/products/30/3.jpg",
      "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
    ]
      },
      {
         id: 32,
    title: "Bizcochos integrales con mix de semillas Bolsa 150g",
    description: "Ingredientes : harina integral organica, mix de semillas , sal  y aceite de girasol",
    price: 1200,
    discountPercentage: 2.92,
    rating: 4.92,
    stock: 54,
    brand: "",
    category: "home-decoration",
 /*    thumbnail:AllImages.bizcochos, */
    images: [
      "https://i.dummyjson.com/data/products/30/1.jpg",
      "https://i.dummyjson.com/data/products/30/2.jpg",
      "https://i.dummyjson.com/data/products/30/3.jpg",
      "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
    ]
      },
      {
         id: 33,
    title: "Medialunas rellenas con crema bariloche ",
    description: "Ingredientes: Harina integral organica,  azucar mascabo,  leche de coco,  dulce de leche de coco, chocolate semiamargo, aceite de girasol.",
    price: 1000,
    discountPercentage: 8.33,
    rating: 4.92,
    stock: 54,
    brand: " 1/2 docena $5.500 , 1 docena $10.000",
    category: "home-decoration",
  /*   thumbnail:AllImages.medialunasChocolate, */
    images: [
      "https://i.dummyjson.com/data/products/30/1.jpg",
      "https://i.dummyjson.com/data/products/30/2.jpg",
      "https://i.dummyjson.com/data/products/30/3.jpg",
      "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
    ]
      },
      {
         id: 34,
    title: "Medialunas coco ",
    description: "Ingredientes: Harina integral organica, azucar mascabo, jugo de naranja, ralladura de naranja, leche de avena, aceite de girasol, manzanas y canela.",
    price: 1000,
    discountPercentage: 8.33,
    rating: 4.92,
    stock: 54,
    brand: "1/2 docena $5.500 , 1 docena $10.000",
    category: "home-decoration",
    /* thumbnail:AllImages.medialunasCoco, */
    images: [
      "https://i.dummyjson.com/data/products/30/1.jpg",
      "https://i.dummyjson.com/data/products/30/2.jpg",
      "https://i.dummyjson.com/data/products/30/3.jpg",
      "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
    ]
      },
      {
         id: 35,
    title: "Pan de centeno 1/2 KG",
    description: "Ingredientes :Harina de centeno,harina integral, sal, agua y aceite de girasol.",
    price: 2500 ,
    discountPercentage: 2.92,
    rating: 4.92,
    stock: 54,
    brand: "",
    category: "home-decoration",
    /* thumbnail:AllImages.panCenteno, */
    images: [
      "https://i.dummyjson.com/data/products/30/1.jpg",
      "https://i.dummyjson.com/data/products/30/2.jpg",
      "https://i.dummyjson.com/data/products/30/3.jpg",
      "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
    ]
      },
      {
         id: 36,
    title: "Pan integral de semillas 1/2 KG",
    description: "Ingredientes : Harina integral oganica , agua , aceite de girasol ,sal y  mix de semillas",
    price: 2500,
    discountPercentage: 2.92,
    rating: 4.92,
    stock: 54,
    brand: "",
    category: "home-decoration",
    /* thumbnail:AllImages.panIntegralSemillas, */
    images: [
      "https://i.dummyjson.com/data/products/30/1.jpg",
      "https://i.dummyjson.com/data/products/30/2.jpg",
      "https://i.dummyjson.com/data/products/30/3.jpg",
      "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
    ]
      },
      {
         id: 37,
    title: "Variedad en budines",
    description: "Chocolate y coco,Arandanos y limon Banana y chips de chocolate ,Manzana y canela, Limon  ,jengibre y coco Zanahorias , naranjas y nueces",
    price: 2500,
    discountPercentage: 2.92,
    rating: 4.92,
    stock: 54,
    brand: "",
    category: "home-decoration",
    /* thumbnail:AllImages.budinChocolate, */
    images: [
      "https://i.dummyjson.com/data/products/30/1.jpg",
      "https://i.dummyjson.com/data/products/30/2.jpg",
      "https://i.dummyjson.com/data/products/30/3.jpg",
      "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
    ]
      },
     
      
      
      
   ]
 