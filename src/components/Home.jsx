import React from 'react'
import Header from './Header'
import GernderBanner from './GenderBanner'
import FlatLogo from './FlatLogo'
import Categories from './Categories'
import ByCategori from './ByCategori'
import Product from './Product'
import MoreOffers from './MoreOffers'

function Home() {
  return (
    <div>
      <Header />
      <FlatLogo />
      <GernderBanner />
      <Categories />
      <ByCategori />
      <Product />
      <MoreOffers />
    </div>
  )
}

export default Home