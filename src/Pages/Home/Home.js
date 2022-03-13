import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import SmsIcon from "@mui/icons-material/Sms";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import image from "./Shoyeb Mohammed Suny.png";
import { animations } from "react-animation";

const Home = () => {
	return (
		<Container
			className='color-text'
			sx={{
				minHeight: "100vh",
				mt: { md: 0, xs: 9 },
				my: "auto",
				overflow: "visible",
				animation: animations.popIn,
			}}>
			<Grid
				container
				spacing={2}
				alignItems='center'
				alignContent='center'
				justifyContent='space-evenly'
				sx={{ minHeight: { md: "100vh", xs: "70vh" } }}>
				<Grid
					item
					md={4}
					xs={12}
					sx={{
						img: { width: { md: "90%", xs: "70%" } },
					}}>
					<img
						className='myphoto border'
						src={image}
						alt='Shoyeb Mohammed Suny'
						style={{
							border: "2px solid",
							borderRadius: "50%",
						}}
					/>
				</Grid>
				<Grid
					item
					md={7}
					xs={12}
					sx={{ textAlign: { md: "left", xs: "center" } }}>
					<Typography
						variant='h1'
						component='div'
						className='color-theme'
						sx={{ fontWeight: 900 }}>
						Hello!
					</Typography>
					<Typography variant='h5' component='div' gutterBottom>
						I'm <b className='color-theme'>Shoyeb Mohammed Suny</b>. I'm a MERN
						Stack Web Developer from Chattogram, Bangladesh!
					</Typography>
					<Button
						onClick={() =>
							window.open(
								"https://drive.google.com/file/d/14k6XgLTRv71xTP5SL0xZKcLXdAt7iLxf/view?usp=sharing",
								"_blank",
							)
						}
						sx={{
							my: 1,
							px: 3,
							fontWeight: "bold",
							border: "2px solid",
							backgroundColor: "transparent",
							borderRadius: "25px",
						}}
						className='border button'
						variant='contained'>
						<AssignmentIndIcon sx={{ mr: 1.5 }} />
						My Resume
					</Button>
					<Grid
						sx={{
							my: { md: 3, xs: 1.5 },
							display: "flex",
							justifyContent: { xs: "space-evenly", md: "left" },
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
									"https://api.whatsapp.com/send?phone=+8801861917938",
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
								window.open("mailto:suny.webdev@gmail.com", "_blank")
							}></EmailIcon>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Home;
