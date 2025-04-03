import React from "react";
import FuzzyText from "@/components/ui/reactBit/fuzzy";

const notFound = () => {
	return (
		<FuzzyText
			baseIntensity={0.2}
			hoverIntensity={0.2}
			enableHover={false}>
			404
		</FuzzyText>
	);
};

export default notFound;
