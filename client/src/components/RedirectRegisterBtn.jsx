import React from "react";
import { Link } from "react-router-dom";

function RedirectRegisterBtn() {
  return (
    <Link
      to={"/register"}
      className="text-sm underline hover:text-blue-500 transition-all ease-in"
    >
      Bir hesabınız yok mu ?
    </Link>
  );
}

export default RedirectRegisterBtn;
