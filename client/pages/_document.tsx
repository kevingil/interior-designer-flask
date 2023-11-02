import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark text-white">
      <Head />
      <title>Interior Designer.AI</title>
      <body className='bg-slate-900'>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
