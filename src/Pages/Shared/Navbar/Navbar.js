import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeIcon from "@mui/icons-material/Home";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import { Grid } from "@mui/material";
import useAuth from "../../../context/useAuth";
import DashboardIcon from "@mui/icons-material/Dashboard";
import image from "../../About/Shoyeb Mohammed Suny.png";

const drawerWidth = 290;

function Navbar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const { user, logOut, admin } = useAuth();

	const drawer = (
		<Box>
			<Grid
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{ my: 3 }}>
				<img
					style={{
						width: "111px",
						height: "111px",
						borderRadius: "50%",
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
			</Grid>
			<Link
				style={{
					textDecoration: "none",
					color: "black",
					fontWeight: "bold",
					fontSize: "21px",
				}}
				to='/'>
				<ListItem button>
					<ListItemIcon>
						<HomeIcon fontSize='large' />
					</ListItemIcon>
					Home
				</ListItem>
			</Link>
			<Link
				style={{
					textDecoration: "none",
					color: "black",
					fontWeight: "bold",
					fontSize: "21px",
				}}
				to='about'>
				<ListItem button>
					<ListItemIcon>
						<PersonOutlineIcon fontSize='large' />
					</ListItemIcon>
					About
				</ListItem>
			</Link>
			<Link
				style={{
					textDecoration: "none",
					color: "black",
					fontWeight: "bold",
					fontSize: "21px",
				}}
				to='portfolio'>
				<ListItem button>
					<ListItemIcon>
						<LaptopChromebookIcon fontSize='large' />
					</ListItemIcon>
					Portfolio
				</ListItem>
			</Link>
			<Link
				style={{
					textDecoration: "none",
					color: "black",
					fontWeight: "bold",
					fontSize: "21px",
				}}
				to='reviews'>
				<ListItem button>
					<ListItemIcon>
						<ReviewsOutlinedIcon fontSize='large' />
					</ListItemIcon>
					Reviews
				</ListItem>
			</Link>
			<Link
				style={{
					textDecoration: "none",
					color: "black",
					fontWeight: "bold",
					fontSize: "21px",
				}}
				to='contact'>
				<ListItem button>
					<ListItemIcon>
						<ContactPageIcon fontSize='large' />
					</ListItemIcon>
					Contact
				</ListItem>
			</Link>
			{admin && (
				<Link
					style={{
						textDecoration: "none",
						color: "black",
						fontWeight: "bold",
						fontSize: "21px",
					}}
					to='/dashboard'>
					<ListItem button>
						<ListItemIcon>
							<DashboardIcon fontSize='large' />
						</ListItemIcon>
						Dashboard
					</ListItem>
				</Link>
			)}
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					display: { xs: "block", sm: "none" },
					backgroundColor: "#1565c0",
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
						sunywebdev
					</Typography>
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
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: "90vw",
							maxHeight: "95vh",
							my: 2,
							mx: 2,
							borderRadius: 7,
						},
						px: 3,
					}}>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
							px: 3,
							maxHeight: "95vh",
							my: 2,
							ml: 2,
						},
					}}
					open>
					{drawer}
				</Drawer>
			</Box>
			<Outlet></Outlet>
		</Box>
	);
}

Navbar.propTypes = {
	window: PropTypes.func,
};

export default Navbar;
