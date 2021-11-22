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

const Home = () => {
	return (
		<Container>
			<Grid
				sx={{ color: "#333333" }}
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: "95vh" }}>
				<Typography
					data-aos='fade-right'
					variant='h1'
					component='div'
					gutterBottom
					sx={{ fontWeight: 900 }}>
					Hello!
				</Typography>
				<Typography
					data-aos='fade-left'
					variant='h5'
					component='div'
					gutterBottom
					sx={{ width: { md: "70%", sm: "90%" } }}>
					My name is <b>Shoyeb Mohammed Suny</b>. I'm a MERN Stack Web Developer
					from Chattogram, Bangladesh!
				</Typography>
				<Button
					data-aos='fade-right'
					onClick={() =>
						window.open(
							"https://drive.google.com/file/d/14k6XgLTRv71xTP5SL0xZKcLXdAt7iLxf/view?usp=sharing",
							"_blank",
						)
					}
					sx={{
						my: 1,
						fontWeight: "bold",
						backgroundColor: "#222222",
						"&:hover": {
							backgroundColor: "#222222",
						},
					}}
					variant='contained'>
					<AssignmentIndIcon sx={{ mr: 1.5 }} />
					Download My Resume
				</Button>
				<Grid
					data-aos='fade-up'
					container
					direction='row'
					sx={{ justifyContent: "center", my: 3 }}>
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
							window.open("https://www.linkedin.com/in/sunywebdev", "_blank")
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
						onClick={() => window.open("tel:01861917938", "_blank")}></CallIcon>
					<SmsIcon
						fontSize='large'
						sx={{ mx: 0.5, cursor: "pointer", color: "#2C97AA" }}
						onClick={() => window.open("sms:01861917938", "_blank")}></SmsIcon>
					<EmailIcon
						fontSize='large'
						sx={{ mx: 0.5, cursor: "pointer", color: "#EB4436" }}
						onClick={() =>
							window.open("mailto:suny.webdev@gmail.com", "_blank")
						}></EmailIcon>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Home;
