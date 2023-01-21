import Link from "next/link";

const NavBar = () => {
  return (
    <header>
      <p>
        <Link href="/">the planets</Link>
      </p>

      <nav>
        <ul>
          {/* here map over json data, lets imagne that we are reaching an API, and lets say we discover a new planet, this makes it easier in the future */}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
