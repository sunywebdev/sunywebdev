import {
	Avatar,
	Button,
	CircularProgress,
	Container,
	Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../context/useAuth";
import googleLogo from "./google-logo.png";

const Login = () => {
	const { signInUsingGoogle, isLoading } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const handleGoogleLogin = () => {
		signInUsingGoogle(navigate, location);
	};

	return (
		<Container>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: "95vh" }}>
				{!isLoading ? (
					<Button
						onClick={handleGoogleLogin}
						sx={{
							borderRadius: "40px",
							backgroundColor: "white",
							color: "#4D82E5",
							fontWeight: "bold",
							px: 5,
							"&.MuiButtonBase-root:hover": {
								bgcolor: "transparent",
							},
						}}
						variant='contained'
						startIcon={<Avatar sx={{ mr: 1 }} src={googleLogo} />}>
						Continue With Google
					</Button>
				) : (
					<Box sx={{ display: "flex" }}>
						<CircularProgress />
					</Box>
				)}
			</Grid>
		</Container>
	);
};

export default Login;
