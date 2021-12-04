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
				mt: { md: 0, xs: 3 },
				overflow: "auto",
				animation: animations.popIn,
			}}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: "100vh" }}>
				<Grid
					container
					spacing={2}
					alignItems='center'
					justifyContent='space-between'>
					<Grid
						item
						md={4}
						xs={12}
						sx={{ img: { width: { md: "90%", xs: "70%" } } }}>
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
							gutterBottom
							className='color-theme'
							sx={{ fontWeight: 900 }}>
							Hello!
						</Typography>
						<Typography variant='h5' component='div' gutterBottom>
							I'm <b className='color-theme'>Shoyeb Mohammed Suny</b>. I'm a
							MERN Stack Web Developer from Chattogram, Bangladesh!
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
							container
							direction='row'
							sx={{ my: 3, justifyContent: { xs: "center", md: "left" } }}>
							<GitHubIcon
								fontSize='large'
								sx={{
									mx: 0.5,
									cursor: "pointer",
								}}
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
			</Grid>
		</Container>
	);
};

export default Home;
