import Link from "next/link";

export const AboutUs = () => {
  return (
    <section className="relative">
      <div className="mx-auto bg-about bg-cover bg-no-repeat bg-center sm:py-28 sm:pl-24 py-12 px-5">
        <div className="max-w-xl py-12 px-8 bg-white/[0.95]">
          <h2 className="text-3xl font-bold uppercase">About us</h2>
          <p className="my-7 leading-loose">
            DIGSMILEは、デザインで人を笑顔にする会社。
            <br />
            なんでもない日常に少しのワクワクと遊び心を提供します。笑顔には世界を変える力
            がある、デザインには人を幸せにする力がある。毎日に幸せを感じて生きていきたい。
            <br />
            DIGSMILEの社名にはそんな想いが込められています。
          </p>
          <Link href="/about">
            <a className="w-40 h-9 block bg-black text-center leading-9 text-white text-xs">
              read more
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
