import { Navigation } from "../../molecules/Navigation";
import styles from "./style.module.css";

export const BaseLayout = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <section className={styles.common}>
        <Navigation />
      </section>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};
