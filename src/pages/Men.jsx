import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FlatLogo from "../components/Men/FlatLogo";
import Genderbanner from "../components/Men/GenderBanner";
import Categories from "../components/Men/Categories";
import ByCategori from "../components/Men/ByCategori";
import Product from "../components/Men/Product";
import MoreOffers from "../components/Men/MoreOffers";

function Men() {
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

export default Men;
