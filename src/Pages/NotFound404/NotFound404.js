import { Grid, Typography } from "@mui/material";
import React from "react";

const NotFound404 = () => {
	return (
		<Grid
			data-aos='zoom-in'
			container
			direction='column'
			alignItems='center'
			justifyContent='center'
			style={{ minHeight: "95vh" }}>
			<Typography variant='h1' component='div' sx={{ fontWeight: 900 }}>
				404
			</Typography>
			<Typography
				variant='h2'
				component='div'
				gutterBottom
				sx={{ fontWeight: 900 }}>
				Opps!
			</Typography>
			<Typography
				variant='h3'
				component='div'
				gutterBottom
				sx={{ fontWeight: 900 }}>
				Page Not Found
			</Typography>
		</Grid>
	);
};

export default NotFound404;
