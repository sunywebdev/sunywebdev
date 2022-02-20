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
				className='demo'
				params={{
					particles: {
						number: {
							value: 33,
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
							speed: 1,
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
							value: 30,
							random: false,
							anim: {
								enable: true,
								speed: 4,
								size_min: 10,
								sync: false,
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
