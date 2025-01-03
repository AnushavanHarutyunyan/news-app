import useAuth from "@/shared/hooks/useAuth";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    return !isAuthenticated ? <Navigate to={"/login"} replace state={{ from: location }} /> : <> {children}</>;
};

export default ProtectedRoute;
