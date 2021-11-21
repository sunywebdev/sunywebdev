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
				<Typography sx={{ mb: 0 }} variant='h3' component='div' gutterBottom>
					PORTFOLIO
				</Typography>
				<Typography sx={{ mb: 4 }} variant='h5' component='div' gutterBottom>
					Check out some of my latest works.
				</Typography>
				<Grid container spacing={2}>
					{projects?.length > 0 ? (
						<>
							{projects?.map((project) => (
								<Grid item md={4} xs={12}>
									<Card>
										<CardMedia
											component='img'
											alt='green iguana'
											height='140'
											image={project?.projectPhoto}
										/>
										<CardContent sx={{}}>
											<Typography gutterBottom variant='h5' component='div'>
												{project?.projectName}
											</Typography>
											<Typography variant='body2'>
												{project?.projectDetails}
											</Typography>
										</CardContent>
										<CardActions>
											<Button
												variant='contained'
												sx={{ px: 0.5 }}
												size='small'
												onClick={() =>
													window.open(`${project?.liveLink}`, "_blank")
												}>
												Live
											</Button>
											<Button
												variant='contained'
												sx={{ px: 0.5 }}
												size='small'
												onClick={() =>
													window.open(`${project?.gitClientLink}`, "_blank")
												}>
												GitHub Client
											</Button>
											<Button
												variant='contained'
												sx={{ px: 0.5 }}
												size='small'
												onClick={() =>
													window.open(`${project?.gitServerLink}`, "_blank")
												}>
												GitHub Server
											</Button>
										</CardActions>
									</Card>
								</Grid>
							))}
						</>
					) : (
						<>
							{Array.from({ length: 4 }).map((_, idx) => (
								<Card
									sx={{
										maxWidth: 345,
										mt: 5,
										mx: "auto",
										mb: 1,
										pb: 2,
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										alignContent: "center",
										overflow: "visible",
									}}>
									<Skeleton variant='rectangular' width={210} height={118} />
									<Box sx={{ mt: 2 }}>
										<Skeleton animation='wave' width={200} />
										<Skeleton animation='wave' width={200} />
									</Box>
								</Card>
							))}
						</>
					)}
				</Grid>
			</Grid>
		</Container>
	);
};

export default Portfolio;
