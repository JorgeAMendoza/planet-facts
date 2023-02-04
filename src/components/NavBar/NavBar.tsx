import { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import Image from "next/image";
import hamburgerIcon from "../../../public/icon-hamburger.svg";
import arrowIcon from "../../../public/icon-chevron.svg";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className={styles.navBar}>
      <p className={styles.navBarLogo}>the planets</p>

      {/* rendered on screens smaller than tablet */}
      <button
        aria-label="Click to open planet navigation menu"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className={styles.mobileMenuButton}
        data-show={showMobileMenu}
      >
        <Image src={hamburgerIcon} alt="" width={24} height={17}></Image>
      </button>
      <nav className={styles.mobileNavBar} data-show={showMobileMenu}>
        <ul>
          <li>
            <Link href="/planets/mercury" data-cy="toMercuryLink">
              mercury{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/planets/venus" data-cy="toVenusLink">
              venus{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/planets/earth" data-cy="toEarthLink">
              earth{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/planets/mars" data-cy="toMarsLink">
              mars{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/planets/jupiter" data-cy="toJupiterLink">
              jupiter{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/planets/saturn" data-cy="toSaturnLink">
              saturn{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/planets/uranus" data-cy="toUranusLink">
              uranus{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/planets/neptune" data-cy="toUranusLink">
              neptune{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* rendered on tablet and above */}
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
