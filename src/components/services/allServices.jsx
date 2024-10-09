import React from "react";

import Service from "./service";

import SERVICES from "../../data/services";

import "./styles/allServices.css";

const AllServices = () => {
	return (
		<div className="all-services-container">
			{SERVICES.servicesList.map((service, index) => (
				<div className="all-services-service" key={index}>
					<Service
						logo={service.logo}
						title={service.title}
						description={service.description}
					/>
				</div>
			))}
		</div>
	);
};

export default AllServices;
