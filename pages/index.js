import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js ISR Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my demo!</h1>

        <div className={styles.grid}>
          <Link href="/isr/fallback-blocking/1">
            <a className={styles.card}>
              <h3>ISR - fallback blocking&rarr;</h3>
              <p>already generated</p>
            </a>
          </Link>
          <Link href="/isr/fallback-blocking/2">
            <a className={styles.card}>
              <h3>ISR - fallback blocking&rarr;</h3>
              <p>not generated</p>
            </a>
          </Link>
          <Link href="/isr/fallback-true/1">
            <a className={styles.card}>
              <h3>ISR - fallback true&rarr;</h3>
              <p>already generated</p>
            </a>
          </Link>
          <Link href="/isr/fallback-true/2">
            <a className={styles.card}>
              <h3>ISR - fallback true&rarr;</h3>
              <p>not generated</p>
            </a>
          </Link>
          <Link href="/isr/fallback-false/1">
            <a className={styles.card}>
              <h3>ISR - fallback false&rarr;</h3>
              <p>already generated</p>
            </a>
          </Link>
          <Link href="/isr/fallback-false/2">
            <a className={styles.card}>
              <h3>ISR - fallback false&rarr;</h3>
              <p>not generated</p>
            </a>
          </Link>

          <Link href="/ssg">
            <a className={styles.card}>
              <h3>SSG &rarr;</h3>
              <p>Fetches a random public API at build time</p>
            </a>
          </Link>

          <Link href="/ssr">
            <a className={styles.card}>
              <h3>SSR &rarr;</h3>
              <p>Fetches a random public API on every request</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
