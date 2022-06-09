import Head from 'next/head'
import Header from './header'
import Example from './example'

const Layout = (props) => (
  <div>
    <Head>
      <title>Ingredia</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Example />

    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <div className="container">{props.children}</div>
    </main>

    <footer className="flex h-24 w-full items-center justify-center border-t">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </footer>
  </div>
)

export default Layout
