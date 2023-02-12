import {
	Button,
	Grid,
	TextField,
	Typography,
	CircularProgress,
	Backdrop,
	Box,
} from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import SmsIcon from "@mui/icons-material/Sms";
import EmailIcon from "@mui/icons-material/Email";
import Swal from "sweetalert2";

const Contact = () => {
	const form = useRef();
	const [submitting, setSubmitting] = useState(false);
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = ({ message, subject, userEmail, userName, phone }) => {
		const data = {
			message,
			subject,
			userEmail,
			userName,
			phone,
			submitTime: new Date().toLocaleString("en-GB"),
		};
		setSubmitting(true);
		axios
			.post(`${process.env.REACT_APP_SERVER_API}/mails`, data)
			.then(function (response) {
				setSubmitting(false);
				Swal.fire({
					icon: "success",
					title: "Your Mail Sent Successfully",
					showConfirmButton: true,
					timer: 1500,
				});
				reset();
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<Box
			id='contact'
			sx={{
				overflowX: "hidden",
				px: { md: 5, xs: 2 },
				minHeight: "100vh",
				display: "grid",
				placeItems: "center",
				mt: { md: 0, xs: 5 },
			}}>
			<Grid container spacing={2} sx={{ my: 3 }}>
				<Grid item xs={12}>
					<Box sx={{ textAlign: "left" }}>
						<Typography
							component='div'
							className='color-theme'
							sx={{
								fontWeight: 900,
								fontSize: { md: "5.5rem", xs: "3.7rem" },
								lineHeight: 1,
							}}>
							Contact Me
						</Typography>
						<Typography
							variant='h5'
							component='div'
							className='color-text'
							gutterBottom>
							Have a project in mind? Let's talk about it.
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					md={6}
					xs={12}
					className='color-text'
					order={{ md: 1, xs: 2 }}>
					<form ref={form} onSubmit={handleSubmit(onSubmit)} method='post'>
						<Grid container spacing={2}>
							<Grid item md={6} xs={12}>
								<Grid container spacing={2}>
									<Grid item md={12} xs={12}>
										<TextField
											required
											size='small'
											sx={{ width: "100%" }}
											id='outlined-basic'
											name='UserName'
											label='Full Name'
											{...register("userName", { required: true })}
										/>
									</Grid>

									<Grid item md={12} xs={12}>
										<TextField
											required
											size='small'
											sx={{ width: "100%" }}
											id='outlined-basic'
											name='UserEmail'
											type='email'
											label='Email'
											{...register("userEmail", { required: true })}
										/>
									</Grid>
									<Grid item md={12} xs={12}>
										<TextField
											size='small'
											sx={{ width: "100%" }}
											id='outlined-basic'
											name='phone'
											label='Phone Number'
											{...register("phone", { required: true })}
										/>
									</Grid>
									<Grid item md={12} xs={12}>
										<TextField
											required
											size='small'
											sx={{ width: "100%", mb: { md: 2, xs: 0 } }}
											id='outlined-basic'
											label='Subject'
											name='Subject'
											{...register("subject", { required: true })}
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									required
									size='small'
									sx={{ width: "100%", mb: 2 }}
									id='"outlined-multiline-flexible'
									label='Message'
									name='Message'
									multiline
									rows={8.3}
									{...register("message", { required: true })}
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							variant='contained'
							className='button border'
							sx={{
								px: 3.5,
								fontWeight: "bold",
								border: "2px solid",
								backgroundColor: "transparent",
								borderRadius: "7px",
								float: "left",
							}}>
							SEND MESSAGE
						</Button>
					</form>
				</Grid>
				<Grid
					item
					md={6}
					xs={12}
					className='color-text'
					order={{ md: 2, xs: 1 }}>
					<Typography
						variant='h5'
						component='div'
						className='color-text'
						gutterBottom>
						Do you speak Alien Language? It's ok if you don't, I speak English
						too.
					</Typography>
					<Typography
						sx={{ mb: 1, fontWeight: 900 }}
						className='color-theme'
						variant='h5'
						component='div'>
						Click To Reach Me
					</Typography>

					<Grid
						sx={{
							mb: 3,
							display: "flex",
							justifyContent: "space-evenly",
						}}>
						<GitHubIcon
							className='color-text'
							sx={{
								cursor: "pointer",
								fontSize: { md: "3.5rem", xs: "2.7rem" },
								"&:hover": {
									backgroundColor: "white !important",
									color: "black !important",
									border: "2px solid black",
									borderRadius: "5px",
								},
							}}
							onClick={() =>
								window.open("https://github.com/sunywebdev", "_blank")
							}></GitHubIcon>
						<LinkedInIcon
							sx={{
								cursor: "pointer",
								fontSize: { md: "3.5rem", xs: "2.7rem" },
								color: "#0073B2",
								"&:hover": {
									backgroundColor: "white !important",
									border: "2px solid #0073B2",
									borderRadius: "5px",
								},
							}}
							onClick={() =>
								window.open("https://www.linkedin.com/in/sunywebdev", "_blank")
							}></LinkedInIcon>
						<FacebookIcon
							sx={{
								cursor: "pointer",
								fontSize: { md: "3.5rem", xs: "2.7rem" },
								color: "#0D8BF0",
								"&:hover": {
									backgroundColor: "white !important",
									border: "2px solid #0D8BF0",
									borderRadius: "5px",
								},
							}}
							onClick={() =>
								window.open("https://www.facebook.com/sunywebdev", "_blank")
							}></FacebookIcon>
						<WhatsAppIcon
							sx={{
								cursor: "pointer",
								fontSize: { md: "3.5rem", xs: "2.7rem" },
								color: "#0F9D58",
								"&:hover": {
									backgroundColor: "white !important",
									border: "2px solid #0F9D58",
									borderRadius: "5px",
								},
							}}
							onClick={() =>
								window.open(
									"https://api.whatsapp.com/send?phone=01861917938",
									"_blank",
								)
							}></WhatsAppIcon>
						<CallIcon
							sx={{
								cursor: "pointer",
								fontSize: { md: "3.5rem", xs: "2.7rem" },
								color: "#3CC886",
								"&:hover": {
									backgroundColor: "white !important",
									border: "2px solid #3CC886",
									borderRadius: "5px",
								},
							}}
							onClick={() =>
								window.open("tel:01861917938", "_blank")
							}></CallIcon>
						<SmsIcon
							sx={{
								cursor: "pointer",
								fontSize: { md: "3.5rem", xs: "2.7rem" },
								color: "#2C97AA",
								"&:hover": {
									backgroundColor: "white !important",
									border: "2px solid #2C97AA",
									borderRadius: "5px",
								},
							}}
							onClick={() =>
								window.open("sms:01861917938", "_blank")
							}></SmsIcon>
						<EmailIcon
							sx={{
								cursor: "pointer",
								fontSize: { md: "3.5rem", xs: "2.7rem" },
								color: "#EB4436",
								"&:hover": {
									backgroundColor: "white !important",
									border: "2px solid #EB4436",
									borderRadius: "5px",
								},
							}}
							onClick={() =>
								window.open("mailto:sunywebdev@gmail.com", "_blank")
							}></EmailIcon>
					</Grid>
				</Grid>
			</Grid>
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={submitting}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Box>
	);
};

export default Contact;
