import { Button, ButtonProps } from "@chakra-ui/button";

type CustomButtomProps = {
	children?: React.ReactNode;
	bgColor?: string;
	hoverBgColor?: string;
	onClick?: () => {};
	props?: ButtonProps;
};

export default function CustomButtom({
	children,
	bgColor,
	hoverBgColor,
	onClick,
	props,
}: CustomButtomProps) {
	return (
		<Button
			size="lg"
			color={"white"}
			bg={bgColor ?? "pink.400"}
			onClick={onClick}
			_hover={{
				bg: hoverBgColor ?? "pink.300",
			}}
			{...props}
		>
			{children}
		</Button>
	);
}
