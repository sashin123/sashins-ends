import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <a href="mailto:sashin.dev@protonmail.com">sashin.dev@protonmail.com</a>
      <a href="https://github.com/sashin123">GitHub</a>
    </footer>
  );
}
