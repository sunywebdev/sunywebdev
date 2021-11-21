import {
	Button,
	CircularProgress,
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
import AlertDialog from "../../Shared/AlertDialog/AlertDialog";
import AlertSuccess from "../../Shared/AlertSuccess/AlertSuccess";

const AllUsers = () => {
	const [users, setUsers] = useState([]);
	const [alert, setAlert] = React.useState(false);
	const [openSuccessMsg, setOpenSuccessMsg] = React.useState(false);
	const [successMsg, setSuccessMsg] = useState("");
	useEffect(() => {
		fetch(`https://fast-savannah-56016.herokuapp.com/users`)
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, [openSuccessMsg]);

	const handleAlertAgreeClose = (id) => {
		axios
			.delete(`https://fast-savannah-56016.herokuapp.com/users/${id}`)
			.then(function (response) {
				setOpenSuccessMsg(true);
				setSuccessMsg("This User Deleted Successfully");
			})
			.catch(function (error) {
				console.log(error);
			});
		setAlert(false);
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
													onClick={() => setAlert(true)}
													classes={{ root: "bg-1" }}
													sx={{ mx: 1 }}
													variant='contained'>
													<CloseIcon />
												</Button>
											</TableCell>
											<AlertDialog
												alert={alert}
												setAlert={setAlert}
												handleAlertAgreeClose={handleAlertAgreeClose}
												id={user?._id}></AlertDialog>
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
			<AlertSuccess
				successMsg={successMsg}
				openSuccessMsg={openSuccessMsg}
				setOpenSuccessMsg={setOpenSuccessMsg}></AlertSuccess>
		</Container>
	);
};

export default AllUsers;
