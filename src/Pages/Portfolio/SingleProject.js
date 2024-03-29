import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Backdrop, Fade, Grid, Modal } from "@mui/material";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/system";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	boxShadow: 24,
	p: 2,
	width: "100%",
	maxWidth: "95vw",
	maxHeight: "95vh",
	overflowX: "hidden",
	overflowY: "scroll",
	borderRadius: 3,
	backgroundColor: "white",
	textAlign: "center",
};
const SingleProject = ({ open, setOpen, id }) => {
	const [project, setProject] = React.useState([]);
	React.useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_API}/projects/${id}`)
			.then((res) => res.json())
			.then((data) => setProject(data));
	}, [id]);
	return (
		<Modal
			aria-labelledby='transition-modal-title'
			aria-describedby='transition-modal-description'
			open={open}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}>
			<Fade in={open}>
				<Box
					sx={style}
					style={{ backgroundImage: `url(/bg-img.jpg)` }}>
					<CancelIcon
						onClick={() => setOpen(false)}
						className='color-theme'
						fontSize='large'
						sx={{
							position: "fixed",
							top: "5px",
							right: "5px",
							cursor: "pointer",
						}}
					/>
					{project?.length !== 0 ? (
						<Grid
							className='color-text'
							container
							direction='column'
							alignItems='center'
							justifyContent='center'
							sx={{ minHeight: { md: "100vh", xs: "70vh" } }}>
							<Typography
								className='color-theme'
								sx={{ fontWeight: 900 }}
								variant='h4'
								component='div'>
								{project?.projectName}
							</Typography>
							<Typography component='div' variant='body1' sx={{ mb: 2 }}>
								{project?.projectType}
							</Typography>
							<Grid container spacing={2}>
								<Grid item md={6} xs={12}>
									<CardMedia
										className='border'
										sx={{
											border: "2px solid",
										}}
										component='img'
										image={project?.projectPhoto1}
										alt=''
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									<CardMedia
										className='border'
										sx={{
											border: "2px solid ",
										}}
										component='img'
										image={project?.projectPhoto2}
										alt=''
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									<CardMedia
										className='border'
										sx={{
											border: "2px solid ",
										}}
										component='img'
										image={project?.projectPhoto3}
										alt=''
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									<CardMedia
										className='border'
										sx={{
											border: "2px solid ",
										}}
										component='img'
										image={project?.projectPhoto4}
										alt=''
									/>
								</Grid>
							</Grid>

							<Grid item md={12} xs={12}>
								<CardContent sx={{ flex: "1 0 auto", textAlign: "left" }}>
									<Typography
										component='div'
										variant='body'
										sx={{ my: 1 }}
										className='color-text'>
										<b className='color-theme'>Technologies Used:</b>{" "}
										{project?.techUsed}
									</Typography>
									<Typography
										sx={{ mt: 4 }}
										className='color-text'
										variant='subtitle1'
										component='div'>
										<b className='color-theme'>Project Details:</b>{" "}
										{project?.projectDetails}
									</Typography>
									<Typography
										variant='subtitle1'
										color='text.secondary'
										component='div'
										sx={{ my: 3 }}>
										<b className='color-theme'>Featuers:</b>
										<ul style={{ marginTop: 0 }} className='color-text'>
											<li>{project?.feature1}</li>
											<li>{project?.feature2}</li>
											<li>{project?.feature3}</li>
											<li>{project?.feature4}</li>
											<li>{project?.feature5}</li>
										</ul>
									</Typography>
								</CardContent>
							</Grid>
							<Grid item md={12} xs={12} sx={{ mx: "auto" }}>
								<CardActions
									sx={{
										justifyContent: "center",
										mb: 2,
										flexDirection: { md: "row", xs: "column" },
									}}>
									<Button
										variant='contained'
										sx={{
											px: 1.5,
											mx: 1,
											fontWeight: "bold",
											border: "2px solid",
											backgroundColor: "transparent",
											borderRadius: "25px",
										}}
										className='border button'
										size='small'
										onClick={() =>
											window.open(`${project?.liveLink}`, "_blank")
										}>
										<LanguageIcon sx={{ mr: 1 }} /> Live
									</Button>
									<Box sx={{ my: 2 }}>
										<Button
											variant='contained'
											sx={{
												px: 1.5,
												mx: 1,
												fontWeight: "bold",
												border: "2px solid",
												backgroundColor: "transparent",
												borderRadius: "25px",
											}}
											className='border button'
											size='small'
											onClick={() =>
												window.open(`${project?.gitClientLink}`, "_blank")
											}>
											<GitHubIcon sx={{ mr: 1 }} /> Client Git
										</Button>
										{project?.gitServerLink && (
											<Button
												variant='contained'
												sx={{
													px: 1.5,
													mx: 1,
													fontWeight: "bold",
													border: "2px solid",
													backgroundColor: "transparent",
													borderRadius: "25px",
												}}
												className='border button'
												size='small'
												onClick={() =>
													window.open(`${project?.gitServerLink}`, "_blank")
												}>
												<GitHubIcon sx={{ mr: 1 }} /> Server Git
											</Button>
										)}
									</Box>
								</CardActions>
							</Grid>
							<Link to={`/portfolio`} style={{ textDecoration: "none" }}>
								<Button
									variant='contained'
									sx={{
										my: 2,
										px: 3,
										fontWeight: "bold",
										border: "2px solid",
										backgroundColor: "transparent",
										borderRadius: "25px",
									}}
									className='border button'
									size='small'>
									<ArrowBackIcon sx={{ mr: 1 }} /> Back To List
								</Button>
							</Link>
						</Grid>
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
					)}{" "}
				</Box>
			</Fade>
		</Modal>
	);
};

export default SingleProject;
