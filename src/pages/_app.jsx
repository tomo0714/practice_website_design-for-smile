import Head from "next/head";
import "src/styles/globals.css";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DESIGN FOR SMILE</title>
        <meta
          name="description"
          content="DIGSMILEは、デザインで人を豊かにする社会。なんでもない日常に少しのワクワクと遊び心を提供します。"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
