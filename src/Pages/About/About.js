import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import image from "../Home/Shoyeb Mohammed Suny.png";
const About = () => {
	return (
		<Box
			id='about'
			sx={{
				overflowX: "hidden",
				px: { md: 5, xs: 2 },
				minHeight: "100vh",
				display: "grid",
				placeItems: "center",
				mt: { md: 0, xs: 5}
			}}>
			<Grid container spacing={2}>
				<Grid item md={8} xs={12} sx={{ textAlign: "left" }}>
					<Box>
						<Typography
							component='div'
							className='color-theme'
							sx={{
								fontWeight: 900,
								fontSize: { md: "5.5rem", xs: "3.7rem" },
								lineHeight: 1,
							}}>
							ABOUT ME
						</Typography>
						<Typography
							variant='h5'
							component='div'
							className='color-text'
							gutterBottom>
							Who am I?
						</Typography>
					</Box>
					<Typography
						className='color-text'
						variant='subtitle1'
						component='div'
						gutterBottom
						sx={{ my: 2 }}>
						I'm
						<b className='color-theme'> Shoyeb Mohammed Suny</b>, I am a Web
						Developer, specialized in Front-End technologies like HTML5, CSS3,
						JavaScript, ES6, React JS, CURD, REST API, MUI, Bootstrap ,Tailwind,
						etc. I have also worked with Express JS, Node JS, Mongodb, Firebase.
						My main strength is I have a positive attitude and my weakness is I
						don't feel ok until I finish my work properly.
						<br />I am a quick learner, a great communicator, and a team player.
						I have a proven track record of delivering high-quality work on time
						and within budget. I am always up-to-date with the latest industry
						trends and best practices.
					</Typography>
				</Grid>
				<Grid
					item
					md={4}
					xs={12}
					sx={{
						img: { width: { md: "90%", xs: "70%" } },
					}}>
					<img
						className=' border'
						src={image}
						alt='Shoyeb Mohammed Suny'
						style={{
							border: "2px solid",
							borderRadius: "15px",
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default About;
