import Link from 'next/link';

/* Components */
// import DarkModeToggle from "../DarkModeToggle";

const Header = ({ props }) => {
  return (
    <nav>
      <div className="nav-wrapper #1565c0 blue darken-3">
        <Link href="/">
          <a className="brand-logo left">MyStore</a>
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link href="/cart">
              <a>cart</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
