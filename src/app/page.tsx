import Link from "next/link";
import { getProjects } from "@/lib/projects";
import styles from "./page.module.css";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          {"Sashin's "}
          <span className={styles.accent}>Ends</span>
        </h1>
        <p className={styles.intro}>
          On a lifelong journey of understanding how software really works, and
          building reliable things along the way. This is my space to learn out
          loud, systems programming first, and broaden from there.
        </p>
      </section>
      
      <section id="projects" className={styles.projects}>
        <h2 className={styles.label}>Projects</h2>
        <ul role="list" className={styles.list}>
          {projects.map((p, i) => (
            <li key={p.slug} style={{ "--i": i } as React.CSSProperties}>
              <Link href={`/projects/${p.slug}`} className={styles.row}>
                <span className={styles.index}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.name}>{p.title}</span>
                <span className={styles.blurb}>{p.description}</span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
