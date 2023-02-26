import { Box, Flex, Spacer, Show } from "@chakra-ui/react";
import FullLogo from "../FullLogo";
import CTAButton from "../Home/CTAButton";
import ShortLogo from "../ShortLogo";
import CombinedLink from "../Utilities/CombinedLink";

export default function NavBar({
	ctaLabel,
	ctaLink,
}: {
	ctaLabel: string;
	ctaLink: string;
}) {
	return (
		<Box>
			<Flex py={[4, 8]} px={[6, 12]} align={"center"}>
				<CombinedLink href="/#">
					<Show above="md">
						<FullLogo height={36} />
					</Show>
					<Show below="md">
						<ShortLogo height={32} />
					</Show>
				</CombinedLink>
				<Spacer />
				{<CTAButton {...{ label: ctaLabel, link: ctaLink }} />}
			</Flex>
		</Box>
	);
}
