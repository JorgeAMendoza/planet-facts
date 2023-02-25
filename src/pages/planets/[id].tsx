import Layout from "@/components/Layout/Layout";
import { getPlanetData, getPlanetPaths } from "lib/planets";
import { GetStaticPaths, GetStaticProps } from "next";
import { useMemo, useState } from "react";
import { Planet } from "types/api";
import Image from "next/image";
import styles from "../../styles/PlanetPage.module.css";
import localFont from "@next/font/local";
import clsx from "clsx";
import sourceIcon from "../../../public/icon-source.svg";

const spartan = localFont({
  src: "../../../public/Spartan-Bold.ttf",
  display: "block",
});
const spartanRegular = localFont({
  src: "../../../public/Spartan-Regular.ttf",
  display: "block",
});

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPlanetPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  if (id && typeof id === "string") {
    const planetData = await getPlanetData(id);
    if (!planetData) return { notFound: true };
    else
      return {
        props: {
          planetData,
        },
      };
  } else {
    return { notFound: true };
  }
};

interface PlanetProps {
  planetData: Planet;
}

const Planet = ({ planetData }: PlanetProps) => {
  const [infoDisplay, setInfoDisplay] = useState<
    "overview" | "structure" | "geology"
  >("overview");

  const content = useMemo(() => {
    switch (infoDisplay) {
      case "overview": {
        return {
          text: planetData.overview.content,
          source: planetData.overview.source,
          image: planetData.images.planet,
          geologyImage: planetData.images.geology,
        };
      }
      case "geology": {
        return {
          text: planetData.geology.content,
          source: planetData.geology.source,
          image: planetData.images.planet,
          geologyImage: planetData.images.geology,
        };
      }
      default: {
        return {
          text: planetData.structure.content,
          source: planetData.structure.source,
          image: planetData.images.internal,
          geologyImage: planetData.images.geology,
        };
      }
    }
  }, [infoDisplay, planetData]);

  return (
    <Layout>
      <main className={`${styles.planetPage} `}>
        <div className={styles.planetImage} data-planet={planetData.name}>
          <Image
            src={content.image}
            alt={`Image of planet ${planetData.name}`}
            width={173}
            height={173}
            data-cy="planetImage"
            sizes="(min-width: 768px) 50vw,
                      (min-width: 1024px) 100vw,
                      33vw"
          />

          {infoDisplay === "geology" ? (
            <div className={styles.geologyImage}>
              <Image
                src={content.geologyImage}
                alt={`geology surface of ${planetData.name}`}
                width={66}
                height={66}
              />
            </div>
          ) : null}
        </div>

        {/*  */}
        <div className={styles.planetConent}>
          <h1 data-cy="planetName" className={styles.planetName}>
            {planetData.name}
          </h1>
          <p
            aria-live="polite"
            className={`${spartanRegular.className} ${styles.planetText}`}
          >
            {content.text}
          </p>
          <p className={`${styles.planetSource} ${spartanRegular.className}`}>
            Source:{" "}
            <a
              data-cy="source"
              href={content.source}
              className={`${spartan.className}`}
            >
              Wikipedia{" "}
              <span>
                <Image src={sourceIcon} width={12} height={12} alt="" />
              </span>
            </a>
          </p>
        </div>
        <div
          className={`${styles.buttonContainer} ${spartan.className}`}
          data-planet={planetData.name}
        >
          <button
            onClick={() => setInfoDisplay("overview")}
            data-cy="overviewButton"
            className={`${styles.contentButton} ${clsx(
              infoDisplay === "overview" && styles.buttonSelected
            )}`}
          >
            <p className={styles.buttonMobileText}>overview</p>
            <p className={styles.buttonTabletText}>
              <span>01</span>
              <span>overview</span>
            </p>
          </button>
          <button
            onClick={() => setInfoDisplay("structure")}
            data-cy="internalButton"
            className={`${styles.contentButton} ${clsx(
              infoDisplay === "structure" && styles.buttonSelected
            )}`}
          >
            <p className={styles.buttonTabletText}>
              <span>02</span>
              <span>internal structure</span>
            </p>
            <p className={styles.buttonMobileText}>structure</p>
          </button>
          <button
            onClick={() => setInfoDisplay("geology")}
            data-cy="geologyButton"
            className={`${styles.contentButton} ${clsx(
              infoDisplay === "geology" && styles.buttonSelected
            )}`}
          >
            <p className={styles.buttonTabletText}>
              <span>03</span>
              <span>surface geology</span>
            </p>
            <p className={styles.buttonMobileText}>surface</p>
          </button>
        </div>

        <section className={styles.planetStats}>
          <div className={styles.stat}>
            <p className={spartan.className}>rotation time</p>
            <p data-cy="rotationTime">{planetData.rotation}</p>
          </div>
          <div className={styles.stat}>
            <p className={spartan.className}>revolution time</p>
            <p data-cy="revolutionTime">{planetData.revolution}</p>
          </div>
          <div className={styles.stat}>
            <p className={spartan.className}>radius</p>
            <p data-cy="radius">{planetData.radius}</p>
          </div>
          <div className={styles.stat}>
            <p className={spartan.className}>average temp.</p>
            <p data-cy="averageTemp">{planetData.temperature}</p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

// get static props and paths
export default Planet;
