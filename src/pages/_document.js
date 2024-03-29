import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
         <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,500&family=Kaushan+Script&family=Source+Sans+Pro:wght@600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
