import { Card, CardBody } from "@chakra-ui/card";
import {
	Box,
	Container,
	Divider,
	Heading,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/layout";
import Hero from "../components/Home/Hero";
import PageWrapper from "../components/Layout/PageWrapper";
import { Image } from "@chakra-ui/image";
import CombinedLink from "../components/CombinedLink";
import "@fontsource/caveat";
import LinkButton from "../components/LinkButton";

export default function HomePage() {
	return (
		<PageWrapper {...{ ctaLabel: "Get started", ctaLink: "/getting-started" }}>
			<Hero />
			<Divider />
			<Box bgColor="blue.50">
				<VStack py={[8, 16]}>
					<Heading
						maxW={["1xl", "2xl", "8xl"]}
						fontSize={[36, 54, 72]}
						pb={[8, 16]}
						fontFamily="Caveat"
					>
						A{" "}
						<Text color="pink.400" as="span">
							Musical
						</Text>{" "}
						E-Reader
					</Heading>
					<Container>
						<VStack spacing={10}>
							<Card direction={{ base: "column", lg: "row" }} minW="60vw">
								<Image
									objectFit="cover"
									maxW={{ base: "100%", lg: "40%" }}
									src="/pdf-icon.webp"
									alt="PDF Icon"
								/>

								<Stack p={[4, 8]}>
									<CardBody>
										<Heading size={"xl"}>
											<Text color="blue.400" as="span">
												A.I.
											</Text>{" "}
											Text Analysis 📖
										</Heading>
										<Text fontSize="xl" py="2">
											AudioBook leverages state-of-the-art{" "}
											<strong>machine learning</strong> models, analyzing the
											genre-specific details down to the pages that you are
											reading.
										</Text>
									</CardBody>
								</Stack>
							</Card>

							<Card
								p={[4, 8]}
								minW="60vw"
								direction={{ base: "column", lg: "row-reverse" }}
							>
								<Image
									objectFit="contain"
									maxW={{ base: "100%", lg: "40%" }}
									src="/spotify-logo.png"
									alt="Spotify Logo"
								/>

								<Stack>
									<CardBody>
										<Heading size={"xl"}>
											<Text color="green.400" as="span">
												Real-time
											</Text>{" "}
											Music Queuing 📊
										</Heading>

										<Text fontSize="xl" py="2">
											Powered by{" "}
											<CombinedLink
												href="https://open.spotify.com/"
												color="green.400"
												_hover={{ color: "green.300" }}
												isExternal
											>
												<strong>Spotify</strong>
											</CombinedLink>
											, text analyses from your reading inform{" "}
											<strong>real-time</strong> sourcing to queue the most
											fitting background music.
										</Text>
									</CardBody>
								</Stack>
							</Card>

							<Card
								p={[4, 8]}
								minW="60vw"
								direction={{ base: "column", lg: "row" }}
							>
								<Image
									objectFit="contain"
									maxW={{ base: "100%", lg: "40%" }}
									src="/e-reader.png"
									alt="E-reader"
								/>

								<Stack>
									<CardBody>
										<Heading size={"xl"}>
											<CombinedLink
												href="https://open.spotify.com/"
												color="pink.400"
											>
												Enhanced
											</CombinedLink>{" "}
											Experience 🎧
										</Heading>

										<Text fontSize="xl" py="2">
											Our web e-reader strives to offer you the most{" "}
											<strong>immerssive</strong> reading experience possible,
											playing music softly and seamlessly in the background.
										</Text>
									</CardBody>
								</Stack>
							</Card>
						</VStack>
					</Container>
				</VStack>
			</Box>
			<Box bgColor="pink.50">
				<Container maxW={["1xl", "2xl", "8xl"]} centerContent py={[8, 16]}>
					<Heading
						color="purple.400"
						fontSize={{ base: "3xl", sm: "5xl", lg: "7xl" }}
					>
						Try it now.
					</Heading>
					<Heading
						fontFamily={"Caveat"}
						fontSize={{ base: "3xl", sm: "5xl", lg: "7xl" }}
						justifyContent="center"
						pb={[8, 16]}
					>
						In 3 easy steps!
					</Heading>
					<LinkButton {...{ link: "/getting-started" }}>Get started</LinkButton>
				</Container>
			</Box>
		</PageWrapper>
	);
}
