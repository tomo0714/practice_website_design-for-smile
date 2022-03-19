import styles from "src/styles/Company.module.css";

export const Company = () => {
  return (
    <section className={styles.company}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Company</h2>
        <table className={styles.table}>
          <tbody className={styles.table__inner}>
            <tr className={styles.table__row}>
              <th className={styles.table__title}>社名</th>
              <td className={styles.table__text}>株式会社DIGSMILE</td>
            </tr>
            <tr className={styles.table__row}>
              <th className={styles.table__title}>代表取締役</th>
              <td className={styles.table__text}>〇〇〇〇</td>
            </tr>
            <tr className={styles.table__row}>
              <th className={styles.table__title}>設立</th>
              <td className={styles.table__text}>2021年1月1日</td>
            </tr>
            <tr className={styles.table__row}>
              <th className={styles.table__title}>資本金</th>
              <td className={styles.table__text}>1億円</td>
            </tr>
            <tr className={styles.table__row}>
              <th className={styles.table__title}>所在地</th>
              <td className={styles.table__text}>東京都品川区〇〇〇〇〇〇</td>
            </tr>
            <tr className={styles.table__row}>
              <th className={styles.table__title}>電話番号</th>
              <td className={styles.table__text}>00-0000-0000</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.map}>
          {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51897.385325629!2d139.6996617879943!3d35.6132632124338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a622d707eed%3A0x7d44bb1b33343845!2z5p2x5Lqs6YO95ZOB5bed5Yy6!5e0!3m2!1sja!2sjp!4v1615194066421!5m2!1sja!2sjp"
              width="1100"
              height="360"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe> */}
        </div>
      </div>
    </section>
  );
};
