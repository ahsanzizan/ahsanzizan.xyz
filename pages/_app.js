import '@/styles/globals.css';
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress options={{ easing: "ease", speed: 550 }} color='#00ADB5' />
      <Component {...pageProps} />
    </>
  )
}
