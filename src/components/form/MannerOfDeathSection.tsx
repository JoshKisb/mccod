import React from "react";

const MannerOfDeathSection = () => {
	return (
		<div className="form-section">
			<h3>Manner of Death</h3>
			<div className="grid-container">
				<div className="grid-item section-subtitle">Disease</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="mannerOfDeathDisease"
						name="mannerOfDeathDisease"
						checked
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">Assault</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="mannerOfDeathAssault"
						name="mannerOfDeathAssault"
						checked
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">
					Could not be determined
				</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="mannerOfDeathDetermined"
						name="mannerOfDeathDetermined"
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">Accident</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="mannerOfDeathAccident"
						name="mannerOfDeathAccident"
						checked
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">Legal intervention</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="mannerOfDeathLegal"
						name="mannerOfDeathLegal"
						checked
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">
					Pending investigation
				</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="mannerOfDeathPending"
						name="mannerOfDeathPending"
						checked
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">
					Intentional self-harm
				</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="mannerOfDeathIntentional"
						name="mannerOfDeathIntentional"
						checked
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">War</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="mannerOfDeathWar"
						name="mannerOfDeathWar"
						checked
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">Unknown</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="mannerOfDeathUnknown"
						name="mannerOfDeathUnknown"
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">
					If external cause or poisoning
				</div>
				<div className="grid-item-full">
					<input type="checkbox" id="externalCause" name="externalCause" />{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">Date of injury</div>
				<div className="grid-item-full">
					<input
						type="date"
						id="dateOfInjury"
						name="dateOfInjury"
						value="1974-11-13"
					/>
				</div>

				<div className="grid-item section-subtitle">
					Please describe how external cause occurred (if poisoning please
					specify poisoning agent)
				</div>
				<div className="grid-item-full">
					<textarea
						id="externalCauseDescription"
						name="externalCauseDescription"
					>
						Placeat architecto
					</textarea>
				</div>

				<div className="grid-item section-subtitle">
					Place of occurrence of the external cause
				</div>
				<div className="grid-item-full">
					<input
						type="text"
						id="placeOfOccurrence"
						name="placeOfOccurrence"
						value="Error lorem a assume"
					/>
				</div>
			</div>
		</div>
	);
};

export default MannerOfDeathSection;