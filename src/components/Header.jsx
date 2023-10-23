import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Titik Termarkir</Link>
          </li>
          <li>
            <Link to={"/navigasi"}>Pembuatan Rute</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
