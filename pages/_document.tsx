import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
          <link rel="apple-touch-icon" href="/apple-icon.png" type="image" sizes="any"/>
      </Head>
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
