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
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";

const AllUsers = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch(`https://fast-savannah-56016.herokuapp.com/users`)
			.then((res) => res.json())
			.then((data) => setUsers(data));
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
					.delete(`https://fast-savannah-56016.herokuapp.com/users/${id}`)
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
			<Grid>
				<Typography
					sx={{ mb: 3, fw: "bold" }}
					variant='h4'
					component='div'
					gutterBottom>
					All Users
				</Typography>
				<Grid item xs={12} md={12}>
					<Paper
						className='container'
						sx={{ overflow: "auto", maxHeight: "75vh" }}>
						<Table size='small' aria-label='a dense table'>
							<TableHead sx={{ th: { fontWeight: "bold" } }}>
								<TableRow>
									<TableCell align='left'>No</TableCell>
									<TableCell align='left'>Photo</TableCell>
									<TableCell align='left'>Name</TableCell>
									<TableCell align='left'>Email</TableCell>
									<TableCell align='left'>Action</TableCell>
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
											<TableCell align='left'>{count++}</TableCell>
											<TableCell>
												<img
													src={user?.photoURL || "N/A"}
													alt=''
													width='35px'
													height='35px'
													style={{ borderRadius: "50%" }}
												/>
											</TableCell>
											<TableCell align='left'>
												{user?.displayName || "N/A"}
											</TableCell>
											<TableCell align='left'>{user?.email || "N/A"}</TableCell>
											<TableCell align='left'>
												<Button
													onClick={() => handleDelete(user?._id)}
													classes={{ root: "bg-1" }}
													sx={{ mx: 1 }}
													variant='contained'>
													<CloseIcon />
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
