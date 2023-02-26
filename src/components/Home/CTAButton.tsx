import { Button } from "@chakra-ui/button";
import { Link } from "@chakra-ui/layout";

export default function CTAButton({
	label,
	link,
}: {
	label: string;
	link: string;
}) {
	return (
		<Button
			as={Link}
			size="lg"
			color={"white"}
			bg={"pink.400"}
			href={link}
			_hover={{
				bg: "pink.300",
			}}
			isExternal={label === "Donate ❤️"}
		>
			{label}
		</Button>
	);
}
