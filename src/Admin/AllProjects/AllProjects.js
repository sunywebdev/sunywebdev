import {
	Button,
	ButtonGroup,
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
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

const AllProjects = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch(`https://${process.env.REACT_APP_SERVER_API}/projects`)
			.then((res) => res.json())
			.then((data) => setProjects(data));
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
					.delete(`https://${process.env.REACT_APP_SERVER_API}/projects/${id}`)
					.then(function (response) {
						Swal.fire("Deleted!", "That Project has been deleted.", "success");
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
					All Projects
				</Typography>
				<Grid item xs={12} md={12}>
					<Paper
						className='container'
						sx={{ overflow: "auto", maxHeight: "75vh" }}>
						<Table size='small' aria-label='a dense table'>
							<TableHead sx={{ th: { fontWeight: "bold", color: "#8444DF" } }}>
								<TableRow>
									<TableCell align='left'>No</TableCell>
									<TableCell align='left'>ProjectName</TableCell>
									<TableCell align='left'>Action</TableCell>
								</TableRow>
							</TableHead>
							{projects?.length > 0 ? (
								<TableBody sx={{ td: { py: 1 } }}>
									{projects.map((project) => (
										<TableRow
											key={project?._id}
											sx={{
												"&:last-child td, &:last-child th": { border: 0 },
											}}>
											<TableCell align='left'>{count++}</TableCell>
											<TableCell align='left'>
												{project?.projectName || "N/A"}
											</TableCell>

											<TableCell align='left'>
												<ButtonGroup>
													<Link to={`/dashboard/${project?._id}`}>
														<Button
															sx={{
																mr: 0.5,
																fontWeight: "bold",
																backgroundColor: "#8444DF",
																"&:hover": {
																	backgroundColor: "#8444DF",
																},
																borderRadius: "25px",
															}}
															variant='contained'>
															<EditIcon />
														</Button>
													</Link>
													<Button
														onClick={() => handleDelete(project?._id)}
														sx={{
															ml: 0.5,
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
												</ButtonGroup>
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

export default AllProjects;
