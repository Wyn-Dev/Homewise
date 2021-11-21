import "../styles/bootstrap.min.css"
import "../styles/globals.css"
import Layout from "../components/Main/Layout"
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
