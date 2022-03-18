import Link from "next/link";
import styles from "src/styles/AboutByIndex.module.css";

export const AboutByIndex = () => {
  return (
    <section className={styles.about}>
      <div className={styles.inner + styles.bg}>
        <div className={styles.box}>
          <h2 className={styles.title}>About us</h2>
          <p className={styles.text}>
            DIGSMILEは、デザインで人を笑顔にする会社。
            <br />
            なんでもない日常に少しのワクワクと遊び心を提供します。笑顔には世界を変える力
            がある、デザインには人を幸せにする力がある。毎日に幸せを感じて生きていきたい。
            <br />
            DIGSMILEの社名にはそんな想いが込められています。
          </p>
          <Link href="/about">
            <a className={styles.btn}>read more</a>
          </Link>
        </div>
      </div>
    </section>
  );
};
