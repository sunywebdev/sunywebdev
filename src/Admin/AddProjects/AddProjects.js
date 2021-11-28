import {
	Button,
	CircularProgress,
	Container,
	Grid,
	Input,
	TextField,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProjects = () => {
	const [submitting, setSubmitting] = useState(false);
	const [inputImage, setInputImage] = useState(null);
	const [imageLink, setImageLink] = useState(null);
	const [uploading, setUploading] = useState(false);
	const uploadImage = (e) => {
		e.preventDefault();
		if (!inputImage) {
			return;
		}
		setUploading(true);
		let payload = new FormData();
		payload.append("image", inputImage);

		axios
			.post(
				`https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_IMGBB_API}`,
				payload,
			)
			.then((response) => {
				setUploading(false);
				setImageLink(response?.data?.data?.url);
				Swal.fire({
					icon: "success",
					title: "Photo Uploaded",
					showConfirmButton: false,
					timer: 1500,
				});
			})
			.catch((error) => {
				setUploading(false);
				console.log("error", error);
				Swal.fire({
					icon: "error",
					title: "Uploading Failed, Try Again",
					showConfirmButton: false,
					timer: 1500,
				});
			});
	};

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = ({
		projectName,
		projectDetails,
		techUsed,
		liveLink,
		gitClientLink,
		gitServerLink,
	}) => {
		const data = {
			projectName,
			projectDetails,
			techUsed,
			liveLink,
			gitClientLink,
			gitServerLink,
			projectPhoto: imageLink,
		};
		setSubmitting(true);
		axios
			.post(`https://${process.env.REACT_APP_SERVER_API}/projects`, data)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "Your Project Successfully Added",
					showConfirmButton: false,
					timer: 1500,
				});
				setSubmitting(false);
				reset();
			})
			.catch(function (error) {
				console.log("error", error);
				console.log(error);
			});
	};

	return (
		<Container sx={{ mt: { xs: 9, md: 2 } }}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: "95vh" }}>
				<Typography
					sx={{ mb: 3, fw: "bold", color: "#8444DF" }}
					variant='h4'
					component='div'
					gutterBottom>
					Add New Project
				</Typography>
				<Grid container spacing={2}>
					<Grid item md={7} xs={12} sx={{ mx: "auto" }}>
						{!submitting ? (
							<form onSubmit={handleSubmit(onSubmit)}>
								<TextField
									sx={{ width: "100%", mb: 2 }}
									id='outlined-basic'
									label='Enter Project Name'
									{...register("projectName", { required: true })}
								/>
								<Box display='flex' flexDirection='column' sx={{ mb: 3 }}>
									<Input
										accept='image/*'
										type='file'
										onChange={(e) => setInputImage(e.target.files[0])}
									/>

									{!uploading ? (
										<>
											{inputImage && (
												<>
													<img
														src={URL.createObjectURL(inputImage)}
														alt=''
														width='250px'
													/>
													<Button
														onClick={uploadImage}
														variant='contained'
														component='span'
														sx={{ my: 1, py: 0.5, width: "250px" }}>
														Upload Image
													</Button>
												</>
											)}
										</>
									) : (
										<Box sx={{ my: 2 }}>
											<CircularProgress />
										</Box>
									)}
								</Box>
								<TextField
									sx={{ width: "100%", mb: 2 }}
									id='"outlined-multiline-flexible'
									label='Project Details'
									multiline
									rows={4}
									{...register("projectDetails", { required: true })}
								/>
								<TextField
									sx={{ width: "100%", mb: 2 }}
									id='"outlined-multiline-flexible'
									label='Technologies Used'
									multiline
									rows={2}
									{...register("techUsed", { required: true })}
								/>
								<TextField
									sx={{ width: "100%", mb: 2 }}
									id='outlined-basic'
									label='Project Live Link'
									{...register("liveLink", { required: true })}
								/>
								<TextField
									sx={{ width: "100%", mb: 2 }}
									id='outlined-basic'
									label='Project GitHub Client Link'
									{...register("gitClientLink", { required: true })}
								/>
								<TextField
									sx={{ width: "100%", mb: 2 }}
									id='outlined-basic'
									label='Project GitHub Server Link'
									{...register("gitServerLink" /* , { required: true } */)}
								/>

								<Button
									type='submit'
									variant='contained'
									sx={{
										width: "100%",
										mb: 2,
										px: 3,
										fontWeight: "bold",
										backgroundColor: "#8444DF",
										"&:hover": {
											backgroundColor: "#8444DF",
										},
										borderRadius: "25px",
									}}>
									Add Project
								</Button>
							</form>
						) : (
							<Box sx={{ my: 2 }}>
								<CircularProgress />
							</Box>
						)}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AddProjects;
