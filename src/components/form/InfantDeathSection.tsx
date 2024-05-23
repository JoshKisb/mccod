import React from "react";

const InfantDeathSection = () => {
	return (
		<div className="form-section">
			<h3>Fatal or infant death</h3>
			<div className="grid-container">
				<div className="grid-item section-subtitle">Multiple pregnancy</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="multiplePregnancy"
						name="multiplePregnancy"
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">Stillborn?</div>
				<div className="grid-item-full">
					<input type="checkbox" id="stillborn" name="stillborn" /> Yes
				</div>

				<div className="grid-item section-subtitle">
					If death within 24 hrs specify the number of hours survived
				</div>
				<div className="grid-item-full">
					<input
						type="number"
						id="hoursSurvived"
						name="hoursSurvived"
						value="854"
					/>
				</div>

				<div className="grid-item section-subtitle">
					Birth weight (in grams)
				</div>
				<div className="grid-item-full">
					<input
						type="number"
						id="birthWeight"
						name="birthWeight"
						value="Rerum fugiat quidem"
					/>
				</div>

				<div className="grid-item section-subtitle">
					Number of completed weeks of pregnancy
				</div>
				<div className="grid-item-full">
					<input
						type="number"
						id="weeksOfPregnancy"
						name="weeksOfPregnancy"
						value="436"
					/>
				</div>

				<div className="grid-item section-subtitle">
					Age of mother (years)
				</div>
				<div className="grid-item-full">
					<input
						type="number"
						id="ageOfMother"
						name="ageOfMother"
						value="2005"
					/>
				</div>

				<div className="grid-item section-subtitle">
					If the death was perinatal, please state conditions of mother
					that affected the fetus and newborn
				</div>
				<div className="grid-item-full">
					<textarea id="conditionsOfMother" name="conditionsOfMother">
						Repudiandae ipsam qu
					</textarea>
				</div>
			</div>
		</div>
	);
};

export default InfantDeathSection;