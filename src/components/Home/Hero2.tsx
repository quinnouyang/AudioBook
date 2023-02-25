import { Heading, Text, Stack, Container, Box } from "@chakra-ui/layout";
import CTAButton from "./CTAButton";

const H1_FONT_SIZE = { base: "4xl", sm: "6xl", lg: "8xl" };
const H2_FONT_SIZE = { base: "1xl", sm: "2xl" };

export default function Hero2() {
	return (
		<Container maxW={["1xl", "2xl", "6xl"]} centerContent py={[16, 24]}>
			<>
				<Heading fontSize={H1_FONT_SIZE}>
					Music for{" "}
					<Text color="pink.400" as="span">
						Reading.
					</Text>
				</Heading>
				<Heading fontSize={H1_FONT_SIZE}>
					Music for{" "}
					<Text color="pink.400" as="span">
						You.
					</Text>
				</Heading>
			</>
			<Box my={[2, 4, 8]} alignItems="center">
				<Text fontSize={H2_FONT_SIZE} align="center">
					Enhance your reading experience with{" "}
					<strong>dynamically generated</strong> music for you and your favorite
					books.
				</Text>
				<Text fontSize={H2_FONT_SIZE} align="center">
					Powered by state-of-the-art Natural Language Processing and Machine Learning.
				</Text>
			</Box>
			<CTAButton />
		</Container>
	);
}
