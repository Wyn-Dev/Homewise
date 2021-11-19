import "../styles/globals.css"
import Layout from "../components/Main/Layout"
import "bootswatch/dist/slate/bootstrap.min.css"
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
