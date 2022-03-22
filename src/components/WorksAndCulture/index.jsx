import styles from "src/components/WorksAndCulture/WorksAndCulture.module.css";

const WORKSANDCULTURE_ITEMS = [
  {
    title: "Works",
    img: "images/daria-shevtsova-k_RYBedEvDw-unsplash@2x-min.png",
    text: "DIGSMILEの制作実績を紹介します。",
  },
  {
    title: "Culuture",
    img: "images/culture-img@2x-min.png",
    text: "DIGSMILEの社内文化について紹介します。",
  },
];

export const WorksAndCulture = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.items}>
          {WORKSANDCULTURE_ITEMS.map((item) => {
            return (
              <section className={styles.item}>
                <h2 className={styles.title}>{item.title}</h2>
                <figure className={styles.img}>
                  <img src={item.img} alt={item.title} />
                </figure>
                <p className={styles.text}>{item.text}</p>
                <a href="#!" className={styles.btn}>
                  read more
                </a>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};
