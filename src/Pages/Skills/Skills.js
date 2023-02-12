import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Skills = () => {
	return (
		<Box
			id='skills'
			sx={{
				overflowX: "hidden",
				px: { xl: 9, md: 5, xs: 2 },
				minHeight: { xl: "auto", md: "100vh", xs: "auto" },
				display: "grid",
				placeItems: "center",
				mt: { xl: 7, md: 0, xs: 5 },
			}}>
			<Grid container spacing={2} alignItems='center' justifyContent='center'>
				<Grid item md={12} xs={12} sx={{ textAlign: "left" }}>
					<Box>
						<Box>
							<Typography
								component='div'
								className='color-theme'
								sx={{
									fontWeight: 900,
									fontSize: { md: "5.5rem", xs: "3.7rem" },
									lineHeight: 1,
								}}>
								MY SKILLS
							</Typography>
							<Typography
								variant='h5'
								component='div'
								className='color-text'
								gutterBottom>
								Some of my skills and expertise.
							</Typography>
						</Box>

						<Typography
							className='color-theme'
							variant='h6'
							component='div'
							gutterBottom
							sx={{ mt: 2, fontWeight: "bold" }}>
							Expertise:
						</Typography>
						<Grid container spacing={2} className='color-text'>
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
						<Grid container spacing={2} className='color-text'>
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
							<Grid item display='flex' alignItems='center'>
								<CheckCircleOutlineIcon
									className='color-theme'
									sx={{ mr: 0.5 }}
								/>
								<span>Socket IO</span>
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
						<Grid container spacing={2} className='color-text'>
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
		</Box>
	);
};

export default Skills;
