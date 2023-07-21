import Head from "next/head";

import { ReactNode, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Layout.module.css";
import useIsMobile from "@/hooks/useMedia";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useIsMobile();

  const router = useRouter();

  useEffect(() => {
    if (!isMobile) document.body.classList.remove("overflow");
    setShowMenu(false);
  }, [isMobile]);


  useEffect(() => {
    const handleChange = () => {
      setShowMenu(false);
    };

    router.events.on("routeChangeStart", handleChange);

    return () => {
      router.events.off("routeChangeStart", handleChange);
    };
  }, [router.events]);
  return (
    <div>
      <Head>
        <title>The Planets</title>
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
            <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
          </div>
        </header>
        <div className={styles.layoutContainer}>{children}</div>
      </div>
    </div>
  );
}
