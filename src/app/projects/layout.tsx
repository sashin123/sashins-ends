import styles from "./layout.module.css";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className={styles.prose}>{children}</article>;
}
