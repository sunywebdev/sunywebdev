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
import AlertSuccess from "../../Shared/AlertSuccess/AlertSuccess";

const AddReview = () => {
	const [value, setValue] = React.useState(2.3);
	const [hover, setHover] = React.useState(-1);
	const [openSuccessMsg, setOpenSuccessMsg] = React.useState(false);
	const [successMsg, setSuccessMsg] = React.useState("");
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
			.post("http://localhost:5000/reviews", data)
			.then(function (response) {
				setOpenSuccessMsg(true);
				setSuccessMsg("Your Review Added Successfully!");
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
				<Typography sx={{ mb: 4 }} variant='h3' component='div' gutterBottom>
					ADD REVIEW
					<Typography variant='caption' display='block' gutterBottom>
						Your posts will appear publicly with your profile name and picture.
						Your posts will appear across the web.
					</Typography>
				</Typography>

				<Grid container spacing={2}>
					<Grid item md={7} xs={12} sx={{ mx: "auto" }}>
						<form onSubmit={handleSubmit(onSubmit)}>
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
									sx={{ float: "left", mb: 2 }}
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
									variant='h5'
									component='div'
									sx={{ ml: 2, mb: 1.7 }}>
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
								sx={{ width: "100%", mb: 2 }}>
								POST REVIEW
							</Button>
						</form>
					</Grid>
				</Grid>
			</Grid>
			<AlertSuccess
				successMsg={successMsg}
				openSuccessMsg={openSuccessMsg}
				setOpenSuccessMsg={setOpenSuccessMsg}></AlertSuccess>
		</Container>
	);
};

export default AddReview;
