import styles from "src/components/Button/Button.module.css";

export const Button = () => {
  return (
    <button className={styles.btn}>
      <span className={styles.bars}>
        <span className={`${styles.bar} ${styles.top}`}></span>
        <span className={`${styles.bar} ${styles.middle}`}></span>
        <span className={`${styles.bar} ${styles.bottom}`}></span>
      </span>
      <p className={styles.menu}>menu</p>
    </button>
  );
};
