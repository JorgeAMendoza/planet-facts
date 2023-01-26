import Layout from "@/components/Layout/Layout";
import NavBar from "@/components/NavBar/NavBar";
import { getPlanetData, getPlanetNames } from "lib/planets";
import { GetStaticPaths, GetStaticProps } from "next";
import { useMemo, useState } from "react";
import { Planet } from "types/api";
import Image from "next/image";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPlanetNames();
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
        };
      }
      case "geology": {
        return {
          text: planetData.geology.content,
          source: planetData.geology.source,
          image: planetData.images.planet,
        };
      }
      default: {
        return {
          text: planetData.structure.content,
          source: planetData.structure.source,
          image: planetData.images.internal,
        };
      }
    }
  }, [infoDisplay, planetData]);

  return (
    <Layout>
      <div>
        <section>
          <div>
            <Image
              src={content.image}
              alt={`Image of planet ${planetData.name}`}
              width={64}
              height={64}
            />
          </div>
          <h1>{planetData.name}</h1>
          {/*  */}
          <div>
            <p aria-live="polite">{content.text}</p>
            <p>
              Source: <a href={content.source}>Wikipedia</a>
            </p>
          </div>
          <div>
            <button onClick={() => setInfoDisplay("overview")}>overview</button>
            <button onClick={() => setInfoDisplay("structure")}>
              internal structure
            </button>
            <button onClick={() => setInfoDisplay("geology")}>
              surface geology
            </button>
          </div>
        </section>

        <section>
          <div>
            <p>rotation time</p>
            <p>{planetData.rotation}</p>
          </div>
          <div>
            <p>revolution time</p>
            <p>{planetData.revolution}</p>
          </div>
          <div>
            <p>radius</p>
            <p>{planetData.radius}</p>
          </div>
          <div>
            <p>average temp.</p>
            <p>{planetData.temperature}</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// get static props and paths
export default Planet;
