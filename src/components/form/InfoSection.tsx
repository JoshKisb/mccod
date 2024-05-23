import React from "react";
import TextField from "../fields/TextField";
import SelectField from "../fields/SelectField";

const facilities = [
	{
		label: "Nicole Medical Clinic",
		value: "Nicole Medical Clinic",
	},
];

const InfoSection = () => {
	return (
		<div className="form-section">
			<div className="form-group">
				<SelectField
					label="Facility:"
					name="facility"
					options={facilities}
				/>
			</div>
			<div className="form-group half-width">
				<TextField label="National Case Number" name="nationalCaseNumber" />
			</div>
			<div className="form-group half-width">
				<TextField label="InPatient Number" name="inPatientNumber" />
			</div>
			<div className="form-group half-width">
				<label htmlFor="nin">NIN</label>
				<input
					type="text"
					id="nin"
					name="nin"
					value="Veniam eum vero con"
				/>
			</div>
			<div className="form-group half-width">
				<label htmlFor="fullName">Name (Full Name)</label>
				<input
					type="text"
					id="fullName"
					name="fullName"
					value="Athena Justice"
				/>
			</div>
			<div className="form-group section-title">
				Place of residence of deceased
			</div>
			<div className="form-group half-width">
				<label htmlFor="region">Region</label>
				<input
					type="text"
					id="region"
					name="region"
					value="Officia qui voluptat"
				/>
			</div>
			<div className="form-group half-width">
				<label htmlFor="occupation">Occupation</label>
				<input
					type="text"
					id="occupation"
					name="occupation"
					value="Amet saepe id labor"
				/>
			</div>
			<div className="form-group half-width">
				<label htmlFor="district">District</label>
				<input
					type="text"
					id="district"
					name="district"
					value="Culpa consectetur r"
				/>
			</div>
			<div className="form-group half-width inline">
				<label htmlFor="dobKnown">Date of Birth Known?</label>
				<input
					type="checkbox"
					id="dobKnownYes"
					name="dobKnown"
					value="yes"
					checked
				/>{" "}
				Yes
				<input
					type="checkbox"
					id="dobKnownNo"
					name="dobKnown"
					value="no"
				/>{" "}
				No
			</div>
			<div className="form-group half-width">
				<label htmlFor="county">County</label>
				<input
					type="text"
					id="county"
					name="county"
					value="Voluptatem rerum cul"
				/>
			</div>
			<div className="form-group half-width">
				<label htmlFor="dateOfBirth">Date of Birth</label>
				<input
					type="date"
					id="dateOfBirth"
					name="dateOfBirth"
					value="2000-12-27"
				/>
			</div>
			<div className="form-group half-width">
				<label htmlFor="subCounty">Sub-County</label>
				<input
					type="text"
					id="subCounty"
					name="subCounty"
					value="Ea eos eu non bland"
				/>
			</div>
			<div className="form-group half-width">
				<label htmlFor="age">Age</label>
				<div className="form-group quarter-width">
					<label htmlFor="ageYears">Years</label>
					<input
						type="number"
						id="ageYears"
						name="ageYears"
						value="2017"
					/>
				</div>
				<div className="form-group quarter-width">
					<label htmlFor="ageMonths">Months</label>
					<input type="number" id="ageMonths" name="ageMonths" value="2" />
				</div>
				<div className="form-group quarter-width">
					<label htmlFor="ageDays">Days</label>
					<input type="number" id="ageDays" name="ageDays" value="18" />
				</div>
				<div className="form-group quarter-width">
					<label htmlFor="ageHours">Hours</label>
					<input type="number" id="ageHours" name="ageHours" />
				</div>
				<div className="form-group quarter-width">
					<label htmlFor="ageMinutes">Minutes</label>
					<input type="number" id="ageMinutes" name="ageMinutes" />
				</div>
			</div>
			<div className="form-group half-width">
				<label htmlFor="village">Village</label>
				<input
					type="text"
					id="village"
					name="village"
					value="Perferendis consecte"
				/>
			</div>
			<div className="form-group half-width">
				<label htmlFor="sex">Sex</label>
				<select id="sex" name="sex">
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>
			</div>
			<div className="form-group half-width">
				<label htmlFor="placeOfDeath">Place of Death</label>
				<input
					type="text"
					id="placeOfDeath"
					name="placeOfDeath"
					value="Voluptatem est volu"
				/>
			</div>
			<div className="form-group half-width">
				<label htmlFor="dateTimeOfDeath">Date and Time of Death</label>
				<input
					type="datetime-local"
					id="dateTimeOfDeath"
					name="dateTimeOfDeath"
					value="2017-11-16T00:00"
				/>
			</div>
		</div>
	);
};

export default InfoSection;
