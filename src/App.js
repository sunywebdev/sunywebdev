import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound404 from "./Pages/NotFound404/NotFound404";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import DashBoard from "./Admin/Shared/DashBoard/DashBoard";
import AddProjects from "./Admin/AddProjects/AddProjects";
import AllReviews from "./Admin/AllReviews/AllReviews";
import AllProjects from "./Admin/AllProjects/AllProjects";
import AllMails from "./Admin/AllMails/AllMails";
/* import AddReview from "./Pages/AddReview/AddReview";
import Reviews from "./Pages/Reviews/Reviews";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact"; */
import SingleProject from "./Pages/Portfolio/SingleProject";
import AuthProvider from "./context/AuthProvider";
import Login from "./Shared/Login/Login";
import AdminRoute from "./AdminRoute/AdminRoute";
import EditProject from "./Admin/EditProject/EditProject";
import AOS from "aos";
import "aos/dist/aos.css";
import ResetPass from "./Shared/Login/ResetPass";
import Particle from "./Shared/Particle";
import React from "react";
import HomePage from "./Pages/HomePage";

AOS.init();

function App() {
	const [poojects, setProjects] = React.useState(null);
	React.useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_API}/projects`)
			.then((res) => res.json())
			.then((data) => setProjects(data));
	}, []);
	React.useEffect(() => {
		let timerId = setTimeout(() => {
			if (!poojects) {
				fetch(`${process.env.REACT_APP_SERVER_API}/projects`)
					.then((res) => res.json())
					.then((data) => setProjects(data));
			}
		}, 5000);
		// Clear the timeout when the component unmounts
		return () => clearTimeout(timerId);
	}, [poojects]);

	return (
		<div className='App'>
			<AuthProvider>
				<BrowserRouter>
					<Particle />
					<Routes>
						<Route path='/' element={<Navbar />}>
							<Route exact path='/' element={<HomePage />} />
							{/* <Route path='/home' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/portfolio' element={<Portfolio />} />
							<Route path='/reviews' element={<Reviews />} />
							<Route path='/blogs' element={<Blogs />} />
							<Route path='/reviews/addreview' element={<AddReview />} />
							<Route path='/contact' element={<Contact />} /> */}
							<Route path='/portfolio/:id' element={<SingleProject />} />
							<Route path='/login' element={<Login />} />
							<Route path='/resetpassword' element={<ResetPass />} />
							<Route path='*' element={<NotFound404 />} />
						</Route>
						<Route
							path='/dashboard'
							element={
								<AdminRoute>
									<DashBoard />
								</AdminRoute>
							}>
							<Route exact path='/dashboard' element={<AllProjects />} />
							<Route path='/dashboard/:id' element={<EditProject />} />
							<Route path='/dashboard/allmails' element={<AllMails />} />
							<Route path='/dashboard/allreviews' element={<AllReviews />} />
							<Route path='/dashboard/addprojects' element={<AddProjects />} />
						</Route>{" "}
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
