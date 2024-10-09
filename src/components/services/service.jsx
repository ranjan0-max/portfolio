import React from "react";

import "./styles/service.css";

const Service = (props) => {
	const { logo, title, description } = props;

	return (
		<React.Fragment>
			<div className="service">
				<div className="service-container">
					<div className="service-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="service-title">{title}</div>
					<div className="service-description">{description}</div>
					<div className="service-link"></div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Service;
