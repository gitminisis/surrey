import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { logout } from "../../utils/authentication";
import { Navigate } from "react-router";
const Logout = (props) => {
  const [isLoggedOut, setLoggedOut] = useState(false);
  useEffect(() => {
    logout().then((res) => {
      console.log(res);
      setLoggedOut(true);
    });
  }, []);
  if (isLoggedOut) {
    return <Navigate to="/login" replace />;
  }
  return null;
};

Logout.propTypes = {};

export default Logout;
