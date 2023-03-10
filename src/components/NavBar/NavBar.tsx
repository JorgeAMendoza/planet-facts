import Link from "next/link";
import styles from "./NavBar.module.css";
import Image from "next/image";
import hamburgerIcon from "../../../public/icon-hamburger.svg";
import arrowIcon from "../../../public/icon-chevron.svg";
import localFont from "@next/font/local";
import { SetStateAction } from "react";

const spartan = localFont({
  src: "../../../public/Spartan-Bold.ttf",
  display: "block",
});

interface NavBarProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<SetStateAction<boolean>>;
}

const NavBar = ({ showMenu, setShowMenu }: NavBarProps) => {
  return (
    <header className={styles.navBar}>
      <p className={styles.navBarLogo}>the planets</p>

      {/* rendered on screens smaller than tablet */}
      <button
        aria-label={`click to ${
          showMenu ? "close" : "open"
        } the navigation menu`}
        onClick={() => {
          if (showMenu) {
            document.body.classList.remove("overflow");
            setShowMenu(false);
          } else {
            document.body.classList.add("overflow");
            setShowMenu(true);
          }
        }}
        className={styles.mobileMenuButton}
        data-show={showMenu}
        tabIndex={0}
        aria-controls="mobile-nav"
      >
        <Image src={hamburgerIcon} alt="" width={24} height={17}></Image>
      </button>
      <nav
        id="mobile-nav"
        className={`${styles.mobileNavBar} ${spartan.className}`}
        data-show={showMenu}
      >
        <ul className={styles.mobileNavLinks} role="list">
          <li>
            <Link href="/planets/mercury" data-cy="toMercuryLinkMobile">
              mercury{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/planets/venus" data-cy="toVenusLinkMobile">
              venus{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/planets/earth" data-cy="toEarthLinkMobile">
              earth{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/planets/mars" data-cy="toMarsLinkMobile">
              mars{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/planets/jupiter" data-cy="toJupiterLinkMobile">
              jupiter{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/planets/saturn" data-cy="toSaturnLinkMobile">
              saturn{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/planets/uranus" data-cy="toUranusLinkMobile">
              uranus{" "}
              <span>
                <Image src={arrowIcon} alt="" width={4} height={8} />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/planets/neptune" data-cy="toUranusLinkMobile">
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
        <ul className={`${styles.navLinks} ${spartan.className}`}>
          <li>
            <Link href={`/planets/mercury`} data-cy="toMercuryLink">
              mercury
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
