import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Portfolio from "./Portfolio/Portfolio";
import Reviews from "./Reviews/Reviews";
import Skills from "./Skills/Skills";

const HomePage = () => {
	return (
		<div>
			<Home />
			<About />
			<Skills />
			<Portfolio />
			<Reviews />
			<Contact />
		</div>
	);
};

export default HomePage;
