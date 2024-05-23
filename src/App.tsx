import React from "react";
import { DataQuery, useDataQuery } from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
// import classes from "./App.module.css";
import { Button } from "@dhis2/ui";
import Form from "./components/form";

const query = {
	me: {
		resource: "me",
	},
};

interface MyAppProps {}

const MyApp: React.FC<MyAppProps> = () => {
	const { loading, error, data } = useDataQuery(query);

	if (error) {
		return <span>ERROR: {error.message}</span>;
	}

	if (loading) {
		return <span>Loading...</span>;
	}

	return (
		<div>
			<>
				<Form />
			</>
		</div>
	);
};

export default MyApp;
