import React from "react";

const FrameB = () => {
	return (
		<div className="form-section">
			<h3>Frame B: Other Medical Data</h3>
			<div className="grid-container">
				<div className="grid-item section-subtitle">
					Was surgery performed within the last 4 weeks?
				</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="surgeryPerformed"
						name="surgeryPerformed"
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">
					If yes please specify date of surgery
				</div>
				<div className="grid-item-full">
					<input
						type="date"
						id="dateOfSurgery"
						name="dateOfSurgery"
						value="1984-04-07"
					/>
				</div>

				<div className="grid-item section-subtitle">
					If yes please specify reason for surgery (disease or condition)
				</div>
				<div className="grid-item-full">
					<input
						type="text"
						id="reasonForSurgery"
						name="reasonForSurgery"
						value="Veniam facilis labo"
					/>
				</div>

				<div className="grid-item section-subtitle">
					Was an autopsy requested?
				</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="autopsyRequested"
						name="autopsyRequested"
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">
					If yes were the findings used in certification?
				</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="autopsyFindingsUsed"
						name="autopsyFindingsUsed"
					/>{" "}
					Yes
				</div>
			</div>
		</div>
	);
};

export default FrameB;