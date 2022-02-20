import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../context/useAuth";
import HashLoader from "react-spinners/HashLoader";

const AdminRoute = ({ children }) => {
	const { user, admin, isLoading } = useAuth();
	const location = useLocation();
	if (isLoading) {
		return (
			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
				}}>
				<HashLoader size={100} color={"#FF014F"} />
			</div>
		);
	}
	if (user?.email && admin) {
		return children;
	}
	return <Navigate to='/login' state={{ from: location }} />;
};

export default AdminRoute;
