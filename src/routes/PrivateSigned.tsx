import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/Auth";

const PrivateRoute: React.FC = () => {
  const { user } = useAuth();

  return user ? <Navigate to="/providers" /> : <Outlet />;
};

export default PrivateRoute;
