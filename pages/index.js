import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import { Contact } from '../components/Contact'
import { Chat } from '../components/Chat'
import Gligx from '../components/shapes/Gligx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gligx | Software development company</title>
        <meta name="description" content="Best in class web design and development for medium-large enterprises and organizations from the best web design company in Dubai, UAE.." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar />
    <Main />
    <About />
    <Services />
    <Projects />
    <Contact />
    <Chat />
    </>
  )
}
