import Layout from "@/components/Layout/Layout";
import { getPlanetData, getPlanetPaths } from "lib/planets";
import { GetStaticPaths, GetStaticProps } from "next";
import { useMemo, useState } from "react";
import { Planet } from "types/api";
import Image from "next/image";
import styles from "../../styles/PlanetPage.module.css";
import utilStyles from "../../styles/utils.module.css";

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
        <div className={styles.planetImage}>
          <Image
            src={content.image}
            alt={`Image of planet ${planetData.name}`}
            width={64}
            height={64}
            data-cy="planetImage"
          />

          {infoDisplay === "geology" ? (
            <div>
              <Image
                src={content.geologyImage}
                alt={`geology surface of ${planetData.name}`}
                width={64}
                height={64}
              />
            </div>
          ) : null}
        </div>
        <h1 data-cy="planetName" className={styles.planetName}>
          {planetData.name}
        </h1>
        {/*  */}
        <div className={styles.planetConent}>
          <p aria-live="polite">{content.text}</p>
          <p>
            Source:{" "}
            <a data-cy="source" href={content.source}>
              Wikipedia
            </a>
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => setInfoDisplay("overview")}
            data-cy="overviewButton"
          >
            overview
          </button>
          <button
            onClick={() => setInfoDisplay("structure")}
            data-cy="internalButton"
          >
            internal structure
          </button>
          <button
            onClick={() => setInfoDisplay("geology")}
            data-cy="geologyButton"
          >
            surface geology
          </button>
        </div>

        <section className={styles.planetStats}>
          <div>
            <p>rotation time</p>
            <p data-cy="rotationTime">{planetData.rotation}</p>
          </div>
          <div>
            <p>revolution time</p>
            <p data-cy="revolutionTime">{planetData.revolution}</p>
          </div>
          <div>
            <p>radius</p>
            <p data-cy="radius">{planetData.radius}</p>
          </div>
          <div>
            <p>average temp.</p>
            <p data-cy="averageTemp">{planetData.temperature}</p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

// get static props and paths
export default Planet;
