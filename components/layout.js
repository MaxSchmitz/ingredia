import Head from 'next/head'
import Header from './header'
import Example from './example'
import {Adsense} from '@ctrl/react-adsense';

const Layout = (props) => (
  <div>
    <Head>
      <title>Ingredia</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="google-site-verification" content="LH7CVZLO-dzXx8SIskAXlHpaUuVuATDKPiaNvr2V8Sc" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3066548685705175"
     crossOrigin="anonymous"></script>
    </Head>
    <Example />

    <main className="flex w-full flex-1 flex-col items-center justify-center px-8 text-center">
      <div className="container">{props.children}</div>
    </main>

    <footer className="flex h-24 w-full items-center justify-center border-t">
      <a
        href="https://nextjs-blog-eight-xi-31.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built by Max
      </a>
      <a className='ml-4'
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
