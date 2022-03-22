import styles from "src/components/Button/Button.module.css";

export const Button = (props) => {
  const BAR_ITEMS = [
    {
      position: styles.top,
    },
    {
      position: styles.middle,
    },
    {
      position: styles.bottom,
    },
  ];
  return (
    <button onClick={props.handleClick} className={styles.btn}>
      <div>
        {BAR_ITEMS.map((item) => {
          return (
            <span
              key={item.position}
              className={`${styles.bar} ${props.name ? styles.cross : null} ${
                item.position
              }`}
            ></span>
          );
        })}
      </div>
      <p className={styles.menu}>menu</p>
    </button>
  );
};
