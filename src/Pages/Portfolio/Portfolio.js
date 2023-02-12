import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import SingleProject from "./SingleProject";

const Portfolio = () => {
	const [projects, setProjects] = React.useState([]);
	React.useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_API}/projects`)
			.then((res) => res.json())
			.then((data) => setProjects(data?.sort((a, b) => a.sort - b.sort)));
	}, []);
	const [open, setOpen] = React.useState(false);
	const [id, setId] = React.useState("");
	const handleOpen = (id) => {
		setOpen(true);
		setId(id);
	};

	return (
		<Box
			id='portfolio'
			sx={{
				overflowX: "hidden",
				px: { md: 5, xs: 2 },
				minHeight: "100vh",
				display: "grid",
				placeItems: "center",
				mt: { md: 0, xs: 5 },
			}}>
			<Grid container spacing={3} sx={{ my: 2 }}>
				<Grid item xs={12}>
					<Box sx={{ textAlign: "left" }}>
						<Typography
							component='div'
							className='color-theme'
							sx={{
								fontWeight: 900,
								fontSize: { md: "5.5rem", xs: "3.7rem" },
								lineHeight: 1,
							}}>
							PORTFOLIO
						</Typography>
						<Typography
							variant='h5'
							component='div'
							className='color-text'
							gutterBottom>
							Check out some of my works.
						</Typography>
					</Box>
				</Grid>
				{projects?.length > 0 ? (
					<>
						{projects?.map((project) => (
							<Grid
								key={project?._id}
								item
								md={4}
								sm={6}
								xs={12}
								style={{ display: "grid" }}>
								<Card
									className='color-text border'
									sx={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										flexDirection: "column",
										borderRadius: "7px",
										backgroundColor: "transparent",
										border: "2px solid",
									}}>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											width: "100%",
										}}>
										<CardMedia
											className='border'
											sx={{
												width: "100% !important",
												borderRadius: "7px 7px 0 0",
												borderBottom: "2px solid ",
											}}
											component='img'
											image={project?.projectPhoto1}
											alt=''
										/>
										<CardContent sx={{ py: "8px !important" }}>
											<Typography
												component='div'
												variant='h5'
												className='color-theme'
												sx={{
													fontWeight: "bold",
												}}>
												{project?.projectName}
											</Typography>
											<Typography component='div' variant='body1'>
												{project?.projectType}
											</Typography>
											{/* 	<Typography component='div' variant='body' sx={{ my: 1 }}>
												<b className='color-theme'>Technologies Used:</b>{" "}
												{project?.techUsed}
											</Typography>
											<Typography
												variant='subtitle1'
												component='div'
												sx={{ textAlign: "justify" }}>
												<b className='color-theme'>Project Details:</b>{" "}
												{project?.projectDetails.slice(0, 110)} .......
											</Typography> */}
										</CardContent>
									</Box>
									<CardActions sx={{ alignItems: "flex-start" }}>
										<Box
											variant='contained'
											className='button border'
											sx={{
												backgroundColor: "transparent",
												borderRadius: "5px",
												lineHeight: 0,
												py: 0.5,
												px: 1,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												cursor: "pointer",
												border: "2px solid",
											}}
											onClick={() =>
												window.open(`${project?.liveLink}`, "_blank")
											}>
											<LanguageIcon sx={{ mr: 0.7 }} /> Live
										</Box>
										<Box
											onClick={() => handleOpen(project?._id)}
											variant='contained'
											className='button border'
											sx={{
												backgroundColor: "transparent",
												borderRadius: "5px",
												lineHeight: 0,
												py: 0.5,
												px: 1,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												border: "2px solid",
											}}
											size='small'>
											<InfoIcon sx={{ mr: 0.7 }} /> Details
										</Box>
									</CardActions>
								</Card>
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
			<Button
				onClick={() => window.open("https://github.com/sunywebdev", "_blank")}
				className='button border'
				sx={{
					my: 1,
					px: 3,
					fontWeight: "bold",
					border: "2px solid",
					backgroundColor: "transparent",
					borderRadius: "7px",
				}}
				variant='contained'>
				<GitHubIcon sx={{ mr: 1.5 }} />
				Explore More GitHub Repos
			</Button>
			{open && <SingleProject open={open} setOpen={setOpen} id={id} />}
		</Box>
	);
};

export default Portfolio;
