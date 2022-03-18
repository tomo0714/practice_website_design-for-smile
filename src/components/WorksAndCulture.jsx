import styles from "src/styles/WorksAndCulture.module.css";

export const WorksAndCulture = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.items}>
          <section className={styles.item}>
            <h2 className={styles.title}>Works</h2>
            <figure className={styles.img_wrapper}>
              <img
                className={styles.img}
                src="src/images/daria-shevtsova-k_RYBedEvDw-unsplash@2x-min.png"
                alt=""
              />
            </figure>
            <p className={styles.text}>DIGSMILEの制作実績を紹介します。</p>
            <a href="#!" className={styles.btn}>
              read more
            </a>
          </section>
          <section className={styles.item}>
            <h2 className={styles.title}>Culuture</h2>
            <figure className={styles.img_wrapper}>
              <img
                className={styles.img}
                src="src/images/culture-img@2x-min.png"
                alt=""
              />
            </figure>
            <p className={styles.text}>
              DIGSMILEの社内文化について紹介します。
            </p>
            <a href="#!" className={styles.btn}>
              read more
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};
