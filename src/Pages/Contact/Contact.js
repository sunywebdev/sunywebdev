import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import AlertSuccess from "../../Shared/AlertSuccess/AlertSuccess";
import "./form";

const Contact = () => {
	const [openSuccessMsg, setOpenSuccessMsg] = React.useState(false);
	const [successMsg, setSuccessMsg] = React.useState("");
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		axios
			.post("http://localhost:5000/mails", data)
			.then(function (response) {
				setOpenSuccessMsg(true);
				setSuccessMsg("Your Mail Sent Successfully!");
				reset();
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<Container sx={{ mt: { md: 0, xs: 7 } }}>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: "95vh" }}>
				<Typography sx={{ mb: 0 }} variant='h3' component='div' gutterBottom>
					CONTACT
				</Typography>
				<Typography sx={{ mb: 4 }} variant='h5' component='div' gutterBottom>
					Do you speak Alien Language? It's ok if you don't, I speak English
					too.
				</Typography>
				<Grid container spacing={2}>
					<Grid item md={7} xs={12} sx={{ mx: "auto" }}>
						<form
							onSubmit={handleSubmit(onSubmit)}
							action={process.env.REACT_APP_GFORM_ID}
							method='post'
							id='gform'
							className='gform'>
							<Grid container spacing={2}>
								<Grid item md={6} xs={12} /* style={{ paddingLeft: "0" }} */>
									<TextField
										sx={{ width: "100%", mb: 2 }}
										id='outlined-basic'
										name='UserName'
										label='Enter Your Name'
										{...register("userName", { required: true })}
									/>
								</Grid>
								<Grid item md={6} xs={12}>
									<TextField
										sx={{ width: "100%", mb: 2 }}
										id='outlined-basic'
										name='UserEmail'
										label='Enter Your Email'
										{...register("userEmail", { required: true })}
									/>
								</Grid>
							</Grid>
							<TextField
								sx={{ width: "100%", mb: 2 }}
								id='outlined-basic'
								label='Subject'
								name='Subject'
								{...register("subject", { required: true })}
							/>
							<TextField
								sx={{ width: "100%", mb: 2 }}
								id='"outlined-multiline-flexible'
								label='Details'
								name='details'
								multiline
								rows={4}
								{...register("details", { required: true })}
							/>

							<Button
								type='submit'
								variant='contained'
								sx={{ width: "100%", mb: 2 }}>
								SEND EMAIL
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

export default Contact;
