import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import NotFound404 from "./Pages/NotFound404/NotFound404";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import DashBoard from "./Admin/Shared/DashBoard/DashBoard";
import AddProjects from "./Admin/AddProjects/AddProjects";
import AllReviews from "./Admin/AllReviews/AllReviews";
import AllProjects from "./Admin/AllProjects/AllProjects";
import AllMails from "./Admin/AllMails/AllMails";
import AllUsers from "./Admin/AllUsers/AllUsers";
import AddReview from "./Pages/AddReview/AddReview";
import Reviews from "./Pages/Reviews/Reviews";
import Home from "./Pages/Home/Home";
import AuthProvider from "./context/AuthProvider";
import Login from "./Shared/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import LoginAdmin from "./Shared/Login/LoginAdmin";
import EditProject from "./Admin/EditProject/EditProject";

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Navbar />}>
							<Route exact path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/portfolio' element={<Portfolio />} />
							<Route path='/reviews' element={<Reviews />} />
							<Route
								path='/reviews/addreview'
								element={
									<PrivateRoute>
										<AddReview />
									</PrivateRoute>
								}
							/>
							<Route path='/contact' element={<Contact />} />
							<Route path='/login' element={<Login />} />
						</Route>
						<Route
							path='/dashboard'
							element={
								<AdminRoute>
									<DashBoard />
								</AdminRoute>
							}>
							<Route exact path='/dashboard' element={<AllUsers />} />
							<Route path='/dashboard/:id' element={<EditProject />} />
							<Route path='/dashboard/allmails' element={<AllMails />} />
							<Route path='/dashboard/allprojects' element={<AllProjects />} />
							<Route path='/dashboard/allreviews' element={<AllReviews />} />
							<Route path='/dashboard/addprojects' element={<AddProjects />} />
						</Route>{" "}
						<Route path='/adminLogin' element={<LoginAdmin />} />
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
