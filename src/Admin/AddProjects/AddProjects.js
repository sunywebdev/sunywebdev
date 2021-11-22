import {
	Button,
	Container,
	Grid,
	Input,
	TextField,
	Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProjects = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [imageUrl, setImageUrl] = useState(null);
	const [error, setError] = useState("");
	const uploadImage = (selectedImage) => {
		let payload = new FormData();
		payload.append("image", selectedImage);

		axios
			.post(
				`https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_IMGBB_API}`,
				payload,
			)
			.then((response) => {
				setImageUrl(response?.data?.data?.url);
				setError();
			})
			.catch((error) => {
				setError("Photo Upload Unsuccessful, Try again.");
			});
	};

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = ({
		projectName,
		projectDetails,
		liveLink,
		gitClientLink,
		gitServerLink,
	}) => {
		const data = {
			projectName,
			projectDetails,
			liveLink,
			gitClientLink,
			gitServerLink,
			projectPhoto: imageUrl,
		};
		axios
			.post("https://fast-savannah-56016.herokuapp.com/projects", data)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "Your Project Successfully Added",
					showConfirmButton: false,
					timer: 1500,
				});
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
					sx={{ mb: 3, fw: "bold" }}
					variant='h4'
					component='div'
					gutterBottom>
					Add New Project
				</Typography>
				<Grid container spacing={2}>
					<Grid item md={7} xs={12} sx={{ mx: "auto" }}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<TextField
								sx={{ width: "100%", mb: 2 }}
								id='outlined-basic'
								label='Enter Project Name'
								{...register("projectName", { required: true })}
							/>
							{imageUrl && selectedImage && (
								<div>
									<img alt='not fount' width={"250px"} src={imageUrl} />
								</div>
							)}
							{error && <p style={{ color: "red" }}>{error}</p>}
							<Input
								sx={{ mb: 2 }}
								accept='image/*'
								type='file'
								name='myImage'
								onChange={(event) => {
									uploadImage(selectedImage);
									setSelectedImage(event.target.files[0]);
								}}
								id='icon-button-file'
							/>
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
								{...register("gitServerLink", { required: true })}
							/>

							<Button
								type='submit'
								variant='contained'
								sx={{ width: "100%", mb: 2 }}>
								Add Project
							</Button>
						</form>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AddProjects;
