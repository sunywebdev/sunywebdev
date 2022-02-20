import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Backdrop, CircularProgress } from "@mui/material";
import useAuth from "../../context/useAuth";

export default function ResetPass() {
	const { resetPassword, auth, error } = useAuth();
	const [submitting, setSubmitting] = React.useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	console.log(error);
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		setSubmitting(true);
		resetPassword(auth, data.email, navigate, location, setSubmitting);
	};
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					minHeight: { md: "100vh", xs: "70vh" },
				}}>
				<Avatar sx={{ m: 1 }} className='navbg'>
					<LockOutlinedIcon />
				</Avatar>
				<Typography
					component='h1'
					variant='h5'
					className='color-theme'
					sx={{ fontWeight: "bold" }}>
					Reset Password
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
						Reset Password
					</Button>
				</form>
			</Box>
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={submitting}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Container>
	);
}
