import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navBar}>
      <p>the planets</p>

      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href={`/planets/mercury`} data-cy="toMercuryLink">
              mecury
            </Link>
          </li>
          <li>
            <Link href={`/planets/venus`} data-cy="toVenusLink">
              venus
            </Link>
          </li>
          <li>
            <Link href={`/planets/earth`} data-cy="toEarthLink">
              earth
            </Link>
          </li>
          <li>
            <Link href={`/planets/mars`} data-cy="toMarsLink">
              mars
            </Link>
          </li>
          <li>
            <Link href={`/planets/jupiter`} data-cy="toJupiterLink">
              jupiter
            </Link>
          </li>
          <li>
            <Link href={`/planets/saturn`} data-cy="toSaturnLink">
              saturn
            </Link>
          </li>
          <li>
            <Link href={`/planets/uranus`} data-cy="toUranusLink">
              uranus
            </Link>
          </li>
          <li>
            <Link href={`/planets/neptune`} data-cy="toNeptuneLink">
              neptune
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
