import styles from "src/components/Message/Message.module.css";

export const Message = () => {
  return (
    <section className={styles.message}>
      <div className={styles.inner}>
        <div className={styles.box}>
          <div className={styles.box__inner}>
            <h2 className={styles.box__title}>CEO MESSAGE</h2>
            <p className={styles.box__text}>良いデザインは人を幸せにする。</p>
            <p className={styles.box__text}>私達はそう信じています。</p>
            <p className={styles.box__text}>
              デザインを通して、ビジネスの課題とユーザーの課題を解決することで、世の中を幸せにしていきたい。
            </p>
            <p className={styles.box__text}>
              現在はあらゆるプロダクトがデジタル化されており、デザイナーに対する需要はますます高まっています。それとともに、期待される役割も幅広くなりつつあります。
            </p>
            <p className={styles.box__text}>
              クリエイティブで社会の可能性を切り開いていく。
            </p>
            <p className={styles.box__text}>
              変化の激しい現代、私達はデザインの力で社会を良い方向に変革していく企業を目指していきます。
            </p>
          </div>
          <figure className={styles.img_wrapper}>
            <img className="styles.img" src="src/images/ceo-img.png" alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};
