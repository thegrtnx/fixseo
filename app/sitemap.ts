import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://fixorflex.com",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
			images: ["https://fixorflex.com/images/og.png"],
		},
	];
}
