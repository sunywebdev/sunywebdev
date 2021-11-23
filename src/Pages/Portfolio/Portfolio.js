import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid, Paper, Skeleton } from "@mui/material";
import { Box } from "@mui/system";

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
				style={{ minHeight: "95vh" }}>
				<Typography
					data-aos='fade-down'
					sx={{ mb: 0, fontWeight: 900, color: "#8444DF" }}
					variant='h3'
					component='div'
					gutterBottom>
					PORTFOLIO
				</Typography>
				<Typography
					data-aos='fade-down'
					sx={{ mb: 4 }}
					variant='h5'
					component='div'
					gutterBottom>
					Check out some of my latest works.
				</Typography>
				<Grid container spacing={3}>
					{projects?.length > 0 ? (
						<>
							{projects?.map((project) => (
								<Grid key={project?._id} item md={12} xs={12}>
									<Paper elevation={3} sx={{ borderRadius: "15px" }}>
										<Card
											sx={{
												display: "flex",
												flexDirection: {
													md: "row",
													sm: "column",
													xs: "column",
													borderRadius: "15px",
												},
											}}>
											<CardMedia
												sx={{
													maxHeight: "290px",
													maxWidth: "350px",
													my: "auto",
													borderRadius: "15px",
													ml: { md: 1, xs: 0 },
													border: "3px solid #8444DF",
												}}
												component='img'
												image={project?.projectPhoto}
												alt=''
											/>
											<Box sx={{ display: "flex", flexDirection: "column" }}>
												<CardContent
													sx={{ flex: "1 0 auto", textAlign: "left" }}>
													<Typography
														component='div'
														variant='h5'
														sx={{
															color: "#8444DF",
															fontWeight: "bold",
															my: 1,
														}}>
														{project?.projectName}
													</Typography>
													<Typography
														component='div'
														variant='body'
														sx={{ my: 1 }}>
														<b style={{ color: "#8444DF" }}>
															Technologies Used:
														</b>{" "}
														{project?.techUsed}
													</Typography>
													<Typography
														variant='subtitle1'
														color='text.secondary'
														component='div'>
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
													<CardActions sx={{ justifyContent: "center" }}>
														<Button
															variant='contained'
															sx={{
																px: 1.5,
																fontWeight: "bold",
																backgroundColor: "#8444DF",
																"&:hover": {
																	backgroundColor: "#8444DF",
																},
																borderRadius: "25px",
															}}
															size='small'
															onClick={() =>
																window.open(`${project?.liveLink}`, "_blank")
															}>
															Live
														</Button>
														<Button
															variant='contained'
															sx={{
																px: 1.5,
																fontWeight: "bold",
																backgroundColor: "#8444DF",
																"&:hover": {
																	backgroundColor: "#8444DF",
																},
																borderRadius: "25px",
															}}
															size='small'
															onClick={() =>
																window.open(
																	`${project?.gitClientLink}`,
																	"_blank",
																)
															}>
															Client Git
														</Button>
														<Button
															variant='contained'
															sx={{
																px: 1.5,
																fontWeight: "bold",
																backgroundColor: "#8444DF",
																"&:hover": {
																	backgroundColor: "#8444DF",
																},
																borderRadius: "25px",
															}}
															size='small'
															onClick={() =>
																window.open(
																	`${project?.gitServerLink}`,
																	"_blank",
																)
															}>
															Server Git
														</Button>
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
								<Skeleton key={idx} animation='wave' />
							))}
						</Grid>
					)}
				</Grid>
			</Grid>
		</Container>
	);
};

export default Portfolio;
