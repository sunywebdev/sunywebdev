import React from "react";
import { useParams } from "react-router";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const SingleProject = () => {
	const { id } = useParams();
	const [project, setProject] = React.useState([]);
	React.useEffect(() => {
		fetch(`https://${process.env.REACT_APP_SERVER_API}/projects/${id}`)
			.then((res) => res.json())
			.then((data) => setProject(data));
	}, [id]);
	return (
		<Container sx={{ mt: { md: 0, xs: 7 }, minHeight: "100vh" }}>
			{project?.length !== 0 ? (
				<Grid
					className='color-text'
					container
					direction='column'
					alignItems='center'
					justifyContent='center'
					style={{}}>
					<Typography
						className='color-theme'
						sx={{ mb: 3, mt: 1, fontWeight: 900 }}
						variant='h4'
						component='div'
						gutterBottom>
						{project?.projectName}
					</Typography>
					<Paper elevation={3} sx={{ backgroundColor: "transparent" }}>
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
									className='color-text'
									variant='subtitle1'
									component='div'>
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
							<CardActions sx={{ justifyContent: "center" }}>
								<Button
									variant='contained'
									sx={{
										px: 1.5,
										fontWeight: "bold",
										border: "2px solid",
										backgroundColor: "transparent",
										borderRadius: "25px",
									}}
									className='border button'
									size='small'
									onClick={() => window.open(`${project?.liveLink}`, "_blank")}>
									Live
								</Button>
								<Button
									variant='contained'
									sx={{
										px: 1.5,
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
									Client Git
								</Button>
								{project?.gitServerLink && (
									<Button
										variant='contained'
										sx={{
											px: 1.5,
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
										Server Git
									</Button>
								)}
							</CardActions>
						</Grid>
					</Paper>{" "}
					<Link to={`/portfolio`} style={{ textDecoration: "none" }}>
						<Button
							variant='contained'
							sx={{
								my: 1,
								px: 3,
								fontWeight: "bold",
								border: "2px solid",
								backgroundColor: "transparent",
								borderRadius: "25px",
							}}
							className='border button'
							size='small'>
							Back To List
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
			)}
		</Container>
	);
};

export default SingleProject;
