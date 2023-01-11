import Layout from '../comps/Layout'
import CounterContextProvider from '../contexts/CounterContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {  
  return (
    <CounterContextProvider>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </CounterContextProvider>      
  )
}

export default MyApp
