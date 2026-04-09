import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FavouriteBrands from '../components/Kids/FavouriteBrands'
import Painer from '../components/Kids/Painer.jsx'
import TopPicks from '../components/Kids/TopPicks.jsx'
import IconicBrands from '../components/Kids/IconicBrands.jsx'
import FashionEssentials from '../components/Kids/FashionEssentials.jsx'
import ExploreMore from '../components/Kids/ExploreMore.jsx'
import TheKidsSpace from '../components/Kids/TheKidsSpace.jsx'
import BudgetBuy from '../components/Kids/BudgetBuy.jsx'
import ShopMoreBrands from '../components/Kids/ShopMoreBrands.jsx'


function Kids() {
  return (
    <>
      <Header />
        <Painer />
        <FavouriteBrands />
        <TopPicks />
        <IconicBrands />
        <FashionEssentials />
        <ExploreMore />
        <TheKidsSpace />
        <BudgetBuy />
        <ShopMoreBrands />
      <Footer />
    </>
  )
}

export default Kids