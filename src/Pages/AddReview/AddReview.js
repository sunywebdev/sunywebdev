import {
	Button,
	Container,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	Rating,
	TextField,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import StarIcon from "@mui/icons-material/Star";
import useAuth from "../../context/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddReview = () => {
	const [value, setValue] = React.useState(2.3);
	const [hover, setHover] = React.useState(-1);
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = ({ userName, userEmail, userReview }) => {
		const data = {
			userName,
			userPhoto: user?.photoURL,
			userEmail,
			star: value,
			userReview,
		};
		axios
			.post(`https://${process.env.REACT_APP_SERVER_API}/reviews`, data)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "Your Review Successfully Added",
					showConfirmButton: false,
					timer: 1500,
				});
				reset();
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	const { user } = useAuth();
	return (
		<Container sx={{ mt: { md: 0, xs: 7 } }}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{ minHeight: { md: "95vh", xs: "70vh" } }}>
				<Typography
					sx={{ mb: 4, fontWeight: 900, color: "#8444DF" }}
					variant='h3'
					component='div'
					gutterBottom
					data-aos='fade-right'>
					ADD REVIEW
					<Typography
						variant='caption'
						display='block'
						gutterBottom
						sx={{ color: "red" }}>
						Your posts will appear publicly with your profile name and picture.
						Your posts will appear across the web.
					</Typography>
				</Typography>

				<Grid container spacing={2}>
					<Grid item md={7} xs={12} sx={{ mx: "auto" }}>
						<form data-aos='fade-left' onSubmit={handleSubmit(onSubmit)}>
							<List
								sx={{
									width: "100%",
									maxWidth: 400,
									bgcolor: "transparent",
								}}>
								<ListItem>
									<ListItemAvatar>
										<img
											style={{
												width: "50px",
												height: "50px",
												borderRadius: "50%",
												my: 2,
											}}
											src={user?.photoURL}
											alt=''
										/>
									</ListItemAvatar>
									<Box item sx={{ textAlign: "left", ml: 2 }}>
										<input
											defaultValue={user?.displayName}
											style={{
												border: 0,
												fontSize: "18px",
												backgroundColor: "transparent",
												pointerEvents: "none",
												my: 2,
												fontWeight: "bold",
												color: "#8444DF",
											}}
											{...register("userName", { required: true })}
										/>
										<input
											style={{
												border: 0,
												fontSize: "17px",
												textAlign: "left",
												backgroundColor: "transparent",
												pointerEvents: "none",
												my: 2,
											}}
											defaultValue={user?.email}
											{...register("userEmail", { required: true })}
										/>
									</Box>
								</ListItem>
							</List>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
								}}>
								<Rating
									sx={{ float: "left", mb: 2, fontSize: 50, color: "#8444DF" }}
									name='hover-feedback'
									value={value}
									size='large'
									precision={0.1}
									onChange={(event, newValue) => {
										setValue(newValue);
									}}
									onChangeActive={(event, newHover) => {
										setHover(newHover);
									}}
									emptyIcon={
										<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
									}
								/>
								<Typography
									variant='h4'
									component='div'
									sx={{ ml: 2, mb: 1.7, color: "#8444DF" }}>
									{hover !== -1 ? hover : value}
								</Typography>
							</Box>
							<TextField
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
								POST REVIEW
							</Button>
						</form>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AddReview;
