import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Footer from "../components/Main/Footer"
import Navigation from "../components/Main/Navigation"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homewise Construction</title>
        <meta
          name="description"
          content="Residential construction in Effingham county"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/images/IMG_7709.jpg"
          height={1080}
          width={1920}
          alt="your mom"
        />
        <Navigation />
        <Footer />
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        <p>CHeck this out bro</p>
      </footer>
    </div>
  )
}
