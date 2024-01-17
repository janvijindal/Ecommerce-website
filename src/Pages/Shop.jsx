import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offer from '../components/offers/Offer'
import NewCollections from '../components/NewCollections/NewCollections'
import NewLetter from '../components/NewLetter/NewLetter'
import Footer from '../components/Footer/Footer'

function Shop() {
  return (
    <div>
        <Hero></Hero>
        <Popular></Popular>
        <Offer></Offer>
        <NewCollections></NewCollections>
        <NewLetter></NewLetter>
     </div>
  )
}

export default Shop
