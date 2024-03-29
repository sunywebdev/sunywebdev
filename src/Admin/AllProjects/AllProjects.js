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
		fetch(`${process.env.REACT_APP_SERVER_API}/projects`)
			.then((res) => res.json())
			.then((data) => setProjects(data?.sort((a, b) => a.sort - b.sort)));
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
					.delete(`${process.env.REACT_APP_SERVER_API}/projects/${id}`)
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
		<Container sx={{ minHeight: "100vh", mt: { xs: 9, md: 2 } }}>
			<Grid sx={{ minHeight: { md: "100vh", xs: "70vh" } }}>
				<Typography
					className='color-theme'
					sx={{ mb: 2, fontWeight: "bold" }}
					variant='h3'
					component='div'>
					All Projects
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
										ProjectName
									</TableCell>
									<TableCell className='color-theme' align='left'>
										Last Updated
									</TableCell>
									<TableCell className='color-theme' align='left'>
										Action
									</TableCell>
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
											<TableCell align='left color-text '>{count++}</TableCell>
											<TableCell align='left color-text '>
												{project?.projectName || "N/A"}
											</TableCell>
											<TableCell align='left color-text '>
												{project?.submitTime || "N/A"}
											</TableCell>

											<TableCell align='left color-text '>
												<ButtonGroup>
													<Link to={`/dashboard/${project?._id}`}>
														<Button
															className='button border'
															sx={{
																mr: 0.5,
																fontWeight: "bold",
																border: "2px solid",
																backgroundColor: "transparent",
																borderRadius: "25px",
															}}
															variant='contained'>
															<EditIcon />
														</Button>
													</Link>
													<Button
														className='button border'
														onClick={() => handleDelete(project?._id)}
														sx={{
															ml: 0.5,
															fontWeight: "bold",
															border: "2px solid",
															backgroundColor: "transparent",
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
