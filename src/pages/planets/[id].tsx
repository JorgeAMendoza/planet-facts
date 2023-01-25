import Layout from "@/components/Layout/Layout";
import NavBar from "@/components/NavBar/NavBar";
import { getPlanetData, getPlanetNames } from "lib/planets";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import { Planet } from "types/api";

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

  return (
    <Layout>
      <div>
        <section>
          <div>{/* image of planet here */}</div>
          <h1>{planetData.name}</h1>
          {/*  */}
          {infoDisplay === "overview" ? (
            <>
              <p>{planetData.overview.content}</p>
              <p>{planetData.overview.source}</p>
            </>
          ) : null}
          {infoDisplay === "structure" ? (
            <>
              <p>{planetData.structure.content}</p>
              <p>{planetData.structure.source}</p>
            </>
          ) : null}
          {infoDisplay === "geology" ? (
            <>
              <p>{planetData.geology.content}</p>
              <p>{planetData.geology.source}</p>
            </>
          ) : null}
          {/*  */}
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
