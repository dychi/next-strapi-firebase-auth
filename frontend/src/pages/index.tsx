import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <h2 className="text-5xl">Examples</h2>
        <Link href="/">
          <a className="text-blue-500">Home: SSR, no auth required</a>
        </Link>
        <Link href="/ssr-auth-required">
          <a className="text-blue-500">
            Example: SSR + data fetching with ID Token
          </a>
        </Link>
        <Link href="/auth">
          <a className="text-blue-500">Login Page: static</a>
        </Link>
        <Link href="/auth-ssr">
          <a className="text-blue-500">Login Page: serverside-rendered</a>
        </Link>
      </main>
    </div>
  )
}
