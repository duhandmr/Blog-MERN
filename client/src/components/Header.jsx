import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex justify-between bg-gray-700 text-white px-10 py-5">
      <Link to={"/"}>Blog App</Link>
      <Navbar />
    </header>
  );
}

export default Header;
