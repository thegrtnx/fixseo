"use client";
import React, { useEffect, useState } from "react";
import { SkillCard } from "@/components/reususables";
import { Mont_Light, Mont_Heavy, cn } from "@/lib";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { BlurFade } from "@/components/magicui";
import Link from "next/link";

const HomeView = () => {
	const [currentCard, setCurrentCard] = useState(0);

	const skillCards = [
		{
			title: "Hire a",
			subtitle: "Plumber",
			category: "Artisans",
			imageSrc: "/images/1.svg",
			avatars: ["https://i.pravatar.cc/150?u=a042581f4e29026024d", "https://i.pravatar.cc/150?u=a04258a2462d826712d", "https://i.pravatar.cc/150?u=a042581f4e29026704d", "https://i.pravatar.cc/150?u=a04258114e29026302d", "https://i.pravatar.cc/150?u=a04258114e29026702d", "https://i.pravatar.cc/150?u=a04258114e29026708c"],
		},
		{
			title: "Hire a",
			subtitle: "Copywriter",
			titleColor: "text-black",
			chipColor: "text-black",
			chipBgColor: "bg-white/30 border border-black/20",
			backgroundColor: "bg-[#efefef]",
			category: "Freelancers",
			imageSrc: "/images/2.svg",
			totalAvatars: 100,
			footerColor: "bg-[#8630F4]",
			avatars: ["https://i.pravatar.cc/150?u=a042581f4e29026024d", "https://i.pravatar.cc/150?u=a04258a2462d826712d", "https://i.pravatar.cc/150?u=a042581f4e29026704d", "https://i.pravatar.cc/150?u=a04258114e29026302d", "https://i.pravatar.cc/150?u=a04258114e29026702d", "https://i.pravatar.cc/150?u=a04258114e29026708c"],
		},
		{
			title: "Hire a",
			subtitle: "Developer",
			category: "Software",
			imageSrc: "/images/4.svg",
			totalAvatars: 300,
			avatars: ["https://i.pravatar.cc/150?u=a042581f4e29026024d", "https://i.pravatar.cc/150?u=a04258a2462d826712d", "https://i.pravatar.cc/150?u=a042581f4e29026704d", "https://i.pravatar.cc/150?u=a04258114e29026302d", "https://i.pravatar.cc/150?u=a04258114e29026702d", "https://i.pravatar.cc/150?u=a04258114e29026708c"],
		},
		{
			title: "Hire a",
			subtitle: "Painter",
			titleColor: "text-black",
			chipColor: "text-black",
			chipBgColor: "bg-white/30 border border-black/20",
			backgroundColor: "bg-[#efefef]",
			category: "Artisan",
			imageSrc: "/images/3.svg",
			totalAvatars: 100,
			footerColor: "bg-[#8630F4]",
			avatars: ["https://i.pravatar.cc/150?u=a042581f4e29026024d", "https://i.pravatar.cc/150?u=a04258a2462d826712d", "https://i.pravatar.cc/150?u=a042581f4e29026704d", "https://i.pravatar.cc/150?u=a04258114e29026302d", "https://i.pravatar.cc/150?u=a04258114e29026702d", "https://i.pravatar.cc/150?u=a04258114e29026708c"],
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentCard((prev) => (prev === skillCards.length - 1 ? 0 : prev + 1));
		}, 5000); // Switch every 5 seconds

		return () => clearInterval(timer);
	}, [skillCards.length]);

	const mobileCards = skillCards.map((card, index) => (
		<div
			key={index}
			className={`transition-opacity duration-500 ${currentCard === index ? "opacity-100" : "opacity-0"}`}
			style={{ position: "absolute", width: "100%" }}>
			<SkillCard {...card} />
		</div>
	));

	return (
		<>
			<div className="md:min-h-screen bg-[url('/images/bg.svg')] bg-cover bg-center">
				<div className="p-5 pt-10 lg:p-24 animate-blur-in ">
					<div className="max-w-xs lg:max-w-2xl">
						<h1 className={cn("text-3xl lg:text-5xl lg:leading-tight font-bold", Mont_Light.className)}>
							Join FixorFlex <span className={cn("lg:text-5xl", Mont_Heavy.className)}>- Connect with Skilled Professionals</span>
						</h1>
						<p className="text-xs lg:text-base text-muted-foreground">Find verified professionals or earn by sharing your skills</p>
					</div>

					<div className="relative mt-8 lg:mt-16 overflow-hidden">
						{/* Left Fade Effect */}
						<div className="pointer-events-none absolute inset-y-0 left-0 w-[2.5%] bg-gradient-to-r from-white z-10"></div>

						{/* Mobile Cards */}
						<div className="relative block lg:hidden min-h-[580px]">{mobileCards}</div>

						{/* Desktop Marquee */}
						<Marquee
							autoFill
							pauseOnHover
							gradient={true}>
							<div className="gap-10 p-10 hidden lg:flex">
								{skillCards.map((card, index) => (
									<SkillCard
										key={index}
										{...card}
									/>
								))}
							</div>
						</Marquee>

						{/* Right Fade Effect */}
						<div className="pointer-events-none absolute inset-y-0 right-0 w-[2.5%] bg-gradient-to-l from-white z-10"></div>
					</div>
				</div>
			</div>

			<div className="p-2 lg:p-5 mx-auto w-[85%]">
				<BlurFade
					delay={0.25}
					inView>
					<hr className="border-t-8 border-dashed border-gray-200 my-10" />
					<div>
						<div>
							<h3 className={cn("text-2xl leading-loose lg:text-6xl lg:leading-relaxed lg:w-[78%] font-bold text-black", Mont_Light.className)}>
								Whether you need experts for <span className={cn("font-bold text-primary", Mont_Heavy.className)}>Fix</span>es <span className="text-muted-foreground ">or </span> want to <span className={cn("font-bold text-primary", Mont_Heavy.className)}>Flex</span> your skills and earn? We make it easy. Ready to give it a try?{" "}
							</h3>
						</div>

						<div className="flex gap-4 mt-4">
							<Link href="#">
								<Image
									src="/images/google.svg"
									alt="hero"
									width={230}
									height={150}
									className="w-[120px] h-[50px] lg:w-[230px] lg:h-[150px]"
								/>
							</Link>

							<Link href="#">
								<Image
									src="/images/apple.svg"
									alt="hero"
									width={230}
									height={150}
									className="w-[120px] h-[50px] lg:w-[230px] lg:h-[150px]"
								/>
							</Link>
						</div>
					</div>

					<hr className="border-t-8 border-dashed border-gray-200 my-10" />
				</BlurFade>
			</div>

			<div className="rounded-3xl py-24 p-24 w-[85%] mx-auto bg-[url('/images/bg2.svg')] bg-cover bg-primary/90 bg-center"></div>
		</>
	);
};

export default HomeView;
