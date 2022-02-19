import {
	Button,
	CircularProgress,
	Container,
	Grid,
	TextField,
	Typography,
	IconButton,
	Backdrop,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import styled from "@emotion/styled";

const AddProjects = () => {
	const [submitting, setSubmitting] = useState(false);

	/// image - 1 ////
	const [loading1, setLoading1] = useState(false);
	const [imageLink1, setImageLink1] = useState(null);
	const uploadImage1 = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "sunywebdevProjects");
		setLoading1(true);
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/dqdug0ows/image/upload",
			{
				method: "POST",
				body: data,
			},
		);
		const file = await res.json();
		setImageLink1(file.secure_url);
		setLoading1(false);
	};

	/// image - 2 ////
	const [loading2, setLoading2] = useState(false);
	const [imageLink2, setImageLink2] = useState(null);
	const uploadImage2 = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "sunywebdevProjects");
		setLoading2(true);
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/dqdug0ows/image/upload",
			{
				method: "POST",
				body: data,
			},
		);
		const file = await res.json();
		setImageLink2(file.secure_url);
		setLoading2(false);
	};

	/// image - 3 ////
	const [loading3, setLoading3] = useState(false);
	const [imageLink3, setImageLink3] = useState(null);
	const uploadImage3 = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "sunywebdevProjects");
		setLoading3(true);
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/dqdug0ows/image/upload",
			{
				method: "POST",
				body: data,
			},
		);
		const file = await res.json();
		setImageLink3(file.secure_url);
		setLoading3(false);
	};

	/// image - 4 ////
	const [loading4, setLoading4] = useState(false);
	const [imageLink4, setImageLink4] = useState(null);
	const uploadImage4 = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "sunywebdevProjects");
		setLoading4(true);
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/dqdug0ows/image/upload",
			{
				method: "POST",
				body: data,
			},
		);
		const file = await res.json();
		setImageLink4(file.secure_url);
		setLoading4(false);
	};

	const Input = styled("input")({
		display: "none",
	});

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = ({
		projectName,
		projectDetails,
		feature1,
		feature2,
		feature3,
		feature4,
		feature5,
		feature6,
		feature7,
		feature8,
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
			feature6,
			feature7,
			feature8,
			techUsed,
			liveLink,
			gitClientLink,
			gitServerLink,
			projectPhoto1: imageLink1,
			projectPhoto2: imageLink2,
			projectPhoto3: imageLink3,
			projectPhoto4: imageLink4,
			submitTime: new Date().toLocaleString("en-GB"),
		};
		setSubmitting(true);
		axios
			.post(`https://${process.env.REACT_APP_SERVER_API}/projects`, data)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "Your Project Successfully Added",
					showConfirmButton: true,
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
					className='color-theme'
					sx={{ mb: 2, fontWeight: "bold" }}
					variant='h3'
					component='div'>
					Add New Project
				</Typography>

				{!submitting ? (
					<form onSubmit={handleSubmit(onSubmit)}>
						<Grid container spacing={2}>
							<Grid item md={7} xs={12} sx={{ mx: "auto" }}>
								<Grid container spacing={2}>
									<Grid item md={12} xs={12}>
										<TextField
											className='color-theme'
											sx={{ width: "100%" }}
											id='outlined-basic'
											label='Enter Project Name'
											{...register("projectName", { required: true })}
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<Box
											display='flex'
											flexDirection='column'
											alignItems='center'
											sx={{ mb: 1, mx: "auto" }}>
											<label
												className='upload-button'
												htmlFor='icon-button-file1'
												style={{
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													margin: "0 9px",
													borderRadius: 5,
													cursor: "pointer",
												}}>
												<Input
													accept='image/*'
													id='icon-button-file1'
													type='file'
													onChange={uploadImage1}
												/>
												<Typography
													sx={{ my: 2, ml: 2, color: "white" }}
													variant='h6'
													component='div'
													gutterBottom>
													Project Photo 1
												</Typography>
												<IconButton
													color='primary'
													aria-label='upload picture'
													component='span'>
													<FileUploadIcon
														fontSize='large'
														sx={{ fontWeight: "bold", color: "white" }}
													/>
												</IconButton>
											</label>

											{loading1 ? (
												<Box sx={{ my: 2 }}>
													<CircularProgress className='color-theme' />
												</Box>
											) : (
												<img
													src={imageLink1}
													style={{
														width: "200px",
														borderRadius: "50%",
														margin: "5px 0",
													}}
													alt=''
												/>
											)}
										</Box>
									</Grid>
									<Grid item md={6} xs={12}>
										<Box
											display='flex'
											flexDirection='column'
											alignItems='center'
											sx={{ mb: 1, mx: "auto" }}>
											<label
												className='upload-button'
												htmlFor='icon-button-file2'
												style={{
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													margin: "0 9px",
													borderRadius: 5,
													cursor: "pointer",
												}}>
												<Input
													accept='image/*'
													id='icon-button-file2'
													type='file'
													onChange={uploadImage2}
												/>
												<Typography
													sx={{ my: 2, ml: 2, color: "white" }}
													variant='h6'
													component='div'
													gutterBottom>
													Project Photo 2
												</Typography>
												<IconButton
													color='primary'
													aria-label='upload picture'
													component='span'>
													<FileUploadIcon
														fontSize='large'
														sx={{ fontWeight: "bold", color: "white" }}
													/>
												</IconButton>
											</label>

											{loading2 ? (
												<Box sx={{ my: 2 }}>
													<CircularProgress className='color-theme' />
												</Box>
											) : (
												<img
													src={imageLink2}
													style={{
														width: "200px",
														borderRadius: "50%",
														margin: "5px 0",
													}}
													alt=''
												/>
											)}
										</Box>
									</Grid>
									<Grid item md={6} xs={12}>
										<Box
											display='flex'
											flexDirection='column'
											alignItems='center'
											sx={{ mb: 1, mx: "auto" }}>
											<label
												className='upload-button'
												htmlFor='icon-button-file3'
												style={{
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													margin: "0 9px",
													borderRadius: 5,
													cursor: "pointer",
												}}>
												<Input
													accept='image/*'
													id='icon-button-file3'
													type='file'
													onChange={uploadImage3}
												/>
												<Typography
													sx={{ my: 2, ml: 2, color: "white" }}
													variant='h6'
													component='div'
													gutterBottom>
													Project Photo 3
												</Typography>
												<IconButton
													color='primary'
													aria-label='upload picture'
													component='span'>
													<FileUploadIcon
														fontSize='large'
														sx={{ fontWeight: "bold", color: "white" }}
													/>
												</IconButton>
											</label>

											{loading3 ? (
												<Box sx={{ my: 2 }}>
													<CircularProgress className='color-theme' />
												</Box>
											) : (
												<img
													src={imageLink3}
													style={{
														width: "200px",
														borderRadius: "50%",
														margin: "5px 0",
													}}
													alt=''
												/>
											)}
										</Box>
									</Grid>
									<Grid item md={6} xs={12}>
										<Box
											display='flex'
											flexDirection='column'
											alignItems='center'
											sx={{ mb: 1, mx: "auto" }}>
											<label
												className='upload-button'
												htmlFor='icon-button-file4'
												style={{
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													margin: "0 9px",
													borderRadius: 5,
													cursor: "pointer",
												}}>
												<Input
													accept='image/*'
													id='icon-button-file4'
													type='file'
													onChange={uploadImage4}
												/>
												<Typography
													sx={{ my: 2, ml: 2, color: "white" }}
													variant='h6'
													component='div'
													gutterBottom>
													Project Photo 4
												</Typography>
												<IconButton
													color='primary'
													aria-label='upload picture'
													component='span'>
													<FileUploadIcon
														fontSize='large'
														sx={{ fontWeight: "bold", color: "white" }}
													/>
												</IconButton>
											</label>

											{loading4 ? (
												<Box sx={{ my: 2 }}>
													<CircularProgress className='color-theme' />
												</Box>
											) : (
												<img
													src={imageLink4}
													style={{
														width: "200px",
														borderRadius: "50%",
														margin: "5px 0",
													}}
													alt=''
												/>
											)}
										</Box>
									</Grid>
									<Grid item md={12} xs={12}>
										<TextField
											className='color-theme'
											sx={{ width: "100%" }}
											id='"outlined-multiline-flexible'
											label='Project Details'
											multiline
											rows={4}
											{...register("projectDetails", { required: true })}
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											className='color-theme'
											sx={{ width: "100%" }}
											id='"outlined-multiline-flexible'
											label='Feature 1'
											{...register("feature1", { required: true })}
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											className='color-theme'
											sx={{ width: "100%" }}
											id='"outlined-multiline-flexible'
											label='Feature 2'
											{...register("feature2", { required: true })}
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											className='color-theme'
											sx={{ width: "100%" }}
											id='"outlined-multiline-flexible'
											label='Feature 3'
											{...register("feature3", { required: true })}
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											className='color-theme'
											sx={{ width: "100%" }}
											id='"outlined-multiline-flexible'
											label='Feature 4'
											{...register("feature4", { required: true })}
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											className='color-theme'
											sx={{ width: "100%" }}
											id='"outlined-multiline-flexible'
											label='Feature 5'
											{...register("feature5")}
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											className='color-theme'
											sx={{ width: "100%" }}
											id='"outlined-multiline-flexible'
											label='Feature 6'
											{...register("feature6")}
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											className='color-theme'
											sx={{ width: "100%" }}
											id='"outlined-multiline-flexible'
											label='Feature 7'
											{...register("feature7")}
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											className='color-theme'
											sx={{ width: "100%" }}
											id='"outlined-multiline-flexible'
											label='Feature 8'
											{...register("feature8")}
										/>
									</Grid>
									<Grid item md={12} xs={12}>
										<TextField
											className='color-theme'
											sx={{ width: "100%" }}
											id='"outlined-multiline-flexible'
											label='Technologies Used'
											multiline
											rows={2}
											{...register("techUsed", { required: true })}
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											className='color-theme'
											sx={{ width: "100%" }}
											id='outlined-basic'
											label='Project Live Link'
											{...register("liveLink", { required: true })}
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											className='color-theme'
											sx={{ width: "100%" }}
											id='outlined-basic'
											label='Project GitHub Client Link'
											{...register("gitClientLink", { required: true })}
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											className='color-theme'
											sx={{ width: "100%" }}
											id='outlined-basic'
											label='Project GitHub Server Link'
											{...register("gitServerLink" /* , { required: true } */)}
										/>
									</Grid>
									<Grid item md={12} xs={12}>
										<Button
											type='submit'
											variant='contained'
											className='button border'
											sx={{
												width: "100%",
												mb: 2,
												px: 3,
												fontWeight: "bold",
												border: "2px solid",
												backgroundColor: "transparent",
												borderRadius: "25px",
											}}>
											Add Project
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</form>
				) : (
					<Box sx={{ my: 2 }}>
						<CircularProgress className='color-theme' />
					</Box>
				)}
			</Grid>
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={submitting}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Container>
	);
};

export default AddProjects;
