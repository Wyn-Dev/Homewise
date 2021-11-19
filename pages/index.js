import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Footer from "../pages/components/Main/Footer"
import Header from "../pages/components/Main/Header"

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
        <Header />
        <Footer />
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>

          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>

          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>

          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>CHeck this out bro</p>
      </footer>
    </div>
  )
}
