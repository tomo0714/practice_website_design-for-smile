import styles from "src/components/Topics/Topics.module.css";

const POST_ITEMS = [
  {
    time: "2020.02.01",
    title: "イベントレポート「VRクリエイター座談会 〜5Gの次に来るもの〜」",
  },
  {
    time: "2020.01.18",
    title: "プレスリリースのお知らせ DIGGIN’ RECORDS",
  },
  {
    time: "2020.01.01",
    title: " 新年明けましておめでとうございます",
  },
];

export const Topics = () => {
  return (
    <section className={styles.topics}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Latest Topics</h2>
        <ul className={styles.post}>
          {POST_ITEMS.map((item) => {
            return (
              <li className={styles.item}>
                <time className={styles.date}>{item.time}</time>
                <a href="#!" className={styles.postTitle}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <a href="#!" className={styles.btn}>
          read more
        </a>
      </div>
    </section>
  );
};
