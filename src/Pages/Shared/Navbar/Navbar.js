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
import { Outlet, useLocation, Link as DomLink } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeIcon from "@mui/icons-material/Home";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
/* import RssFeedIcon from "@mui/icons-material/RssFeed"; */
import useAuth from "../../../context/useAuth";
import DashboardIcon from "@mui/icons-material/Dashboard";
import image from "../../Home/Shoyeb Mohammed Suny.png";
import ThemeChanger from "../../../Shared/Login/ThemeChanger";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Link } from "react-scroll";

const drawerWidth = 190;

function Navbar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const { admin } = useAuth();
	const location = useLocation();

	const drawer = (
		<>
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
					<Typography
						variant='body'
						component='div'
						sx={{ fontWeight: "bold" }}>
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
						activeClass='activeButton'
						className='color-theme'
						style={{
							textDecoration: "none",
							fontWeight: "bold",
							fontSize: "15px",
						}}
						smooth
						spy
						to='home'>
						<ListItem button>
							<HomeIcon sx={{ mr: 1.5, my: 0.7 }} fontSize='medium' />
							Home
						</ListItem>
					</Link>
					<Link
						activeClass='activeButton'
						className='color-theme'
						style={{
							textDecoration: "none",
							fontWeight: "bold",
							fontSize: "15px",
						}}
						smooth
						spy
						to='about'>
						<ListItem button>
							<PersonOutlineIcon sx={{ mr: 1.5, my: 0.7 }} fontSize='medium' />
							About
						</ListItem>
					</Link>
					<Link
						activeClass='activeButton'
						className='color-theme'
						style={{
							textDecoration: "none",
							fontWeight: "bold",
							fontSize: "15px",
						}}
						smooth
						spy
						to='skills'>
						<ListItem button>
							<EngineeringIcon sx={{ mr: 1.5, my: 0.7 }} fontSize='medium' />
							Skills
						</ListItem>
					</Link>

					<Link
						activeClass='activeButton'
						className='color-theme'
						style={{
							textDecoration: "none",
							fontWeight: "bold",
							fontSize: "15px",
						}}
						smooth
						spy
						to='portfolio'>
						<ListItem button>
							<LaptopChromebookIcon
								sx={{ mr: 1.5, my: 0.7 }}
								fontSize='medium'
							/>
							Portfolio
						</ListItem>
					</Link>

					<Link
						activeClass='activeButton'
						className='color-theme'
						style={{
							textDecoration: "none",
							fontWeight: "bold",
							fontSize: "15px",
						}}
						smooth
						spy
						to='reviews'>
						<ListItem button>
							<ReviewsOutlinedIcon
								sx={{ mr: 1.5, my: 0.7 }}
								fontSize='medium'
							/>
							Reviews
						</ListItem>
					</Link>
					{/* 				<Link
						className='color-theme'
						style={{
							textDecoration: "none",
							fontWeight: "bold",
							fontSize: "15px",
						}}
						to='blogs'>
						<ListItem button>
							<RssFeedIcon sx={{ mr: 1.5, my: 0.7 }} fontSize='medium' />
							Blogs
						</ListItem>
					</Link> */}
					<Link
						activeClass='activeButton'
						className='color-theme'
						style={{
							textDecoration: "none",
							fontWeight: "bold",
							fontSize: "15px",
						}}
						smooth
						spy
						to='contact'>
						<ListItem button>
							<ContactPageIcon sx={{ mr: 1.5, my: 0.7 }} fontSize='medium' />
							Contact
						</ListItem>
					</Link>
					{admin && (
						<DomLink
							className='color-theme'
							style={{
								textDecoration: "none",
								fontWeight: "bold",
								fontSize: "15px",
							}}
							to='/dashboard'>
							<ListItem
								button
								className={
									location?.pathname.includes("/dashboard") && "activeButton"
								}>
								<DashboardIcon sx={{ mr: 1.5, my: 0.7 }} fontSize='medium' />
								Dashboard
							</ListItem>
						</DomLink>
					)}
				</Box>
			</Box>
		</>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

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
					<Box
						sx={{ width: "100%" }}
						display='flex'
						justifyContent='space-between'
						alignItems='center'>
						<Typography variant='h6' noWrap component='div'>
							sunywebdev
						</Typography>
						<ThemeChanger />
					</Box>
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
					className='nav2'
					variant='permanent'
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
							backgroundColor: "transparent",
						},
					}}
					open>
					<Box sx={{ pt: 2 }}>
						<ThemeChanger />
					</Box>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}>
				<Outlet></Outlet>
			</Box>
		</Box>
	);
}

Navbar.propTypes = {
	window: PropTypes.func,
};

export default Navbar;
