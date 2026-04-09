import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FlatLogo from "../components/Women/FlatLogo";
import Genderbanner from "../components/Women/GenderBanner";
import Categories from "../components/Women/Categories";
import ByCategori from "../components/Women/ByCategori";
import Product from "../components/Women/Product";
import MoreOffers from "../components/Women/MoreOffers";

function Women() {
  return (
    <>
      <Header />
      <FlatLogo />
      <Genderbanner />
      <Categories />
      <ByCategori />
      <Product />
      <MoreOffers />
      <Footer />
    </>
  );
}

export default Women;
