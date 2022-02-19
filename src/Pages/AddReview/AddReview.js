import {
	Button,
	Container,
	Grid,
	TextField,
	Typography,
	CircularProgress,
	IconButton,
	Backdrop,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "@emotion/styled";
import user from "./user.jpg";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useNavigate } from "react-router-dom";
/* import StarIcon from "@mui/icons-material/Star"; */
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";

const AddReview = () => {
	const form = useRef();
	const navigate = useNavigate();
	const location = useLocation();
	/*	const navigate = useNavigate();
	const [value, setValue] = React.useState();
	 const [hover, setHover] = React.useState(-1); */
	const [submitting, setSubmitting] = useState(false);
	const [imageLink2, setImageLink2] = useState(null);
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = ({ userName, userReview }) => {
		const data = {
			userName,
			userPhoto: imageLink2 || user,
			/* star: value, */
			userReview,
			submitTime: new Date().toLocaleString("en-GB"),
		};
		setSubmitting(true);

		emailjs
			.sendForm(
				"sunywebdev",
				"sunywebdevComments",
				form.current,
				"user_aUuHacyHZpyM577ohllYe",
			)
			.then(
				(result) => {
					axios
						.post(`https://${process.env.REACT_APP_SERVER_API}/reviews`, data)
						.then(function (response) {
							setSubmitting(false);
							setSubmitting(false);
							Swal.fire({
								icon: "success",
								title: "Your Review Successfully Added",
								showConfirmButton: true,
								timer: 2500,
							}).then(function () {
								reset();
								const destination = location?.state?.from || "/";
								navigate(destination);
							});
						})
						.catch(function (error) {
							console.log(error);
						});
				},
				(error) => {
					console.log(error.text);
				},
			);
	};

	const [loading, setLoading] = useState(false);
	const uploadImage = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "sunywebdevComments");
		setLoading(true);
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/dqdug0ows/image/upload",
			{
				method: "POST",
				body: data,
			},
		);
		const file = await res.json();
		setImageLink2(file.secure_url);
		setLoading(false);
	};
	const Input = styled("input")({
		display: "none",
	});
	return (
		<Container sx={{ mt: { md: 0, xs: 7 } }}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{ minHeight: { md: "100vh", xs: "90vh" } }}>
				<Typography
					className='color-theme '
					sx={{ mb: 4, fontWeight: 900 }}
					variant='h3'
					component='div'
					gutterBottom
					data-aos='fade-right'>
					Leave A Feedback​
					<Typography variant='caption' display='block' sx={{ color: "red" }}>
						Your posts will appear publicly with your profile name and picture.
						Your posts will appear across the web.
					</Typography>
				</Typography>

				<Grid container spacing={2}>
					<Grid item md={7} xs={12} sx={{ mx: "auto" }}>
						<form
							ref={form}
							data-aos='fade-left'
							onSubmit={handleSubmit(onSubmit)}>
							<Box
								display='flex'
								flexDirection='column'
								alignItems='center'
								sx={{ mb: 1, mx: "auto" }}>
								<label
									className='upload-button'
									htmlFor='icon-button-file'
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
										id='icon-button-file'
										type='file'
										onChange={uploadImage}
									/>
									<Typography
										sx={{ my: 2, ml: 2, color: "white" }}
										variant='h6'
										component='div'
										gutterBottom>
										Upload Your Photo (Optional)
									</Typography>
									<IconButton
										color='primary'
										aria-label='upload picture'
										component='span'>
										<AccountCircleIcon
											fontSize='large'
											sx={{ fontWeight: "bold", color: "white", mx: 1 }}
										/>
										<FileUploadIcon
											fontSize='large'
											sx={{ fontWeight: "bold", color: "white" }}
										/>
									</IconButton>
								</label>

								{loading ? (
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
							{/* 	<Box
								sx={{
									mt: 3,
									display: "flex",
									justifyContent: "center",
								}}>
								<Rating
									className='color-theme'
									sx={{
										float: "left",
										mb: 2,
										fontSize: 70,
									}}
									name='hover-feedback'
									value={value}
									size='large'
									precision={0.5}
									onChange={(event, newValue) => {
										setValue(newValue);
									}}
									onChangeActive={(event, newHover) => {
										 setHover(newHover);
									}}
									emptyIcon={
										<StarIcon
											className='color-text'
											style={{ opacity: 0.55 }}
											fontSize='inherit'
										/>
									}
								/>
							<Typography
										className='color-theme'
										variant='h4'
										component='div'
										sx={{ ml: 2, mb: 1.7 }}>
										{hover !== -1 ? hover : value}
									</Typography> 
							</Box>*/}
							<TextField
								required
								sx={{ width: "100%", mb: 2 }}
								id='"outlined-multiline-flexible'
								label='Name'
								{...register("userName", { required: true })}
							/>
							<TextField
								required
								sx={{ width: "100%", mb: 2 }}
								id='"outlined-multiline-flexible'
								label='Share Your Review'
								multiline
								rows={4}
								{...register("userReview", { required: true })}
							/>
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
								POST REVIEW
							</Button>
						</form>
					</Grid>
				</Grid>
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

export default AddReview;
