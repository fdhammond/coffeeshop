import '../styles/globals.css'
import { ShopProvider } from '../context/ShopProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ShopProvider>
      <Component {...pageProps} />
    </ShopProvider>
  )
}

export default MyApp
