// Dependencies
import type { AppProps } from 'next/app'
import { I18nProvider } from 'next-rosetta'
import NextHead from 'next/head'
import { GoogleFonts } from 'next-google-fonts'
import { motion } from 'framer-motion'

// Libraries
import initAuth from '@/lib/initAuth'

// Styles
import '@/styles/globals.css'

initAuth()

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <I18nProvider table={pageProps.table}>
      <>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" />
        <NextHead>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </NextHead>
      </>

      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </I18nProvider>
  )
}

export default MyApp
