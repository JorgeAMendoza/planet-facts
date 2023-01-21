import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>This is the homepage</h1>
      </div>
    </Layout>
  );
}
