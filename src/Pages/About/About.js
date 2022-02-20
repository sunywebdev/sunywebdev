import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const About = () => {
	return (
		<Container sx={{ mt: { md: 0, xs: 9 }, mb: 4, overflow: "auto" }}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				className='color-text'
				sx={{ minHeight: { md: "100vh", xs: "70vh" } }}>
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
							JavaScript, ES6, React JS, CURD, REST API, MUI, Bootstrap
							,Tailwind, etc. I have also worked with Express JS, Node JS,
							Mongodb, Firebase. My main strength is I have a positive attitude
							and my weakness is I don't feel ok until I finish my work
							properly.
						</Typography>
						<Box data-aos='fade-up'>
							<Typography
								className='color-theme'
								variant='h5'
								component='div'
								sx={{ mt: 4, fontWeight: "bold" }}>
								MY SKILLS:
							</Typography>
							<Typography
								className='color-theme'
								variant='h6'
								component='div'
								gutterBottom
								sx={{ mt: 2, fontWeight: "bold" }}>
								Expertise:
							</Typography>
							<Grid container spacing={2}>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>HTML5</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>CSS3</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>JavaScript</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>ES6</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>React JS</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>CURD</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>REST API</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>MUI</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>Boostrap</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>Tailwind</span>
								</Grid>
							</Grid>
							<Typography
								className='color-theme'
								variant='h6'
								component='div'
								gutterBottom
								sx={{ mt: 3, fontWeight: "bold" }}>
								Comfortable:
							</Typography>
							<Grid container spacing={2}>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>Express JS</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>Node JS</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>MongoDB</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>Firebase</span>
								</Grid>
							</Grid>

							<Typography
								className='color-theme'
								variant='h6'
								component='div'
								gutterBottom
								sx={{ mt: 3, fontWeight: "bold" }}>
								Familiar:
							</Typography>
							<Grid container spacing={2}>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>TypeScript</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>Redux</span>
								</Grid>
							</Grid>
							<Typography
								className='color-theme'
								variant='h6'
								component='div'
								gutterBottom
								sx={{ mt: 3, fontWeight: "bold" }}>
								Tools:
							</Typography>
							<Grid container spacing={2}>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>VS Code</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>GitHub</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>Brackets</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>Heroku</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>Netlify</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>Photoshop</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>Illustrator</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>Figma</span>,
								</Grid>
								<Grid item display='flex' alignItems='center'>
									<CheckCircleOutlineIcon
										className='color-theme'
										sx={{ mr: 0.5 }}
									/>
									<span>MS Office</span>
								</Grid>
							</Grid>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default About;
