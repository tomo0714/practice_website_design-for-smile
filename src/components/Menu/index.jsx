import Link from "next/link";
import { Button } from "src/components/Button";
import styles from "src/components/Menu/Menu.module.css";

export const Menu = () => {
  const NAV_ITEMS = [
    {
      id: 1,
      href: "/",
      label: <img src="images/グループ 8.png" alt="シンボル" />,
    },
    {
      id: 2,
      href: "/about",
      label: "About us",
    },
    {
      id: 3,
      href: "/#",
      label: "Works",
    },
    {
      id: 4,
      href: "/#",
      label: "Culuture",
    },
    {
      id: 5,
      href: "/#",
      label: "Topics",
    },
    {
      id: 6,
      href: "/contact",
      label: "Contact",
    },
  ];
  return (
    <>
      <Button />
      <nav className={styles.menu}>
        {/* <nav className={`${styles.menu} ${styles.open}`}> */}
        <ul className={styles.list}>
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.id} className={styles.item}>
                <Link href={item.href}>
                  <a>{item.label}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
