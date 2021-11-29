import { Grid, Typography } from "@mui/material";
import React from "react";

const Blogs = () => {
	return (
		<Grid
			data-aos='zoom-in'
			container
			direction='column'
			alignItems='center'
			justifyContent='center'
			style={{ minHeight: "100vh", color: "#8444DF" }}>
			<Typography variant='h1' component='div' sx={{ fontWeight: 900 }}>
				Blogs
			</Typography>
			<Typography
				variant='h3'
				component='div'
				gutterBottom
				sx={{ fontWeight: 900 }}>
				Comming Soon!
			</Typography>
		</Grid>
	);
};

export default Blogs;
