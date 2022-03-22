import styles from "src/components/Vision/Vision.module.css";

const VISIONTEXT_ITEMS = [
  { text: "私達のデザインで人が笑顔になる。" },
  { text: "そんなデザインを目指しています。" },
  {
    text: "私達が考える人を笑顔にできるデザインとは、\nデザインが課題を適切に解決ができているかどうか。",
  },
  {
    text: "ビジュアルだけではなく、\n本当に求められているものは何かを考え抜いて、デザインしていきたい。",
  },
  {
    text: "誰かの幸せを創ることも、\n世界の常識を変えていくことだってできる。",
  },
  { text: "私達はデザインの力を信じています。" },
];

export const Vision = () => {
  return (
    <section className={styles.vision}>
      <div className={styles.inner}>
        <h2 className={styles.title}>VISION</h2>
        <h3 className={styles.subtitle}>デザインで人を笑顔にする会社</h3>
        {VISIONTEXT_ITEMS.map((item) => {
          return <p className={styles.text}>{item.text}</p>;
        })}
      </div>
    </section>
  );
};
