import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    sessionStorage.setItem("redirectAfterLogin", encodeURIComponent(window.location.search));
    return <Navigate to="/auth" />;
  }
  return <Outlet />;
};

export { RequireAuth };