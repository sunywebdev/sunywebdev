import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import SmsIcon from "@mui/icons-material/Sms";
import EmailIcon from "@mui/icons-material/Email";

const Home = () => {
	return (
		<Container>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: "95vh" }}>
				<Typography variant='h1' component='div' gutterBottom>
					Hello!
				</Typography>
				<Typography
					variant='h5'
					component='div'
					gutterBottom
					sx={{ width: { md: "70%", sm: "90%" } }}>
					My name is <b>Shoyeb Mohammed Suny</b>. I'm a MERN Stack Web Developer
					from Chattogram, Bangladesh!
				</Typography>
				<Grid
					container
					direction='row'
					sx={{ justifyContent: "center", my: 3 }}>
					<GitHubIcon
						fontSize='large'
						sx={{ mx: 0.5, cursor: "pointer" }}
						onClick={() =>
							window.open("https://github.com/sunywebdev", "_blank")
						}></GitHubIcon>
					<LinkedInIcon
						fontSize='large'
						sx={{ mx: 0.5, cursor: "pointer" }}
						onClick={() =>
							window.open("https://www.linkedin.com/in/sunywebdev", "_blank")
						}></LinkedInIcon>
					<FacebookIcon
						fontSize='large'
						sx={{ mx: 0.5, cursor: "pointer" }}
						onClick={() =>
							window.open("https://www.facebook.com/sunywebdev", "_blank")
						}></FacebookIcon>
					<WhatsAppIcon
						fontSize='large'
						sx={{ mx: 0.5, cursor: "pointer" }}
						onClick={() =>
							window.open(
								"https://api.whatsapp.com/send?phone=+8801861917938",
								"_blank",
							)
						}></WhatsAppIcon>
					<CallIcon
						fontSize='large'
						sx={{ mx: 0.5, cursor: "pointer" }}
						onClick={() => window.open("tel:01861917938", "_blank")}></CallIcon>
					<SmsIcon
						fontSize='large'
						sx={{ mx: 0.5, cursor: "pointer" }}
						onClick={() => window.open("sms:01861917938", "_blank")}></SmsIcon>
					<EmailIcon
						fontSize='large'
						sx={{ mx: 0.5, cursor: "pointer" }}
						onClick={() =>
							window.open("mailto:suny.webdev@gmail.com", "_blank")
						}></EmailIcon>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Home;
