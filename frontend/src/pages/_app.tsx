import { Fragment } from 'react'
import Head from 'next/head'
import App, { AppInitialProps, AppProps } from 'next/app'

import { DefaultLayout } from '../components/templates/DefaultLayout'

import '../styles/globals.css'

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Fragment>
//       <Head>
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
//         />
//       </Head>
//       <GlobalStyle />
//       <DefaultLayout>
//         <Component {...pageProps} />
//       </DefaultLayout>
//     </Fragment>
//   )
// }

/**
 * main
 */
class MyApp extends App<AppInitialProps> {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
          />
        </Head>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </Fragment>
    )
  }
}

export default MyApp
