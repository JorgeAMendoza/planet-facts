import Head from "next/head";
import { ReactNode } from "react";
import NavBar from "../NavBar/NavBar";

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
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </div>
  );
}
