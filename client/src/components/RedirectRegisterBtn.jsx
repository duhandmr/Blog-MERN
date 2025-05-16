import React from "react";
import { Link } from "react-router-dom";

function RedirectRegisterBtn() {
  return <Link to={"/register"}>Bir hesabınız yok mu ?</Link>;
}

export default RedirectRegisterBtn;
