import styles from "src/components/Radio/Radio.module.css";

const RADIO_ITEMS = [
  { name: "request", label: "制作依頼" },
  { name: "recruit", label: "採用" },
  { name: "ir", label: "IR" },
  { name: "other", label: "その他" },
];

export const Radio = () => {
  return (
    <ul className={styles.radio}>
      {RADIO_ITEMS.map((item) => {
        return (
          <li className={styles.item}>
            <input type="radio" className={styles.btn} name={item.name} />
            <label>{item.label}</label>
          </li>
        );
      })}
    </ul>
  );
};
