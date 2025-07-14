import React from "react";

import Header from "../../components/Header";
import Hero from "./Hero";
import Highlights from "./Highlights";

import GreekSalad from "../../assets/greek salad.webp";
import Bruchetta from "../../assets/bruchetta.webp";
import LemonDessert from "../../assets/lemon dessert.webp";

const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: GreekSalad,
    link: "/booking",
  },
  {
    title: "Bruschetta",
    price: "$5.89",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: Bruchetta,
    link: "/booking",
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: LemonDessert,
    link: "/booking",
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Highlights specials={specials} />
    </>
  );
};

export default Home;
