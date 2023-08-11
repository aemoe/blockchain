import { Html, Head, Main, NextScript } from 'next/document'
import Header from './header'
import Footer from './footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
