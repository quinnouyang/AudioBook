import { Box, Flex, Spacer, Show } from "@chakra-ui/react";
import FullLogo from "../FullLogo";
import ShortLogo from "../ShortLogo";
import CombinedLink from "../CombinedLink";
import LinkButton from "../LinkButton";

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
				{<LinkButton {...{ link: ctaLink }}>{ctaLabel}</LinkButton>}
			</Flex>
		</Box>
	);
}
