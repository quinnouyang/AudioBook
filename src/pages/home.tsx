import { Text, Code, List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Home/Hero";
import { Container } from "../components/Layout/Container";
import { Main } from "../components/Layout/Main";
import { DarkModeSwitch } from "../components/Utilities/DarkModeSwitch";
import { CTA } from "../components/Home/CTA";
import Footer from "../components/Layout/Footer";
import CombinedLink from "../components/Utilities/CombinedLink";
import PageWrapper from "../components/Layout/PageWrapper";

export default function Home() {
	return (
		<PageWrapper>
			<Container height="100vh">
				<Hero />
				<Main>
					<Text color="text">
						Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>{" "}
						+ <Code>TypeScript</Code>.
					</Text>

					<List spacing={3} my={0} color="text">
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="green.500" />
							<CombinedLink
								isExternal
								href="https://chakra-ui.com"
								flexGrow={1}
								mr={2}
							>
								Chakra UI <LinkIcon />
							</CombinedLink>
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="green.500" />
							<CombinedLink
								isExternal
								href="https://nextjs.org"
								flexGrow={1}
								mr={2}
							>
								Next.js <LinkIcon />
							</CombinedLink>
						</ListItem>
					</List>
				</Main>

				<DarkModeSwitch />
				<Footer />
				<CTA />
			</Container>
		</PageWrapper>
	);
}
