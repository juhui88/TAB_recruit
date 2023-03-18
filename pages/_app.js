import '@/styles/globals.css'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }) {
  return (
  <div>
    <RecoilRoot>
      <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"></link>
      <Component {...pageProps} />
    </RecoilRoot>
    
  </div>)
  
  
}
