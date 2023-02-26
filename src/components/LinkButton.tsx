import { Button, ButtonProps } from "@chakra-ui/button";
import Link from "next/link";
import React from "react";

type LinkButtonProps = {
	children: React.ReactNode;
	link: string;
	data?: string;
	bgColor?: string;
	hoverBgColor?: string;
	props?: ButtonProps;
};

export default function LinkButton({
	children,
	link,
	data,
	bgColor,
	hoverBgColor,
	props,
}: LinkButtonProps) {
	return (
		<Button
			as={Link}
			href={{ pathname: link, query: data }}
			size="lg"
			color={"white"}
			bg={bgColor ?? "pink.400"}
			_hover={{
				bg: hoverBgColor ?? "pink.300",
			}}
			{...props}
		>
			{children}
		</Button>
	);
}
