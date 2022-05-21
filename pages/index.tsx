import type { NextPage } from 'next'
import Head from 'next/head'
// import Images from '../public/images/Images'
import Header from '../components/Header/index'
import Hero from '../components/Hero/index'
import Products from '../components/Products/index'
import RoadMap from '../components/RoadMap/index'
import Tokenomics from '../components/Tokenomics/index'
import Modal from '../components/Modal/index'
import Team from '../components/Team/index'
import Partners from '../components/Partners'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Array</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Products />
      <RoadMap />
      <Tokenomics />
      <Modal />
      <Team />
      <Partners />
      </>
      

  )
}

export default Home
