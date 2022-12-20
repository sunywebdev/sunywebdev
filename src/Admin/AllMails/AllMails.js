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
		fetch(`${process.env.REACT_APP_SERVER_API}/mails`)
			.then((res) => res.json())
			.then((data) => setMails(data.reverse()));
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
					.delete(`${process.env.REACT_APP_SERVER_API}/mails/${id}`)
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
		<Container sx={{ minHeight: "100vh", mt: { xs: 9, md: 2 } }}>
			<Grid sx={{ minHeight: { md: "100vh", xs: "70vh" } }}>
				<Typography
					className='color-theme'
					sx={{ mb: 2, fontWeight: "bold" }}
					variant='h3'
					component='div'>
					All Mails
				</Typography>
				<Paper
					className='container cardShadow'
					sx={{ overflow: "auto", maxHeight: "70vh", bgcolor: "transparent" }}>
					<Table size='small' aria-label='a dense table'>
						<TableHead sx={{ th: { fontWeight: "bold" } }}>
							<TableRow>
								<TableCell className='color-theme' align='left'>
									No
								</TableCell>
								<TableCell className='color-theme' align='left'>
									Name
								</TableCell>
								<TableCell className='color-theme' align='left'>
									Email
								</TableCell>
								<TableCell className='color-theme' align='left'>
									Rec Time
								</TableCell>
								<TableCell className='color-theme' align='left'>
									Subject
								</TableCell>
								<TableCell className='color-theme' align='left'>
									Details
								</TableCell>
								<TableCell className='color-theme' align='left'>
									Action
								</TableCell>
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
										<TableCell align='left color-text '>{count++}</TableCell>
										<TableCell align='left color-text '>
											{mail?.userName}
										</TableCell>
										<TableCell align='left color-text '>
											{mail?.userEmail}
										</TableCell>
										<TableCell align='left color-text '>
											{mail?.submitTime || "N/A"}
										</TableCell>
										<TableCell align='left color-text '>
											{mail?.subject}
										</TableCell>
										<TableCell align='left color-text '>
											{mail?.message}
										</TableCell>
										<TableCell align='left color-text '>
											<Button
												onClick={() => handleDelete(mail?._id)}
												className='button border'
												sx={{
													fontWeight: "bold",
													border: "2px solid",
													backgroundColor: "transparent",
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
									<TableCell align='left color-text '>N/A</TableCell>
									<TableCell align='left color-text '>N/A</TableCell>
									<TableCell align='left color-text '>N/A</TableCell>
									<TableCell align='left color-text '>N/A</TableCell>
									<TableCell align='left color-text '>N/A</TableCell>
									<TableCell align='left color-text '>N/A</TableCell>
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
