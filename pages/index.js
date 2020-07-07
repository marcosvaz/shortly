import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'

export default function Home() {
  return (
    <div className="container" style={{ overflowX: "hidden" }}>
      <Head>
        <title>Shortly</title>
        <link rel="icon" href="images/favicon-32x32.png" />
      </Head>
      <Header />
      <Hero />
      <Features />
    </div>
  )
}
