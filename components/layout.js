import Head from 'next/head'
import Navbar from './navbar'
import Kitchen from './kitchen'
import { useEffect } from 'react'


function Layout(props) {
  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) { }
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Ingredia</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="LH7CVZLO-dzXx8SIskAXlHpaUuVuATDKPiaNvr2V8Sc" />
        <script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=e399e594-27b6-4a04-8bda-3a31ef335700"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3066548685705175" crossorigin="anonymous"></script>
        <script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=d0493607-b56c-4a52-8253-b35973fe55a6"></script>
      </Head>
      <Navbar />
      

      
      <main className="flex w-full flex-1 flex-col items-center justify-center px-8 text-center">
        <div className="container">{props.children}</div>
      </main>
      <Kitchen />
  
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
}


export default Layout
