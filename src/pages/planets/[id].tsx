import NavBar from "@/components/NavBar";

const Planet = () => {
  return (
    <div>
      <NavBar />
      <main>
        <section>
          <div>{/* image of planet here */}</div>
          <h1>planet name</h1>
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
            <p>time</p>
          </div>
          <div>
            <p>revolution time</p>
            <p>time</p>
          </div>
          <div>
            <p>radius</p>
            <p>stats</p>
          </div>
          <div>
            <p>rotation time</p>
            <p>temp</p>
          </div>
        </section>
      </main>
    </div>
  );
};

// get static props and paths
export default Planet;
