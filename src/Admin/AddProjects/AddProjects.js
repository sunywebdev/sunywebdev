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
	const [inputImage1, setInputImage1] = useState(null);
	const [inputImage2, setInputImage2] = useState(null);
	const [inputImage3, setInputImage3] = useState(null);
	const [inputImage4, setInputImage4] = useState(null);
	const [imageLink1, setImageLink1] = useState(null);
	const [imageLink2, setImageLink2] = useState(null);
	const [imageLink3, setImageLink3] = useState(null);
	const [imageLink4, setImageLink4] = useState(null);
	const [uploading, setUploading] = useState(false);
	const uploadImage1 = (e) => {
		e.preventDefault();
		if (!inputImage1) {
			return;
		}
		setUploading(true);
		let payload1 = new FormData();
		payload1.append("image", inputImage1);

		axios
			.post(
				`https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_IMGBB_API}`,
				payload1,
			)
			.then((response) => {
				setUploading(false);
				setImageLink1(response?.data?.data?.url);
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
	const uploadImage2 = (e) => {
		e.preventDefault();
		if (!inputImage2) {
			return;
		}
		setUploading(true);
		let payload2 = new FormData();
		payload2.append("image", inputImage2);

		axios
			.post(
				`https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_IMGBB_API}`,
				payload2,
			)
			.then((response) => {
				setUploading(false);
				setImageLink2(response?.data?.data?.url);
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
	const uploadImage3 = (e) => {
		e.preventDefault();
		if (!inputImage3) {
			return;
		}
		setUploading(true);
		let payload3 = new FormData();
		payload3.append("image", inputImage3);

		axios
			.post(
				`https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_IMGBB_API}`,
				payload3,
			)
			.then((response) => {
				setUploading(false);
				setImageLink3(response?.data?.data?.url);
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
	const uploadImage4 = (e) => {
		e.preventDefault();
		if (!inputImage4) {
			return;
		}
		setUploading(true);
		let payload4 = new FormData();
		payload4.append("image", inputImage4);

		axios
			.post(
				`https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_IMGBB_API}`,
				payload4,
			)
			.then((response) => {
				setUploading(false);
				setImageLink4(response?.data?.data?.url);
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
		feature1,
		feature2,
		feature3,
		feature4,
		feature5,
		techUsed,
		liveLink,
		gitClientLink,
		gitServerLink,
	}) => {
		const data = {
			projectName,
			projectDetails,
			feature1,
			feature2,
			feature3,
			feature4,
			feature5,
			techUsed,
			liveLink,
			gitClientLink,
			gitServerLink,
			projectPhoto1: imageLink1,
			projectPhoto2: imageLink2,
			projectPhoto3: imageLink3,
			projectPhoto4: imageLink4,
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
				style={{ minHeight: "100vh" }}>
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
										onChange={(e) => setInputImage1(e.target.files[0])}
									/>

									{!uploading ? (
										<>
											{inputImage1 && (
												<>
													<img
														src={URL.createObjectURL(inputImage1)}
														alt=''
														width='250px'
													/>
													<Button
														onClick={uploadImage1}
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
								<Box display='flex' flexDirection='column' sx={{ mb: 3 }}>
									<Input
										accept='image/*'
										type='file'
										onChange={(e) => setInputImage2(e.target.files[0])}
									/>

									{!uploading ? (
										<>
											{inputImage2 && (
												<>
													<img
														src={URL.createObjectURL(inputImage2)}
														alt=''
														width='250px'
													/>
													<Button
														onClick={uploadImage2}
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
								<Box display='flex' flexDirection='column' sx={{ mb: 3 }}>
									<Input
										accept='image/*'
										type='file'
										onChange={(e) => setInputImage3(e.target.files[0])}
									/>

									{!uploading ? (
										<>
											{inputImage3 && (
												<>
													<img
														src={URL.createObjectURL(inputImage3)}
														alt=''
														width='250px'
													/>
													<Button
														onClick={uploadImage3}
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
								<Box display='flex' flexDirection='column' sx={{ mb: 3 }}>
									<Input
										accept='image/*'
										type='file'
										onChange={(e) => setInputImage4(e.target.files[0])}
									/>

									{!uploading ? (
										<>
											{inputImage4 && (
												<>
													<img
														src={URL.createObjectURL(inputImage4)}
														alt=''
														width='250px'
													/>
													<Button
														onClick={uploadImage4}
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
									label='Feature 1'
									{...register("feature1", { required: true })}
								/>
								<TextField
									sx={{ width: "100%", mb: 2 }}
									id='"outlined-multiline-flexible'
									label='Feature 2'
									{...register("feature2", { required: true })}
								/>
								<TextField
									sx={{ width: "100%", mb: 2 }}
									id='"outlined-multiline-flexible'
									label='Feature 3'
									{...register("feature3", { required: true })}
								/>
								<TextField
									sx={{ width: "100%", mb: 2 }}
									id='"outlined-multiline-flexible'
									label='Feature 4'
									{...register("feature4", { required: true })}
								/>
								<TextField
									sx={{ width: "100%", mb: 2 }}
									id='"outlined-multiline-flexible'
									label='Feature 5'
									{...register("feature5", { required: true })}
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
