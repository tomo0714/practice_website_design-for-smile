import Link from "next/link";
import { Button } from "src/components/Button";
import styles from "src/components/Menu/Menu.module.css";

export const Menu = () => {
  const NAV_ITEMS = [
    {
      href: "/",
      label: <img src="images/グループ 8.png" alt="シンボル" />,
    },
    { href: "/about", label: "About us" },
    { href: "/#", label: "Works" },
    { href: "/#", label: "Culuture" },
    { href: "/#", label: "Topics" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <>
      <Button />
      <nav className={styles.menu}>
        {/* <nav className={`${styles.menu} ${styles.open}`}> */}
        <ul className={styles.list}>
          {NAV_ITEMS.map((item) => {
            return (
              <li className={styles.item}>
                <Link key={item.href} href={item.href}>
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
