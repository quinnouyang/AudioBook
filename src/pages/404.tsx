import { Container, Heading } from "@chakra-ui/layout";
import PageWrapper from "../components/Layout/PageWrapper";
import CombinedLink from "../components/CombinedLink";

export default function ErrorPage() {
	return (
		<PageWrapper
			{...{
				title: "404 Error",
				ctaLabel: "Get Started",
				ctaLink: "/getting-started",
			}}
		>
			<Container>
				<Heading>o shit</Heading>
				<CombinedLink href="/">
					<Heading>go home</Heading>
				</CombinedLink>
			</Container>
		</PageWrapper>
	);
}
