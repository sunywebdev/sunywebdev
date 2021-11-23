import {
	Button,
	Container,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

const AllMails = () => {
	const [mails, setMails] = useState([]);
	useEffect(() => {
		fetch(`https://${process.env.REACT_APP_SERVER_API}/mails`)
			.then((res) => res.json())
			.then((data) => setMails(data));
	});

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`https://${process.env.REACT_APP_SERVER_API}/mails/${id}`)
					.then(function (response) {
						Swal.fire("Deleted!", "Your mail has been deleted.", "success");
					})
					.catch(function (error) {
						console.log(error);
					});
			}
		});
	};

	let count = 1;
	return (
		<Container sx={{ mt: { xs: 9, md: 2 } }}>
			<Grid>
				<Typography
					sx={{ mb: 3, fw: "bold", color: "#8444DF" }}
					variant='h4'
					component='div'
					gutterBottom>
					All Mails
				</Typography>
				<Paper
					className='container'
					sx={{ overflow: "auto", maxHeight: "75vh" }}>
					<Table size='small' aria-label='a dense table'>
						<TableHead sx={{ th: { fontWeight: "bold", color: "#8444DF" } }}>
							<TableRow>
								<TableCell align='left'>No</TableCell>
								<TableCell align='left'>Name</TableCell>
								<TableCell align='left'>Email</TableCell>
								<TableCell align='left'>Subject</TableCell>
								<TableCell align='left'>Details</TableCell>
								<TableCell align='left'>Action</TableCell>
							</TableRow>
						</TableHead>
						{mails?.length > 0 ? (
							<TableBody sx={{ td: { py: 1 } }}>
								{mails.map((mail) => (
									<TableRow
										key={mail?._id}
										sx={{
											"&:last-child td, &:last-child th": { border: 0 },
										}}>
										<TableCell align='left'>{count++}</TableCell>
										<TableCell align='left'>{mail?.userName}</TableCell>
										<TableCell align='left'>{mail?.userEmail}</TableCell>
										<TableCell align='left'>{mail?.subject}</TableCell>
										<TableCell align='left'>{mail?.message}</TableCell>
										<TableCell align='left'>
											<Button
												onClick={() => handleDelete(mail?._id)}
												sx={{
													fontWeight: "bold",
													backgroundColor: "#8444DF",
													"&:hover": {
														backgroundColor: "#8444DF",
													},
													borderRadius: "25px",
												}}
												variant='contained'>
												<DeleteIcon />
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						) : (
							<TableHead sx={{ th: { fontWeight: "bold" } }}>
								<TableRow>
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
									<TableCell align='left'>N/A</TableCell>
								</TableRow>
							</TableHead>
						)}
					</Table>
				</Paper>
			</Grid>
		</Container>
	);
};

export default AllMails;
