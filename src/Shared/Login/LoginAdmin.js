import {
	Alert,
	Avatar,
	Button,
	Container,
	Grid,
	Snackbar,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../context/useAuth";
import googleLogo from "./google-logo.png";

const LoginAdmin = () => {
	const { signInUsingGoogle, admin } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const [open, setOpen] = React.useState(false);
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};
	const handleGoogleLogin = () => {
		signInUsingGoogle(navigate, location, setOpen);
	};

	return (
		<Container>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: "95vh" }}>
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
			</Grid>
			{admin === true ? (
				<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
					<Alert
						onClose={handleClose}
						severity='success'
						classes={{ root: "bg-1" }}
						variant='filled'
						sx={{ width: "100%" }}>
						Login Successfull, Going Back To Desired Page.
					</Alert>
				</Snackbar>
			) : (
				<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
					<Alert
						onClose={handleClose}
						severity='error'
						classes={{ root: "bg-1" }}
						variant='filled'
						sx={{ width: "100%" }}>
						You Are Not An Admin
					</Alert>
				</Snackbar>
			)}
		</Container>
	);
};

export default LoginAdmin;
