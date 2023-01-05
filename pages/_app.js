import { Router } from 'next/router'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence initial={false}>
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
  ) 
}

 
