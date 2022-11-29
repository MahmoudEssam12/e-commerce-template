import '../styles/globals.css'
import { AnimatePresence } from "framer-motion";



const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    getLayout(
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    )
  )
}

export default App
