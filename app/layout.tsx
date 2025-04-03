import type { Metadata, Viewport } from "next";
import { MaxWidthWrapper, cn, ThemeProvider, InternetStatus } from "@/lib";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
import "./globals.css";
import { Footer, Header } from "@/components/reususables";
import { DynamicSeo } from "@/utils";

const appColor = "#FF6D00";

export const viewport: Viewport = {
	themeColor: appColor,
	width: "device-width",
	initialScale: 1,
	userScalable: true,
};

export const metadata: Metadata = DynamicSeo(0);

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body className={cn("m-auto min-h-screen bg-background bg-center bg-no-repeat scroll-smooth antialiased")}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					<Header />
					<MaxWidthWrapper>{children}</MaxWidthWrapper>
					<Footer />

					<Toaster
						position="top-right"
						expand={false}
					/>
					<InternetStatus />
					<GoogleAnalytics gaId="" />
					<GoogleTagManager gtmId="" />
				</ThemeProvider>
			</body>
		</html>
	);
}
