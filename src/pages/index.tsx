import { Container, Heading } from "@chakra-ui/layout";
import Hero2 from "../components/Home/Hero2";
import PageWrapper from "../components/Layout/PageWrapper";

export default function HomePage() {
	return (
		<PageWrapper>
			<Hero2 />
			<Container></Container>
		</PageWrapper>
	);
}
