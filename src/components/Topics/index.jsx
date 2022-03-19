import styles from "src/components/Topics/Topics.module.css";

export const Topics = () => {
  return (
    <section className={styles.topics}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Latest Topics</h2>
        <ul className={styles.post}>
          <li className={styles.post__item}>
            <time className={styles.post__date}>2020.02.01</time>
            <a href="#!" className={styles.post__title}>
              イベントレポート「VRクリエイター座談会 〜5Gの次に来るもの〜」
            </a>
          </li>
          <li className={styles.post__item}>
            <time className={styles.post__date}>2020.01.18</time>
            <a href="#!" className={styles.post__title}>
              プレスリリースのお知らせ DIGGIN’ RECORDS
            </a>
          </li>
          <li className={styles.post__item}>
            <time className={styles.post__date}>2020.01.01</time>
            <a href="#!" className={styles.post__title}>
              新年明けましておめでとうございます
            </a>
          </li>
        </ul>
        <a href="#!" className={styles.btn}>
          read more
        </a>
      </div>
    </section>
  );
};
