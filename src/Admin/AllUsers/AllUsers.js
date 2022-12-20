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

const AllUsers = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_API}/users`)
			.then((res) => res.json())
			.then((data) => setUsers(data.reverse()));
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
					.delete(`${process.env.REACT_APP_SERVER_API}/users/${id}`)
					.then(function (response) {
						Swal.fire("Deleted!", "That User has been removed.", "success");
					})
					.catch(function (error) {
						console.log(error);
					});
			}
		});
	};

	let count = 1;
	return (
		<Container
			sx={{
				mt: { xs: 9, md: 2 },
			}}>
			<Grid sx={{ minHeight: "100vh", minHeight: { md: "100vh", xs: "70vh" } }}>
				<Typography
					className='color-theme'
					sx={{ mb: 2, fontWeight: "bold" }}
					variant='h3'
					component='div'>
					All Users
				</Typography>
				<Grid item xs={12} md={12}>
					<Paper
						className='container cardShadow'
						sx={{
							overflow: "auto",
							maxHeight: "70vh",
							bgcolor: "transparent",
						}}>
						<Table size='small' aria-label='a dense table'>
							<TableHead sx={{ th: { fontWeight: "bold" } }}>
								<TableRow>
									<TableCell className='color-theme' align='left'>
										No
									</TableCell>
									<TableCell className='color-theme' align='left'>
										Photo
									</TableCell>
									<TableCell className='color-theme' align='left'>
										Name
									</TableCell>
									<TableCell className='color-theme' align='left'>
										Email
									</TableCell>
									<TableCell className='color-theme' align='left'>
										Action
									</TableCell>
								</TableRow>
							</TableHead>
							{users?.length > 0 ? (
								<TableBody sx={{ td: { py: 1 } }}>
									{users.map((user) => (
										<TableRow
											key={user?._id}
											sx={{
												"&:last-child td, &:last-child th": { border: 0 },
											}}>
											<TableCell align='left color-text'>{count++}</TableCell>
											<TableCell>
												<img
													src={user?.photoURL || "N/A"}
													alt=''
													width='35px'
													height='35px'
													style={{ borderRadius: "50%" }}
												/>
											</TableCell>
											<TableCell align='left color-text'>
												{user?.displayName || "N/A"}
											</TableCell>
											<TableCell align='left color-text'>
												{user?.email || "N/A"}
											</TableCell>
											<TableCell align='left  color-text'>
												<Button
													className='button border'
													onClick={() => handleDelete(user?._id)}
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
									</TableRow>
								</TableHead>
							)}
						</Table>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AllUsers;
