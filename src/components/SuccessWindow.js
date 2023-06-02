import React from "react";
import { Link, useLocation } from "react-router-dom";

const SuccessWindow = (props) => {
	const { state } = useLocation();
	const { email } = state;
	return (
		<div className="wrapper-success">
			<div className="left-hand-side-succ">
				<h1>Thanks For Subscribing</h1>
				<p className="first-p">
					A confirmation email has been sent to{" "}
					<span className="recieved-email bold">" {email} " </span>
					Please open it and click the button inside to confirm your
					subscription
				</p>{" "}
				<Link to={"/"} className="btn" type="submit">
					Dismiss Message
				</Link>
			</div>
			<div className="right-hand-side-succ">
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
			</div>
		</div>
	);
};

export default SuccessWindow;
