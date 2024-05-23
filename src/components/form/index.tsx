import React from "react";
import InfoSection from "./InfoSection";
import FrameASection from "./FrameASection";
import FrameBSection from "./FrameBSection";
import MannerOfDeathSection from "./MannerOfDeathSection";
import InfantDeathSection from "./InfantDeathSection";
import WomenSection from "./WomenSection";
import CertificationSection from "./CertificationSection";

const Form = () => {
	return (
		<form>
			{/* Identification Information */}
			<InfoSection />

			{/* Frame A: Medical Data, Part 1 and 2 */}
			<FrameASection />

			{/* Frame B: Other Medical Data */}
			<FrameBSection />

			{/* Manner of Death */}
			<MannerOfDeathSection />

			{/* Fatal or Infant Death */}
			<InfantDeathSection />

			{/* For Women */}
			<WomenSection />

			{/* Certifying Staff */}
			<CertificationSection />
		</form>
	);
};

export default Form;