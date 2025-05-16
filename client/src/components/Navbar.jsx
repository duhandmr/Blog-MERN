import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";

function Navbar() {
  const { user } = useContext(AuthContext);

  return <nav>{user ? <Welcome /> : <Link to="/login">Login</Link>}</nav>;
}

export default Navbar;
