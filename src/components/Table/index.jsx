import styles from "src/components/Table/Table.module.css";

const TABLE_ITEMS = [
  {
    title: "社名",
    text: "株式会社DIGSMILE",
  },
  {
    title: "代表取締役",
    text: "〇〇〇〇",
  },
  {
    title: "設立",
    text: "2021年1月1日",
  },
  {
    title: "資本金",
    text: "1億円",
  },
  {
    title: "所在地",
    text: "東京都品川区〇〇〇〇〇〇",
  },
  {
    title: "電話番号",
    text: "00-0000-0000",
  },
];

export const Table = () => {
  return (
    <table className={styles.table}>
      <tbody>
        {TABLE_ITEMS.map((item) => {
          return (
            <tr className={styles.row}>
              <th className={styles.title}>{item.title}</th>
              <td className={styles.text}>{item.text}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
