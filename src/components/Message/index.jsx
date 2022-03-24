import Image from "next/image";
import styles from "src/components/Message/Message.module.css";

const BOXTEXT_ITEMS = [
  { text: "良いデザインは人を幸せにする。" },
  { text: "私達はそう信じています。" },
  {
    text: "デザインを通して、ビジネスの課題とユーザーの課題を解決することで、世の中を幸せにしていきたい。",
  },
  {
    text: "現在はあらゆるプロダクトがデジタル化されており、デザイナーに対する需要はますます高まっています。それとともに、期待される役割も幅広くなりつつあります。",
  },
  { text: "クリエイティブで社会の可能性を切り開いていく。" },
  {
    text: "変化の激しい現代、私達はデザインの力で社会を良い方向に変革していく企業を目指していきます。",
  },
];

export const Message = () => {
  return (
    <section className={styles.message}>
      <div className={styles.inner}>
        <div className={styles.box}>
          <h2 className={styles.title}>CEO MESSAGE</h2>
          {BOXTEXT_ITEMS.map((item) => {
            return (
              <p key={item.text} className={styles.text}>
                {item.text}
              </p>
            );
          })}
          <figure className={styles.imgWrap}>
            <Image src="/images/ceo-img.png" width={400} height={270} />
          </figure>
        </div>
      </div>
    </section>
  );
};
