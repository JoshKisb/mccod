import React from "react";
import { SingleSelectField, SingleSelectOption } from "@dhis2/ui";

interface Option {
	label: string;
	value: string;
}

interface SelectFieldProps {
	name: string;
	label?: string;
	options: Option[];
	value?: string;
	onChange?: (value: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
	name,
	options,
	value,
	label,
	onChange,
}) => {
	const handleChange = (v) => {
		console.log("val", v);
	};

	return (
		<SingleSelectField label={label} onChange={handleChange}>
			{options.map((option) => (
				<SingleSelectOption label={option.label} value={option.value} />
			))}
		</SingleSelectField>
	);
};

export default SelectField;
