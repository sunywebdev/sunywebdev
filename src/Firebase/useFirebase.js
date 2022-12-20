import { useEffect, useState } from "react";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import initializeAuth from "./firebase.init";
import axios from "axios";
import Swal from "sweetalert2";

initializeAuth();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const [isLoading, setIsloading] = useState(true);
	const [admin, setAdmin] = useState(false);
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	const signInWithEmailPassword = (
		auth,
		email,
		password,
		navigate,
		location,
		setSubmitting,
	) => {
		setIsloading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				setSubmitting(false);
				Swal.fire({
					icon: "success",
					title: "SignIn Successful",
					showConfirmButton: true,
					timer: 3300,
				}).then(function () {
					const destination = location?.state?.from || "/";
					navigate(destination);
				});
			})
			.catch((error) => {
				setSubmitting(false);
				const errorMessage = error.message;
				setError(errorMessage);
				Swal.fire({
					icon: "error",
					title: errorMessage,
					showConfirmButton: true,
					timer: 3300,
				});
			})
			.finally(() => setIsloading(false));
	};
	const resetPassword = (auth, email, navigate, location, setSubmitting) => {
		sendPasswordResetEmail(auth, email)
			.then(() => {
				setSubmitting(false);
				Swal.fire({
					icon: "success",
					title: "Please Check Your Email Inbox",
					showConfirmButton: true,
					timer: 3300,
				}).then(function () {
					const destination = location?.state?.from || "/login";
					navigate(destination);
				});
			})
			.catch((error) => {
				setSubmitting(false);
				const errorMessage = error.message;
				Swal.fire({
					icon: "error",
					title: errorMessage,
					showConfirmButton: true,
					timer: 3300,
				});
				setError(errorMessage);
			})
			.finally(() => setIsloading(false));
	};

	const signInUsingGoogle = (navigate, location) => {
		setIsloading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result?.user;
				saveOrReplaceUserToDb(
					user?.email,
					user?.displayName,
					user?.photoURL,
					navigate,
					location,
				);
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
			})
			.finally(() => setIsloading(false));
	};

	const saveOrReplaceUserToDb = (
		email,
		displayName,
		photoURL,
		navigate,
		location,
	) => {
		const user = { email, displayName, photoURL };
		axios
			.put(`${process.env.REACT_APP_SERVER_API}/users`, user)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "Login Successfull",
					showConfirmButton: true,
					timer: 2500,
				}).then(function () {
					const destination = location?.state?.from || "/";
					navigate(destination);
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	/*------ to findout user is admin or not---------- */
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_API}/users/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setAdmin(data?.admin));
	}, [user?.email]);

	const logOut = () => {
		setIsloading(true);
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {})
			.finally(() => setIsloading(false));
	};
	useEffect(() => {
		const unSubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				setError("");
			} else {
				setUser({});
			}
			setIsloading(false);
		});
		return () => unSubscribed;
	}, [auth]);
	return {
		auth,
		user,
		error,
		signInUsingGoogle,
		logOut,
		signInWithEmailPassword,
		resetPassword,
		isLoading,
		admin,
	};
};

export default useFirebase;
