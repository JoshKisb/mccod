import React from "react";

const CertificationSection = () => {
	return (
		<div className="form-section">
			<h3>I hereby certify that (tick as appropriate):</h3>
			<div className="grid-container">
				<div className="grid-item section-subtitle">
					I attended the deceased before death
				</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="attendedBeforeDeath"
						name="attendedBeforeDeath"
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">
					I examined the body after death
				</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="examinedAfterDeath"
						name="examinedAfterDeath"
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">
					I conducted the post mortem of the body
				</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="conductedPostMortem"
						name="conductedPostMortem"
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">Other (specify)</div>
				<div className="grid-item-full">
					<input
						type="text"
						id="otherSpecify"
						name="otherSpecify"
						value="Unde aut ea magnam n"
					/>
				</div>

				<div className="grid-item section-subtitle">Examined By</div>
				<div className="grid-item-full">
					<input
						type="text"
						id="examinedBy"
						name="examinedBy"
						value="Eos libero laboris"
					/>
				</div>

				<div className="grid-item-full">
					<input type="submit" value="Submit" />
				</div>
			</div>
		</div>
	);
};

export default CertificationSection;