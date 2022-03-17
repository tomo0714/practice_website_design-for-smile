import Head from "next/head";
import "../styles/globals.css";

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
