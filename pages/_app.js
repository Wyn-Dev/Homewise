import "../styles/bootstrap.min.css"
import "../styles/globals.css"
import Navigation from "../components/Main//Navigation"
import Footer from "../components/Main/Footer"
import Layout from "../components/Main/Layout"
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}

export default MyApp
