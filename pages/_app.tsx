import { AppProps } from 'next/app'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='app-container'>
      <Head>
        <title>Donation App</title>
      </Head>

      <Header />
      <div className='main'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
