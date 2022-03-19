import Link from "next/link";
import styles from "src/components/ContactByIndex/ContactByIndex.module.css";

export const ContactByIndex = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.inner}>
        <div className={styles.items}>
          <div className={styles.content}>
            <h2 className={styles.title}>Contact</h2>
            <p className={styles.text}>
              制作の依頼、取材の依頼、IRや採用についての連絡・お問い合わせは
              コンタクトページから承っております。
              <br />
              まずはお気軽にご連絡ください。担当者から改めて返信いたします。
            </p>
            <Link href="/contact">
              <a className={styles.btn}>read more</a>
            </Link>
          </div>
          <div className={styles.img_wrapper}>
            <img
              className={styles.img}
              src={"images/recruit-img@2x-min.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
