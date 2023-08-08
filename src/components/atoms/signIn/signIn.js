import React from "react";

import { Link } from "react-router-dom";

function SignIn({ className }) {
  return <Link className={className} to="/shop_app/login">
    Sign in
  </Link>
}

export default SignIn;
