import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image from "./Shoyeb Mohammed Suny.png";

const About = () => {
	return (
		<Container sx={{ mt: { md: 0, xs: 7 } }}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: "95vh" }}>
				<Grid container spacing={2} alignItems='center' justifyContent='center'>
					<Grid item md={8} xs={12} sx={{ textAlign: "left" }}>
						<Typography
							variant='h3'
							component='div'
							gutterBottom
							data-aos='fade-right'
							sx={{ fontWeight: 900, color: "#8444DF" }}>
							ABOUT ME
						</Typography>
						<Typography
							data-aos='fade-left'
							variant='body1'
							component='div'
							gutterBottom
							sx={{ my: 2 }}>
							I'm
							<b style={{ color: "#8444DF" }}> Shoyeb Mohammed Suny</b>,I am a
							Web Developer, specialized in Front-End technologies like HTML5,
							CSS3, JavaScript, ES6, React JS, CURD, REST API, Bootstrap, MUI,
							etc. I have also worked with Node JS, MongoDB, Firebase, Tailwind.
							My main strength is I have a positive attitude and my weakness is
							I don't feel ok until I finish my work properly.
						</Typography>
						<Box data-aos='fade-up'>
							<Typography
								variant='h6'
								component='div'
								gutterBottom
								sx={{ my: 2 }}>
								<b style={{ color: "#8444DF" }}>SKILLS:</b>
							</Typography>
							<Typography
								variant='body1'
								component='div'
								gutterBottom
								sx={{ my: 2 }}>
								<b style={{ color: "#8444DF" }}>Expertise:</b>
								<br />
								HTML5, CSS3, JavaScript, ES6, React JS, CURD, REST API,
								Bootstrap, MUI
							</Typography>
							<Typography
								variant='body1'
								component='div'
								gutterBottom
								sx={{ my: 2 }}>
								<b style={{ color: "#8444DF" }}>Comfortable:</b>
								<br />
								Node JS, Mongodb, Firebase, Tailwind
							</Typography>

							<Typography
								variant='body1'
								component='div'
								gutterBottom
								sx={{ my: 2 }}>
								<b style={{ color: "#8444DF" }}>Familiar:</b>
								<br />
								TypeScript
							</Typography>
							<Typography
								variant='body1'
								component='div'
								gutterBottom
								sx={{ my: 2 }}>
								<b style={{ color: "#8444DF" }}>Tools:</b>
								<br />
								VS Code, GitHub, Brackets, Heroku, Netlify,Photoshop,
								Illustrator, Figma, MS Office
							</Typography>
						</Box>
					</Grid>
					<Grid item md={4} xs={12}>
						<img
							src={image}
							alt=''
							style={{ width: "100%", border: " 7px solid #8444DF" }}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default About;
