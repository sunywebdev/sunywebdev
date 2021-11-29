import {
	Button,
	Container,
	Grid,
	TextField,
	Typography,
	Box,
	CircularProgress,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
	const [submitted, setSubmitted] = useState("");
	const [submitting, setSubmitting] = useState(false);
	const [formLink, setFormLink] = useState();
	useEffect(() => {
		setFormLink(process.env.REACT_APP_GFORM_ID);
		setSubmitted("SEND");
	}, []);

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		setSubmitting(true);
		axios
			.post(`https://${process.env.REACT_APP_SERVER_API}/mails`, data)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "Your Messsage Sent Successfully",
					showConfirmButton: false,
					timer: 1500,
				});
				setSubmitting(false);
				setSubmitted("Messsage Sent Successfully");
				reset();
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<Container sx={{ mt: { md: 0, xs: 7 }, overflow: "auto" }}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: "100vh" }}>
				<Grid container>
					<Grid
						data-aos='fade-right'
						item
						md={6}
						xs={12}
						sx={{ textAlign: "left" }}>
						<Typography
							sx={{ mb: 0, fontWeight: 900, color: "#8444DF" }}
							variant='h3'
							component='div'
							gutterBottom>
							CONTACT
						</Typography>
						<Typography
							sx={{ mb: 4 }}
							variant='h5'
							component='div'
							gutterBottom>
							Do you speak Alien Language? It's ok if you don't, I speak English
							too.
						</Typography>
					</Grid>
					<Grid data-aos='fade-left' item md={6} xs={12}>
						<Typography
							sx={{ mb: 1, fontWeight: 900, color: "#8444DF" }}
							variant='h6'
							component='div'>
							Click To Reach Me
						</Typography>
						<Grid direction='row' sx={{ justifyContent: "center", mb: 3 }}>
							<GitHubIcon
								fontSize='large'
								sx={{ mx: 0.5, cursor: "pointer", color: "#292E34" }}
								onClick={() =>
									window.open("https://github.com/sunywebdev", "_blank")
								}></GitHubIcon>
							<LinkedInIcon
								fontSize='large'
								sx={{ mx: 0.5, cursor: "pointer", color: "#0073B2" }}
								onClick={() =>
									window.open(
										"https://www.linkedin.com/in/sunywebdev",
										"_blank",
									)
								}></LinkedInIcon>
							<FacebookIcon
								fontSize='large'
								sx={{ mx: 0.5, cursor: "pointer", color: "#0D8BF0" }}
								onClick={() =>
									window.open("https://www.facebook.com/sunywebdev", "_blank")
								}></FacebookIcon>
							<WhatsAppIcon
								fontSize='large'
								sx={{ mx: 0.5, cursor: "pointer", color: "#0F9D58" }}
								onClick={() =>
									window.open(
										"https://api.whatsapp.com/send?phone=+8801861917938",
										"_blank",
									)
								}></WhatsAppIcon>
							<CallIcon
								fontSize='large'
								sx={{ mx: 0.5, cursor: "pointer", color: "#3CC886" }}
								onClick={() =>
									window.open("tel:01861917938", "_blank")
								}></CallIcon>
							<SmsIcon
								fontSize='large'
								sx={{ mx: 0.5, cursor: "pointer", color: "#2C97AA" }}
								onClick={() =>
									window.open("sms:01861917938", "_blank")
								}></SmsIcon>
							<EmailIcon
								fontSize='large'
								sx={{ mx: 0.5, cursor: "pointer", color: "#EB4436" }}
								onClick={() =>
									window.open("mailto:suny.webdev@gmail.com", "_blank")
								}></EmailIcon>
						</Grid>
					</Grid>
				</Grid>

				<Grid data-aos='fade-up' container spacing={2}>
					<Grid item md={12} xs={12} sx={{ mx: "auto" }}>
						{!submitting ? (
							<form
								onSubmit={handleSubmit(onSubmit)}
								action={formLink}
								method='post'
								id='gform'
								className='gform'>
								<Box sx={{ display: "none" }}>
									<input id='honeypot' type='text' name='honeypot' />
								</Box>
								<Grid container spacing={2}>
									<Grid item md={6} xs={12}>
										<Grid container spacing={2}>
											<Grid item md={12} xs={12}>
												<TextField
													sx={{ width: "100%" }}
													id='outlined-basic'
													name='UserName'
													label='Enter Your Name*'
													{...register("userName", { required: true })}
												/>
											</Grid>
											<Grid item md={12} xs={12}>
												<TextField
													sx={{ width: "100%" }}
													id='outlined-basic'
													name='UserEmail'
													type='email'
													label='Enter Your Email*'
													{...register("userEmail", { required: true })}
												/>
											</Grid>
											<Grid item md={12} xs={12}>
												<TextField
													sx={{ width: "100%", mb: { md: 2, xs: 0 } }}
													id='outlined-basic'
													label='Subject*'
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
											label='Your Message*'
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
									sx={{
										width: "100%",
										mb: 2,
										px: 3,
										fontWeight: "bold",
										backgroundColor: "#8444DF",
										"&:hover": {
											backgroundColor: "#8444DF",
										},
										borderRadius: "25px",
									}}>
									{submitted}
								</Button>
							</form>
						) : (
							<Box sx={{ my: 2 }}>
								<CircularProgress />
							</Box>
						)}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Contact;
