import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Container, Stack, Text } from "@chakra-ui/react";
import ShortLogo from "../ShortLogo";
import CombinedLink from "../Utilities/CombinedLink";

export default function Footer() {
	return (
		<Container as={Stack} maxW={"6xl"} py={4} spacing={4} align={"center"}>
			<CombinedLink href="/#">
				<ShortLogo height={32} />
			</CombinedLink>
			<Stack direction={"row"} spacing={"1em"}>
				<Text>What is Copyright © 2023?</Text>
				<Text></Text>
				<CombinedLink
					href="https://github.com/quinnouyang/music-ereader-app"
					isExternal
				>
					GitHub <ExternalLinkIcon mb={1} />
				</CombinedLink>
			</Stack>
		</Container>
	);
}
