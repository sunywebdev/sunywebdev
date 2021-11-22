import { useEffect, useState } from "react";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
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
			.put("https://fast-savannah-56016.herokuapp.com/users", user)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "Login Successfull",
					showConfirmButton: false,
					timer: 1500,
				});
				const destination = location?.state?.from || "/";
				navigate(destination);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	/*------ to findout user is admin or not---------- */
	useEffect(() => {
		fetch(`https://fast-savannah-56016.herokuapp.com/users/${user?.email}`)
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
		isLoading,
		admin,
	};
};

export default useFirebase;
