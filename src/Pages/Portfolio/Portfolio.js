import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";

const Portfolio = () => {
	const [projects, setProjects] = React.useState([]);
	React.useEffect(() => {
		fetch(`https://fast-savannah-56016.herokuapp.com/projects`)
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
					sx={{ mb: 0, fontWeight: 900 }}
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
				<Grid container spacing={2}>
					{projects?.length > 0 ? (
						<>
							{projects?.map((project) => (
								<Grid item md={12} xs={12}>
									<Card
										sx={{
											display: "flex",
											flexDirection: { md: "row", sm: "column", xs: "column" },
										}}>
										<CardMedia
											sx={{
												height: "250px",
												width: "350px",
												m: "auto",
												pl: { md: 0.5, xs: 0 },
											}}
											component='img'
											image={project?.projectPhoto}
											alt=''
										/>
										<Box sx={{ display: "flex", flexDirection: "column" }}>
											<CardContent sx={{ flex: "1 0 auto", textAlign: "left" }}>
												<Typography component='div' variant='h5'>
													{project?.projectName}
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
															backgroundColor: "#222222",
															"&:hover": {
																backgroundColor: "#222222",
															},
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
															px: 1,
															fontWeight: "bold",
															backgroundColor: "#222222",
															"&:hover": {
																backgroundColor: "#222222",
															},
														}}
														size='small'
														onClick={() =>
															window.open(`${project?.gitClientLink}`, "_blank")
														}>
														Client Code
													</Button>
													<Button
														variant='contained'
														sx={{
															px: 1,
															fontWeight: "bold",
															backgroundColor: "#222222",
															"&:hover": {
																backgroundColor: "#222222",
															},
														}}
														size='small'
														onClick={() =>
															window.open(`${project?.gitServerLink}`, "_blank")
														}>
														Server Code
													</Button>
												</CardActions>
											</Box>
										</Box>
									</Card>
								</Grid>
							))}
						</>
					) : (
						<Grid item md={12} xs={12} sx={{ mx: "auto" }}>
							{Array.from({ length: 5 }).map((_, idx) => (
								<>
									<Skeleton animation='wave' />
								</>
							))}
						</Grid>
					)}
				</Grid>
			</Grid>
		</Container>
	);
};

export default Portfolio;
