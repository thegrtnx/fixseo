export const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	const day = date.getDate();
	const nth = (d: number) => {
		if (d > 3 && d < 21) return "th";
		switch (d % 10) {
			case 1:
				return "st";
			case 2:
				return "nd";
			case 3:
				return "rd";
			default:
				return "th";
		}
	};
	return date
		.toLocaleDateString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		})
		.replace(/\b(\d+)\b/, `${day}${nth(day)}`);
};

export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

export const sortData = (data: any[], key: string) => {
	return data.sort((a, b) => a[key].localeCompare(b[key]));
};

export const filterData = (data: any[], search: string, keys: string[]) => {
	return data.filter((item) => keys.some((key) => item[key]?.toLowerCase().includes(search.toLowerCase())));
};

// Chip color map based on catalog status
export const statusColorMap: { [key in "ACTIVE" | "DRAFT" | "DISABLED"]: "success" | "warning" | "danger" } = {
	ACTIVE: "success",
	DRAFT: "warning",
	DISABLED: "danger",
};

export const getCurrentYear = () => {
	return new Date().getFullYear();
};
