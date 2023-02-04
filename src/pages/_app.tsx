import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Antonio } from "@next/font/google";

const antonio = Antonio({ subsets: ["latin"], display: "block" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={antonio.className}>
      <Component {...pageProps} />
    </div>
  );
}
