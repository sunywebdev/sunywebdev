import {
	Avatar,
	Backdrop,
	Button,
	CircularProgress,
	Container,
	Grid,
	Typography,
	Box,
	TextField,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";
import googleLogo from "./google-logo.png";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm } from "react-hook-form";

const LoginAdmin = () => {
	const { signInUsingGoogle, isLoading, signInWithEmailPassword, auth, error } =
		useAuth();
	console.log(error);
	const location = useLocation();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm();
	const handleGoogleLogin = () => {
		signInUsingGoogle(navigate, location);
	};
	const [submitting, setSubmitting] = React.useState(false);
	const onSubmit = (data) => {
		setSubmitting(true);
		signInWithEmailPassword(
			auth,
			data.email,
			data.password,
			navigate,
			location,
			setSubmitting,
		);
	};

	return (
		<Container>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: "95vh" }}>
				<Box
					sx={{
						paddingTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Avatar sx={{ m: 1 }} className='navbg'>
						<LockOutlinedIcon />
					</Avatar>
					<Typography
						component='h1'
						variant='h5'
						className='color-theme'
						sx={{ fontWeight: "bold" }}>
						Sign in
					</Typography>
					<form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 3 }}>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
							{...register("email", { required: true })}
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							{...register("password", { required: true })}
						/>
						<Typography variant='body2'>
							<Link
								style={{ textDecoration: "none" }}
								className='color-theme'
								to='/resetpassword'>
								Forgot your password ? Reset Now !
							</Link>
						</Typography>
						<Button
							type='submit'
							variant='contained'
							className='button border'
							sx={{
								width: "100%",
								my: 2,
								px: 3,
								fontWeight: "bold",
								border: "2px solid",
								backgroundColor: "transparent",
								borderRadius: "25px",
							}}>
							Login
						</Button>
					</form>
				</Box>
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
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={submitting || isLoading}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Container>
	);
};

export default LoginAdmin;
