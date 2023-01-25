import Layout from "@/components/Layout/Layout";
import NavBar from "@/components/NavBar/NavBar";
import { getPlanetData, getPlanetNames } from "lib/planets";
import { GetStaticPaths, GetStaticProps } from "next";
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
  return (
    <Layout>
      <div>
        <section>
          {/* here iterate over data and create three sections, some state will be needed to know what option is selected */}
          <div>{/* image of planet here */}</div>
          <h1>{planetData.name}</h1>
          <p>card content</p>
          <p>link source</p>

          <div>
            <button>overview</button>
            <button>internal structure</button>
            <button>surface geology</button>
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
