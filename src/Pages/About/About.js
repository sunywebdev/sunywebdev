import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const About = () => {
	return (
		<Container sx={{ mt: { md: 0, xs: 7 }, overflow: "auto" }}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				className='color-text'
				style={{ minHeight: "100vh" }}>
				<Grid container spacing={2} alignItems='center' justifyContent='center'>
					<Grid item md={12} xs={12} sx={{ textAlign: "left" }}>
						<Typography
							variant='h3'
							component='div'
							gutterBottom
							data-aos='fade-right'
							className='color-theme'
							sx={{ fontWeight: 900 }}>
							ABOUT ME
						</Typography>
						<Typography
							data-aos='fade-left'
							variant='body1'
							component='div'
							gutterBottom
							sx={{ my: 2 }}>
							I'm
							<b className='color-theme'> Shoyeb Mohammed Suny</b>, I am a Web
							Developer, specialized in Front-End technologies like HTML5, CSS3,
							JavaScript, ES6, React JS, CURD, REST API, Bootstrap, MUI, etc. I
							have also worked with Node JS, MongoDB, Firebase, Tailwind. My
							main strength is I have a positive attitude and my weakness is I
							don't feel ok until I finish my work properly.
						</Typography>
						<Box data-aos='fade-up'>
							<Typography
								variant='h6'
								component='div'
								gutterBottom
								sx={{ my: 2 }}>
								<b className='color-theme'>SKILLS:</b>
							</Typography>
							<Typography
								variant='body1'
								component='div'
								gutterBottom
								sx={{ my: 2 }}>
								<b className='color-theme'>Expertise:</b>
								<br />
								HTML5, CSS3, JavaScript, ES6, React JS, CURD, REST API,
								Bootstrap, MUI
							</Typography>
							<Typography
								variant='body1'
								component='div'
								gutterBottom
								sx={{ my: 2 }}>
								<b className='color-theme'>Comfortable:</b>
								<br />
								Node JS, Mongodb, Firebase, Tailwind
							</Typography>

							<Typography
								variant='body1'
								component='div'
								gutterBottom
								sx={{ my: 2 }}>
								<b className='color-theme'>Familiar:</b>
								<br />
								TypeScript
							</Typography>
							<Typography
								variant='body1'
								component='div'
								gutterBottom
								sx={{ my: 2 }}>
								<b className='color-theme'>Tools:</b>
								<br />
								VS Code, GitHub, Brackets, Heroku, Netlify,Photoshop,
								Illustrator, Figma, MS Office
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default About;
