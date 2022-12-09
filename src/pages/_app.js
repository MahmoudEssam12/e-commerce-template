import '../styles/globals.css'
import { AnimatePresence } from "framer-motion";
import store from "../store/store";
import { Provider } from 'react-redux';



const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider store={store}>
      {

        getLayout(

          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        )
      }
    </Provider>
  )
}

export default App
