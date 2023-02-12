import React from "react";
import Particles from "react-tsparticles";
import express from "./logos/express.png";
import github from "./logos/github.png";
import mongodb from "./logos/mongodb.png";
import node from "./logos/node.png";
import react from "./logos/react.png";
import vscode from "./logos/vscode.png";

const Particle = () => {
	const images = [
		{ img: express },
		{ img: github },
		{ img: mongodb },
		{ img: node },
		{ img: react },
		{ img: vscode },
	];
	return (
		<div>
			<Particles
				id='tsparticles'
				style={{ opacity: "20%" }}
				params={{
					particles: {
						number: {
							value: 25,
							density: {
								enable: true,
								value_area: 1000,
							},
						},
						line_linked: {
							enable: false,
						},
						move: {
							enable: true,
							speed: 0.7,
							out_mode: "out",
						},
						shape: {
							type: ["images"],
							images: images?.map((img) => ({
								src: `${img?.img}`,
								height: 5,
								width: 5,
							})),
						},
						color: {
							value: "#000000",
						},
						size: {
							value: 35,
							random: false,
							anim: {
								enable: true,
								speed: 0.5,
								size_min: 9,
								sync: true,
							},
						},
					},
					retina_detect: false,
				}}
			/>
		</div>
	);
};

export default Particle;
