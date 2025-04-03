"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
	children: ReactNode;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	// Convert children to array of nodes/strings
	const childrenArray = Array.isArray(children) ? children : [children];
	const elements: ReactNode[] = [];

	childrenArray.forEach((child) => {
		if (typeof child === "string") {
			// Split strings into words
			const words = child.split(" ");
			elements.push(...words);
		} else {
			// Keep non-string elements intact
			elements.push(child);
		}
	});

	// Filter out empty strings
	const filteredElements = elements.filter((element) => (typeof element === "string" ? element.trim().length > 0 : true));

	return (
		<div
			ref={targetRef}
			className={cn("relative z-0", className)}>
			<div className={"mx-auto flex max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"}>
				<span className="text-6xl leading-relaxed w-[80%] font-bold text-black/20 dark:text-white/20">
					{filteredElements.map((element, i) => {
						const start = i / filteredElements.length;
						const end = start + 1 / filteredElements.length;
						return (
							<Word
								key={i}
								progress={scrollYProgress}
								range={[start, end]}>
								{element}
							</Word>
						);
					})}
				</span>
			</div>
		</div>
	);
};

interface WordProps {
	children: ReactNode;
	progress: MotionValue<number>;
	range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span className="xl:lg-3 relative mx-1 lg:mx-1.5">
			<span className="absolute opacity-30">{children}</span>
			<motion.span
				style={{ opacity: opacity }}
				className={"text-black dark:text-white"}>
				{children}
			</motion.span>
		</span>
	);
};
