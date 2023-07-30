import { AppProps } from 'next/app'
import Header from '../components/header'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='app-container'>
      <Header />
      <div className='container'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
