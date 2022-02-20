import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
/* import PeopleAltIcon from "@mui/icons-material/PeopleAlt"; */
import AllInboxIcon from "@mui/icons-material/AllInbox";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import image from "../../../Pages/Home/Shoyeb Mohammed Suny.png";
import ThemeChanger from "../../../Shared/Login/ThemeChanger";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../../../context/useAuth";
import Swal from "sweetalert2";

const drawerWidth = 190;

function DashBoard(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const { logOut, admin } = useAuth();
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const drawer = (
		<Box
			className='navbar'
			sx={{
				m: "auto",
				textAlign: "center",
			}}>
			<Box
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{
					my: 2,
					display: { md: "none", sm: "none", xs: "block" },
				}}>
				<img
					className='border'
					style={{
						width: "150px",
						height: "150px",
						borderRadius: "50%",
						border: "5px solid",
						my: 2,
					}}
					src={image}
					alt=''
				/>
				<Typography
					variant='h6'
					component='div'
					sx={{ fontWeight: "bold", my: 1 }}>
					Shoyeb Mohammed Suny
				</Typography>
				<Typography variant='body' component='div' sx={{ fontWeight: "bold" }}>
					MERN Stack Web Developer
				</Typography>
			</Box>
			<Box
				sx={{
					textAlign: "center",
					display: "flex",
					flexDirection: "column",
					flexWrap: "wrap",
					alignContent: "space-around",
				}}>
				{/* 			<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='/dashboard'>
					<ListItem button>
						<PeopleAltIcon sx={{ mr: 1.5, my: 0.7 }} fontSize='medium' />
						All Users
					</ListItem>
				</Link> */}
				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='/dashboard'>
					<ListItem button>
						<LaptopChromebookIcon sx={{ mr: 1.5, my: 0.7 }} fontSize='medium' />
						All Projects
					</ListItem>
				</Link>
				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to={`/dashboard/allmails`}>
					<ListItem button>
						<AllInboxIcon sx={{ mr: 1.5, my: 0.7 }} fontSize='medium' />
						All Mails
					</ListItem>
				</Link>
				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='/dashboard/allreviews'>
					<ListItem button>
						<ReviewsOutlinedIcon sx={{ mr: 1.5, my: 0.7 }} fontSize='medium' />
						All Reviews
					</ListItem>
				</Link>
				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='/dashboard/addprojects'>
					<ListItem button>
						<AddToQueueIcon sx={{ mr: 1.5, my: 0.7 }} fontSize='medium' />
						Add Projects
					</ListItem>
				</Link>

				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='/'>
					<ListItem button>
						<HomeIcon sx={{ mr: 1.5, my: 0.7 }} fontSize='medium' />
						Home
					</ListItem>
				</Link>
				<Link to='/'>
					<ListItem button className='color-theme' onClick={logOut}>
						<LogoutIcon sx={{ mr: 1.5, my: 0.7 }} fontSize='medium' />
						LogOut
					</ListItem>
				</Link>
			</Box>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	React.useEffect(() => {
		// eslint-disable-next-line no-lone-blocks
		{
			admin === true
				? Swal.fire({
						icon: "success",
						title: "Hello!",
						text: "Welcome Admin!",
						showConfirmButton: true,
						timer: 2500,
				  })
				: Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "You Are Not An Admin!",
						showConfirmButton: true,
						timer: 2500,
				  });
		}
	}, [admin]);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				className='navbg'
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					display: { xs: "block", sm: "none" },
				}}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						Admin Dashboard
					</Typography>
					<ThemeChanger />
				</Toolbar>
			</AppBar>
			<Box
				onClick={() => setMobileOpen(false)}
				component='nav'
				sx={{
					width: { sm: drawerWidth },
					flexShrink: { sm: 0 },
				}}
				aria-label='mailbox folders'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					className='nav'
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: "92%",
							height: "96.5%",
							m: 2,
							borderRadius: 7,
						},
					}}>
					{drawer}
				</Drawer>
				<Drawer
					className='nav'
					variant='permanent'
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open>
					<Box sx={{ pt: 2 }}>
						<ThemeChanger />
					</Box>
					{drawer}
				</Drawer>
			</Box>
			<Outlet></Outlet>
		</Box>
	);
}

DashBoard.propTypes = {
	window: PropTypes.func,
};

export default DashBoard;
