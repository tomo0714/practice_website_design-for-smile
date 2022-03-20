import styles from "src/components/Button/Button.module.css";

export const Button = (props) => {
  return (
    <button onClick={props.handleClick} className={styles.btn}>
      <span className={styles.bars}>
        <span
          className={`${styles.bar} ${props.name ? styles.cross : null} ${
            styles.top
          }`}
        ></span>
        <span
          className={`${styles.bar} ${props.name ? styles.cross : null} ${
            styles.middle
          }`}
        ></span>
        <span
          className={`${styles.bar} ${props.name ? styles.cross : null} ${
            styles.bottom
          }`}
        ></span>
      </span>
      <p className={styles.menu}>menu</p>
    </button>
  );
};
