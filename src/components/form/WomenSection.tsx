import React from "react";

const WomenSection = () => {
	return (
		<div className="form-section">
			<h3>For women:</h3>
			<div className="grid-container">
				<div className="grid-item section-subtitle">
					Was the deceased pregnant or within 6 weeks of delivery
				</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="pregnantOrWithin6Weeks"
						name="pregnantOrWithin6Weeks"
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">At what point?</div>
				<div className="grid-item-full">
					<input type="text" id="pregnancyPoint" name="pregnancyPoint" />
				</div>

				<div className="grid-item section-subtitle">
					Did the pregnancy contribute to death?
				</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="pregnancyContribute"
						name="pregnancyContribute"
					/>{" "}
					Yes
				</div>

				<div className="grid-item section-subtitle">Parity</div>
				<div className="grid-item-full">
					<input
						type="text"
						id="parity"
						name="parity"
						value="Id magnam dolor est"
					/>
				</div>

				<div className="grid-item section-subtitle">Mode of delivery</div>
				<div className="grid-item-full">
					<input type="text" id="modeOfDelivery" name="modeOfDelivery" />
				</div>

				<div className="grid-item section-subtitle">Place of delivery</div>
				<div className="grid-item-full">
					<input type="text" id="placeOfDelivery" name="placeOfDelivery" />
				</div>

				<div className="grid-item section-subtitle">
					Delivered by skilled attendant
				</div>
				<div className="grid-item-full">
					<input
						type="checkbox"
						id="skilledAttendant"
						name="skilledAttendant"
					/>{" "}
					Yes
				</div>
			</div>
		</div>
	);
};

export default WomenSection;