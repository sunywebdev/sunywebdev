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
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeIcon from "@mui/icons-material/Home";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import useAuth from "../../../context/useAuth";
import DashboardIcon from "@mui/icons-material/Dashboard";
import image from "../../Home/Shoyeb Mohammed Suny.png";

const drawerWidth = 190;

function Navbar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const { admin } = useAuth();

	const drawer = (
		<Box
			sx={{
				m: "auto",
				textAlign: "center",
				"& .css-bshv44-MuiButtonBase-root-MuiListItem-root": {
					borderRadius: 4,
					transitionDuration: "0.2s",
				},
				"& .css-bshv44-MuiButtonBase-root-MuiListItem-root:hover": {
					backgroundColor: "#9D69E5",
					boxShadow: "3px 3px 7px -2px #000000",
				},
			}}>
			<Box
				container
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{
					my: 2,
					display: { md: "none", xs: "block" },
				}}>
				<img
					style={{
						width: "150px",
						height: "150px",
						borderRadius: "50%",
						border: "5px solid white",
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
				<Link
					style={{
						textDecoration: "none",
						color: "white",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='/'>
					<ListItem button>
						<HomeIcon
							sx={{ color: "white", mr: 1.5, my: 0.7 }}
							fontSize='medium'
						/>
						Home
					</ListItem>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						color: "white",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='about'>
					<ListItem button>
						<PersonOutlineIcon
							sx={{ color: "white", mr: 1.5, my: 0.7 }}
							fontSize='medium'
						/>
						About
					</ListItem>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						color: "white",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='portfolio'>
					<ListItem button>
						<LaptopChromebookIcon
							sx={{ color: "white", mr: 1.5, my: 0.7 }}
							fontSize='medium'
						/>
						Portfolio
					</ListItem>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						color: "white",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='reviews'>
					<ListItem button>
						<ReviewsOutlinedIcon
							sx={{ color: "white", mr: 1.5, my: 0.7 }}
							fontSize='medium'
						/>
						Reviews
					</ListItem>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						color: "white",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='blogs'>
					<ListItem button>
						<RssFeedIcon
							sx={{ color: "white", mr: 1.5, my: 0.7 }}
							fontSize='medium'
						/>
						Blogs
					</ListItem>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						color: "white",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='contact'>
					<ListItem button>
						<ContactPageIcon
							sx={{ color: "white", mr: 1.5, my: 0.7 }}
							fontSize='medium'
						/>
						Contact
					</ListItem>
				</Link>
				{admin && (
					<Link
						style={{
							textDecoration: "none",
							color: "white",
							fontWeight: "bold",
							fontSize: "15px",
						}}
						to='/dashboard'>
						<ListItem button>
							<DashboardIcon
								sx={{ color: "white", mr: 1.5, my: 0.7 }}
								fontSize='medium'
							/>
							Dashboard
						</ListItem>
					</Link>
				)}
			</Box>
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
					backgroundColor: "#8444DF",
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
							width: "92%",
							height: "96.5%",
							m: 2,
							borderRadius: 7,
							backgroundColor: "#8444DF",
							color: "white",
						},
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
							backgroundColor: "#8444DF",
							color: "white",
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
