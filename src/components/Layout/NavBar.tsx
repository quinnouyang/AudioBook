import { Box, Flex, Button, Stack, Spacer, Heading } from "@chakra-ui/react";
import CTAButton from "../Home/CTAButton";
import CombinedLink from "../Utilities/CombinedLink";
export default function NavBar() {
	return (
		<Box>
			<Flex py={[4, 8]} px={[6, 12]} align={"center"}>
				<CombinedLink href="/#">
					<Heading>LOGO</Heading>
				</CombinedLink>
				<Spacer />
				<CTAButton />
			</Flex>
		</Box>
	);
}
