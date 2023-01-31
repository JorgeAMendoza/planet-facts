import Link from "next/link";

const NavBar = () => {
  return (
    <header>
      <p>the planets</p>

      <nav>
        <ul>
          <li>
            <Link href={`/planets/mercury`}>mecury</Link>
          </li>
          <li>
            <Link href={`/planets/venus`}>venus</Link>
          </li>
          <li>
            <Link href={`/planets/earth`}>earth</Link>
          </li>
          <li>
            <Link href={`/planets/mars`}>mars</Link>
          </li>
          <li>
            <Link href={`/planets/jupiter`}>jupiter</Link>
          </li>
          <li>
            <Link href={`/planets/saturn`}>saturn</Link>
          </li>
          <li>
            <Link href={`/planets/uranus`}>uranus</Link>
          </li>
          <li>
            <Link href={`/planets/neptune`}>neptune</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
