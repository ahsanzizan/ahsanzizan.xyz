import '@/styles/globals.css';
import NextNProgress from "nextjs-progressbar";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
      </Head>
      <NextNProgress options={{ easing: "ease", speed: 550 }} color='#00ADB5' />
      <Component {...pageProps} />
    </>
  )
}
