import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";

const Portfolio = () => {
	const [projects, setProjects] = React.useState([]);
	React.useEffect(() => {
		fetch(`https://${process.env.REACT_APP_SERVER_API}/projects`)
			.then((res) => res.json())
			.then((data) => setProjects(data));
	}, []);
	return (
		<Container sx={{ mt: { md: 0, xs: 7 } }}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: "100vh" }}>
				<Typography
					className='color-theme'
					sx={{ mb: 0, mt: 0.5, fontWeight: 900 }}
					variant='h3'
					component='div'
					gutterBottom>
					PORTFOLIO
				</Typography>
				<Typography
					className='color-text'
					sx={{ mb: 4 }}
					variant='h5'
					component='div'
					gutterBottom>
					Check out some of my latest works.
				</Typography>
				<Grid container spacing={3} sx={{ mb: 2 }}>
					{projects?.length > 0 ? (
						<>
							{projects?.map((project) => (
								<Grid key={project?._id} item md={12} sm={6} xs={12}>
									<Paper
										elevation={3}
										sx={{
											borderRadius: "15px",
											backgroundColor: "transparent",
										}}>
										<Card
											className='color-text'
											sx={{
												display: "flex",
												alignItems: "center",
												flexDirection: {
													md: "row",
													sm: "column",
													xs: "column",
													borderRadius: "15px",
													backgroundColor: "transparent",
												},
											}}>
											<CardMedia
												className='border'
												sx={{
													maxHeight: "350px",
													maxWidth: "350px",
													borderRadius: "15px",
													border: "3px solid ",
												}}
												component='img'
												image={project?.projectPhoto1}
												alt=''
											/>
											<Box sx={{ display: "flex", flexDirection: "column" }}>
												<CardContent
													sx={{ flex: "1 0 auto", textAlign: "left" }}>
													<Typography
														component='div'
														variant='h5'
														className='color-theme'
														sx={{
															fontWeight: "bold",
															my: 1,
														}}>
														{project?.projectName}
													</Typography>
													<Typography
														component='div'
														variant='body'
														sx={{ my: 1 }}>
														<b className='color-theme'>Technologies Used:</b>{" "}
														{project?.techUsed}
													</Typography>
													<Typography variant='subtitle1' component='div'>
														{project?.projectDetails}
													</Typography>
												</CardContent>
												<Box
													sx={{
														display: "flex",
														alignItems: "center",
														pl: 1,
														pb: 1,
													}}>
													<CardActions sx={{ justifyContent: "space-around" }}>
														<Box>
															<Button
																variant='contained'
																className='button border'
																sx={{
																	px: 1.5,
																	fontWeight: "bold",
																	borderRadius: "25px",
																	backgroundColor: "transparent",
																	border: "2px solid",
																}}
																size='small'
																onClick={() =>
																	window.open(`${project?.liveLink}`, "_blank")
																}>
																<LanguageIcon sx={{ mr: 1 }} /> Live
															</Button>
														</Box>
														<Box>
															<Link
																to={`/portfolio/${project?._id}`}
																style={{ textDecoration: "none" }}>
																<Button
																	variant='contained'
																	className='button border'
																	sx={{
																		px: 1.5,
																		fontWeight: "bold",
																		borderRadius: "25px",
																		backgroundColor: "transparent",
																		border: "2px solid",
																	}}
																	size='small'>
																	<InfoIcon sx={{ mr: 1 }} /> Details
																</Button>
															</Link>
														</Box>
													</CardActions>
												</Box>
											</Box>
										</Card>
									</Paper>
								</Grid>
							))}
						</>
					) : (
						<Grid item md={12} xs={12} sx={{ mx: "auto" }}>
							{Array.from({ length: 5 }).map((_, idx) => (
								<CircularProgress
									key={idx}
									sx={{ mx: 0.5 }}
									className='color-theme'
								/>
							))}
						</Grid>
					)}
				</Grid>
			</Grid>
			<Button
				onClick={() => window.open("https://github.com/sunywebdev", "_blank")}
				className='button border'
				sx={{
					my: 1,
					px: 3,
					fontWeight: "bold",
					border: "2px solid",
					backgroundColor: "transparent",
					borderRadius: "25px",
				}}
				variant='contained'>
				<GitHubIcon sx={{ mr: 1.5 }} />
				Explore More GitHub Repos
			</Button>
		</Container>
	);
};

export default Portfolio;
/* <Grid
		data-aos='zoom-in'
		container
		direction='column'
		alignItems='center'
		justifyContent='center'
		style={{ minHeight: "100vh" }}>
		<Typography
			variant='h2'
			component='div'
			gutterBottom
			sx={{ fontWeight: 900 }}>
			Sorry!
		</Typography>
		<Typography
			variant='h3'
			component='div'
			gutterBottom
			sx={{ fontWeight: 900 }}>
			Page is under maintenance
		</Typography>
	</Grid> */
