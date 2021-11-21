import { LinearProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../context/useAuth";

const AdminRoute = ({ children }) => {
	const { user, admin, isLoading } = useAuth();
	const location = useLocation();
	console.log(user?.email);
	console.log(admin);
	if (isLoading) {
		return (
			<>
				<LinearProgress />
				<LinearProgress />
				<LinearProgress />
				<LinearProgress />
			</>
		);
	}
	if (user?.email && admin) {
		return children;
	}
	return <Navigate to='/adminLogin' state={{ from: location }} />;
};

export default AdminRoute;
