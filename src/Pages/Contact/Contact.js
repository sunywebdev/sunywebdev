import {
	Button,
	Container,
	Grid,
	TextField,
	Typography,
	CircularProgress,
	Backdrop,
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
	const onSubmit = ({ message, subject, userEmail, userName }) => {
		const data = {
			message,
			subject,
			userEmail,
			userName,
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
		<Container
			sx={{ minHeight: "100vh", mt: { md: 0, xs: 9 }, overflow: "auto" }}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{ minHeight: { md: "100vh", xs: "70vh" } }}>
				<Grid container>
					<Grid
						data-aos='fade-right'
						item
						md={6}
						xs={12}
						sx={{ textAlign: { md: "left", xs: "center" } }}>
						<Typography
							sx={{ mb: 0, fontWeight: 900 }}
							variant='h3'
							component='div'
							className='color-theme'
							gutterBottom>
							CONTACT
						</Typography>
						<Typography
							sx={{ mb: 2 }}
							variant='h5'
							component='div'
							className='color-text'
							gutterBottom>
							Do you speak Alien Language? It's ok if you don't, I speak English
							too.
						</Typography>
					</Grid>
					<Grid data-aos='fade-left' item md={6} xs={12} className='color-text'>
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
									window.open(
										"https://www.linkedin.com/in/sunywebdev",
										"_blank",
									)
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

				<Grid data-aos='fade-up' container spacing={2}>
					<Grid item md={12} xs={12} sx={{ mx: "auto" }}>
						<form ref={form} onSubmit={handleSubmit(onSubmit)} method='post'>
							<Grid container spacing={2}>
								<Grid item md={6} xs={12}>
									<Grid container spacing={2}>
										<Grid item md={12} xs={12}>
											<TextField
												sx={{ width: "100%" }}
												id='outlined-basic'
												name='UserName'
												placeholder='Enter Your Name*'
												{...register("userName", { required: true })}
											/>
										</Grid>
										<Grid item md={12} xs={12}>
											<TextField
												sx={{ width: "100%" }}
												id='outlined-basic'
												name='UserEmail'
												type='email'
												placeholder='Enter Your Email*'
												{...register("userEmail", { required: true })}
											/>
										</Grid>
										<Grid item md={12} xs={12}>
											<TextField
												sx={{ width: "100%", mb: { md: 2, xs: 0 } }}
												id='outlined-basic'
												placeholder='Subject*'
												name='Subject'
												{...register("subject", { required: true })}
											/>
										</Grid>
									</Grid>
								</Grid>
								<Grid item md={6} xs={12}>
									<TextField
										sx={{ width: "100%", mb: 2 }}
										id='"outlined-multiline-flexible'
										placeholder='Your Message*'
										name='Message'
										multiline
										rows={7.3}
										{...register("message", { required: true })}
									/>
								</Grid>
							</Grid>
							<Button
								type='submit'
								variant='contained'
								className='button border'
								sx={{
									width: "100%",
									mb: 2,
									px: 3,
									fontWeight: "bold",
									border: "2px solid",
									backgroundColor: "transparent",
									borderRadius: "25px",
								}}>
								SEND
							</Button>
						</form>
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
		</Container>
	);
};

export default Contact;
