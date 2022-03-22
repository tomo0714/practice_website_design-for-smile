import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "src/components/Button";
import styles from "src/components/Menu/Menu.module.css";

export const Menu = () => {
  const [name, setName] = useState(false);
  const handleClick = () => setName(!name);
  const NAV_ITEMS = [
    {
      href: "/",
      label: <Image src="/images/グループ 8.png" width={50} height={50} />,
    },
    {
      href: "/about",
      label: "About us",
    },
    {
      href: "/#",
      label: "Works",
    },
    {
      href: "/#",
      label: "Culuture",
    },
    {
      href: "/#",
      label: "Topics",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];
  return (
    <>
      <Button name={name} handleClick={handleClick} />
      <nav className={`${styles.menu} ${name ? styles.open : null}`}>
        <ul className={styles.list}>
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.label} className={styles.item}>
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
