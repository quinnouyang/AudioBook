import { Container, Heading } from "@chakra-ui/layout";
import PageWrapper from "../components/Layout/PageWrapper";
import CombinedLink from "../components/Utilities/CombinedLink";

export default function ErrorPage() {
	return (
		<PageWrapper {...{ title: "404 Error" }}>
			<Container>
				<Heading>o shit</Heading>
				<CombinedLink href="/">
					<Heading>go home</Heading>
				</CombinedLink>
			</Container>
		</PageWrapper>
	);
}
