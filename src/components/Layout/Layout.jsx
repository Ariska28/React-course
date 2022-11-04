import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import styles from "./styles.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};
