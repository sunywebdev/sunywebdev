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
import AlertDialog from "../../Shared/AlertDialog/AlertDialog";
import AlertSuccess from "../../Shared/AlertSuccess/AlertSuccess";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const AllProjects = () => {
	const [projects, setProjects] = useState([]);
	const [alert, setAlert] = React.useState(false);
	const [openSuccessMsg, setOpenSuccessMsg] = React.useState(false);
	const [successMsg, setSuccessMsg] = useState("");
	useEffect(() => {
		fetch(`http://localhost:5000/projects`)
			.then((res) => res.json())
			.then((data) => setProjects(data));
	}, [openSuccessMsg]);

	const handleAlertAgreeClose = (id) => {
		axios
			.delete(`http://localhost:5000/projects/${id}`)
			.then(function (response) {
				setOpenSuccessMsg(true);
				setSuccessMsg("This Project Deleted Successfully");
			})
			.catch(function (error) {
				console.log(error);
			});
		setAlert(false);
	};
	let count = 1;
	return (
		<Container sx={{ mt: { xs: 9, md: 2 } }}>
			<Grid>
				<Typography
					sx={{ mb: 3, fw: "bold" }}
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
							<TableHead sx={{ th: { fontWeight: "bold" } }}>
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
															classes={{ root: "bg-1" }}
															variant='contained'>
															<EditIcon />
														</Button>
													</Link>
													<Button
														onClick={() => setAlert(true)}
														classes={{ root: "bg-1" }}
														sx={{ mx: 1 }}
														variant='contained'>
														<DeleteIcon />
													</Button>
												</ButtonGroup>
											</TableCell>
											<AlertDialog
												alert={alert}
												setAlert={setAlert}
												handleAlertAgreeClose={handleAlertAgreeClose}
												id={project?._id}></AlertDialog>
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
			<AlertSuccess
				successMsg={successMsg}
				openSuccessMsg={openSuccessMsg}
				setOpenSuccessMsg={setOpenSuccessMsg}></AlertSuccess>
		</Container>
	);
};

export default AllProjects;
