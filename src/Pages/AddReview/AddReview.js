import {
	Button,
	Grid,
	TextField,
	Typography,
	CircularProgress,
	IconButton,
	Backdrop,
	Rating,
	Fade,
	Modal,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useLocation } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	boxShadow: 24,
	p: 2,
	maxWidth: "95vw",
	maxHeight: "90vh",
	overflowX: "hidden",
	overflowY: "scroll",
	borderRadius: 3,
	backgroundColor: "white",
	textAlign: "center",
};

const AddReview = ({ open, setOpen, setSubmitting }) => {
	const form = useRef();
	const navigate = useNavigate();
	const location = useLocation();
	const [value, setValue] = React.useState();
	const [imageLink2, setImageLink2] = useState(null);
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = ({ userName, userReview, userEmail }) => {
		const data = {
			userName,
			userEmail,
			userPhoto:
				imageLink2 ||
				"https://res.cloudinary.com/dqdug0ows/image/upload/v1647179220/sunywebdevComments/user_xdotiy.jpg",
			star: value,
			userReview,
			submitTime: new Date().toLocaleString("en-GB"),
		};
		setSubmitting(true);
		axios
			.post(`${process.env.REACT_APP_SERVER_API}/reviews`, data)
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
				<Box sx={style} style={{ backgroundImage: `url(/bg-img.jpg)` }}>
					<CancelIcon
						onClick={() => setOpen(false)}
						className='color-theme'
						sx={{
							position: "fixed",
							top: "5px",
							right: "5px",
							cursor: "pointer",
						}}
					/>
					<Grid
						container
						direction='column'
						alignItems='center'
						justifyContent='center'
						sx={{ minHeight: { md: "100vh", xs: "70vh" } }}>
						<Typography
							className='color-theme '
							sx={{ mb: 4, fontWeight: 900 }}
							variant='h3'
							component='div'
							gutterBottom
							data-aos='fade-right'>
							Leave Feedback​
							<Typography
								variant='caption'
								display='block'
								sx={{ color: "red" }}>
								Your posts will appear publicly with your profile name and
								picture. Your posts will appear across the web.
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
										{!imageLink2 && !loading && (
											<label
												className='upload-button'
												htmlFor='icon-button-file'
												style={{
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													cursor: "pointer",
													width: "150px",
													height: "150px",
													borderRadius: "50%",
												}}>
												<Input
													accept='image/*'
													id='icon-button-file'
													type='file'
													onChange={uploadImage}
												/>
												<IconButton
													color='primary'
													aria-label='upload picture'
													component='span'>
													<AccountCircleIcon
														fontSize='large'
														sx={{ fontWeight: "bold", color: "white", mx: 1 }}
													/>
												</IconButton>
											</label>
										)}
										{loading ? (
											<Box sx={{ my: 2 }}>
												<CircularProgress className='color-theme' />
											</Box>
										) : (
											<>
												{imageLink2 && (
													<img
														src={imageLink2}
														style={{
															width: "150px",
															height: "150px",
															borderRadius: "50%",
														}}
														alt=''
													/>
												)}
											</>
										)}
									</Box>
									<Box
										sx={{
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
											emptyIcon={
												<StarIcon
													className='color-text'
													style={{ opacity: 0.55 }}
													fontSize='inherit'
												/>
											}
										/>
									</Box>
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
										label='Email'
										{...register("userEmail", { required: true })}
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
				</Box>
			</Fade>
		</Modal>
	);
};

export default AddReview;
