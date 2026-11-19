import Link from "next/link";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        {"Sashin's Ends"}
      </Link>
      <nav aria-label="Primary" className={styles.nav}>
        <Link href="/#projects">Projects</Link>
        <a href="https://github.com/sashin123">GitHub</a>
      </nav>
    </header>
  );
}
