import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "../../utils/authentication";

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {
  const user = isLoggedIn();

  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default MinimalLayout;
