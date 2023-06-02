import React from "react";
import SubscribeForm from "./SubscribeForm";
import myImg from "../Sandy_Gen-01_Single-03.jpg";

const Window = () => {
	return (
		<div className="wrapper">
			<div className="left-hand-side">
				<h1>Stay Updated!</h1>
				<p className="first-p">
					{" "}
					Join 60,000+ product managers receiving monthly updates on:
				</p>
				<div className="features-cont">
					<div className="features">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="64"
							height="64"
							viewBox="0 0 64 64"
						>
							<defs>
								<linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
									<stop offset="0%" stopColor="#FF6A3A" />
									<stop offset="100%" stopColor="#FF527B" />
								</linearGradient>
							</defs>
							<g fill="none">
								<circle cx="32" cy="32" r="32" fill="url(#a)" />
								<path
									stroke="#FFF"
									strokeWidth="4"
									d="m18.286 34.686 8.334 7.98 19.094-18.285"
								/>
							</g>
						</svg>
						<p> Product discovery and building what matters</p>
					</div>
					<div className="features">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="64"
							height="64"
							viewBox="0 0 64 64"
						>
							<defs>
								<linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
									<stop offset="0%" stopColor="#FF6A3A" />
									<stop offset="100%" stopColor="#FF527B" />
								</linearGradient>
							</defs>
							<g fill="none">
								<circle cx="32" cy="32" r="32" fill="url(#a)" />
								<path
									stroke="#FFF"
									strokeWidth="4"
									d="m18.286 34.686 8.334 7.98 19.094-18.285"
								/>
							</g>
						</svg>
						<p>Measuring to ensure updates are a success</p>
					</div>
				</div>
				<SubscribeForm />
			</div>
			<div className="right-hand-side">
				<img src={myImg} alt="myimg" />
			</div>
		</div>
	);
};

export default Window;
