import { Button } from "@chakra-ui/button";

export default function CTAButton() {
	return (
		<Button
			as={"a"}
			size="lg"
			color={"white"}
			bg={"pink.400"}
			href={"/viewer"}
			_hover={{
				bg: "pink.300",
			}}
		>
			Get started
		</Button>
	);
}
