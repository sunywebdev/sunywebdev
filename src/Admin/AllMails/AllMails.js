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

const AllMails = () => {
	const [mails, setMails] = useState([]);
	const [alert, setAlert] = React.useState(false);
	const [openSuccessMsg, setOpenSuccessMsg] = React.useState(false);
	const [successMsg, setSuccessMsg] = useState("");
	useEffect(() => {
		fetch(`https://fast-savannah-56016.herokuapp.com/mails`)
			.then((res) => res.json())
			.then((data) => setMails(data));
	}, [openSuccessMsg]);

	const handleAlertAgreeClose = (id) => {
		axios
			.delete(`https://fast-savannah-56016.herokuapp.com/mails/${id}`)
			.then(function (response) {
				setOpenSuccessMsg(true);
				setSuccessMsg("This Mail Deleted Successfully");
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
					All Mails
				</Typography>
				<Paper
					className='container'
					sx={{ overflow: "auto", maxHeight: "75vh" }}>
					<Table size='small' aria-label='a dense table'>
						<TableHead sx={{ th: { fontWeight: "bold" } }}>
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
										<TableCell align='left'>{mail?.details}</TableCell>
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
											id={mail?._id}></AlertDialog>
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
			<AlertSuccess
				successMsg={successMsg}
				openSuccessMsg={openSuccessMsg}
				setOpenSuccessMsg={setOpenSuccessMsg}></AlertSuccess>
		</Container>
	);
};

export default AllMails;
