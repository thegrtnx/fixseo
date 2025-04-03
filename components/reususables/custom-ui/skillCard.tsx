"use client";
import { Mont_Light, Mont_Heavy, cn } from "@/lib";
import { Card, CardHeader, CardBody, CardFooter, Chip, AvatarGroup, Avatar } from "@heroui/react";
import Image from "next/image";
import React from "react";

interface SkillCardProps {
	title: string;
	subtitle: string;
	titleColor?: string;
	category: string;
	imageSrc: string;
	avatars: string[];
	totalAvatars?: number;
	backgroundColor?: string;
	footerColor?: string;
	chipColor?: string;
	chipBgColor?: string;
}

const SkillCard = ({ title, subtitle, category, imageSrc, avatars, totalAvatars = 10, backgroundColor = "bg-primary", footerColor = "bg-[#FFD600]", titleColor = "text-secondary", chipColor = "text-secondary", chipBgColor = "bg-black/30 border border-white/20" }: SkillCardProps) => {
	return (
		<div>
			<Card
				isPressable
				className={`${backgroundColor} rounded-[3em] h-[540px] lg:h-[640px] w-full`}>
				<CardHeader className="px-10 pt-10">
					<Chip
						size="md"
						className={cn("backdrop-blur-md", chipColor, chipBgColor)}>
						{category}
					</Chip>
				</CardHeader>
				<CardBody className="p-10 h-[160px] lg:h-[254px]">
					<div className="max-w-xs lg:max-w-md">
						<h2 className={cn("text-2xl lg:text-4xl font-bold", titleColor, Mont_Light.className)}>{title}</h2>
						<h3 className={cn("text-4xl lg:text-5xl font-bold", titleColor, Mont_Heavy.className)}>{subtitle}</h3>

						<div className="z-50 mt-2">
							<AvatarGroup
								isBordered
								max={4}
								size="sm"
								renderCount={(count) => <p className={cn("text-xs text-secondary font-medium ms-2", titleColor)}>+{count} others</p>}
								total={totalAvatars}>
								{avatars.map((avatar, index) => (
									<Avatar
										key={index}
										src={avatar}
									/>
								))}
							</AvatarGroup>
						</div>
					</div>
				</CardBody>
				<CardFooter className={`rounded-tl-[3em] p-0 rounded-tr-[3em] rounded-bl-none rounded-br-none ${footerColor}`}>
					<Image
						src={imageSrc}
						width={400}
						height={400}
						alt="fixorflex"
						className="m-auto lg:w-[400px] lg:h-[400px] w-[270px] h-[270px]"
					/>
				</CardFooter>
			</Card>
		</div>
	);
};

export default SkillCard;
