import type { NextPage } from 'next'
import Head from 'next/head'
// import Images from '../public/images/Images'
import Header from '../components/Header/index'
import Hero from '../components/Hero/index'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TS Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      </>
      

  )
}

export default Home
