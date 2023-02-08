import Head from "next/head";
import { ReactNode } from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Planet webiste that displays various facts about planets, built with next JS 13"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <header className={styles.headerContainer}>
          <div className={styles.navBarContainer}>
            <NavBar />
          </div>
        </header>
        <div className={styles.layoutContainer}>{children}</div>
      </div>
    </div>
  );
}
