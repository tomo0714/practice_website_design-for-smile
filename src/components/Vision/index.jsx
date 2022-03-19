import styles from "src/components/Vision/Vision.module.css";

export const Vision = () => {
  return (
    <section className={styles.vision}>
      <div className={styles.inner}>
        <h2 className={styles.title}>VISION</h2>
        <h3 className={styles.subtitle}>デザインで人を笑顔にする会社</h3>
        <p className={styles.text}>私達のデザインで人が笑顔になる。</p>
        <p className={styles.text}>そんなデザインを目指しています。</p>
        <p className={styles.text}>
          私達が考える人を笑顔にできるデザインとは、
          <br />
          デザインが課題を適切に解決ができているかどうか。
          <br />
        </p>
        <p className={styles.text}>
          ビジュアルだけではなく、
          <br />
          本当に求められているものは何かを考え抜いて、
          <br />
          デザインしていきたい。
        </p>
        <p className={styles.text}>
          誰かの幸せを創ることも、
          <br />
          世界の常識を変えていくことだってできる。
        </p>
        <p className={styles.text}>私達はデザインの力を信じています。</p>
      </div>
    </section>
  );
};
