import { Card, CardBody, CardFooter } from "@chakra-ui/card";
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

export default function HomePage() {
	return (
		<PageWrapper {...{ ctaLabel: "Get started", ctaLink: "/getting-started" }}>
			<Hero />
			<Divider />
			<Box bgColor="blue.50">
				<VStack py={[8, 16]}>
					<Heading
						maxW={["1xl", "2xl", "8xl"]}
						fontSize={[24, 48, 64]}
						pb={[8, 16]}
					>
						A{" "}
						<Text color="pink.400" as="span">
							Musical
						</Text>{" "}
						E-Reader
					</Heading>
					<Container>
						<VStack spacing={10}>
							<Card
								direction={{ base: "column", lg: "row" }}
								minW="60vw"
								overflow="hidden"
								variant="outline"
							>
								<Image
									objectFit="cover"
									maxW={{ base: "100%", lg: "40%" }}
									src="https://cdn.windowsreport.com/wp-content/uploads/2020/04/PDF-66.jpg"
									alt="PDF Icon"
								/>

								<Stack p={[4, 8]}>
									<CardBody>
										<Heading size={"xl"}>
											Upload Your{" "}
											<Text color="blue.400" as="span">
												Book
											</Text>{" "}
											📚
										</Heading>
										<Text fontSize="xl" py="2">
											We allow books in the form of PDF files*, where{" "}
											<strong>artifical intelligence</strong>
											<br />
										</Text>
									</CardBody>

									<CardFooter>
										<Text color="gray.600">
											*We hope to support EPUB file uploads and logins to other
											popular online reading services in the future.
										</Text>
									</CardFooter>
								</Stack>
							</Card>
							<Card
								p={[4, 8]}
								minW="60vw"
								direction={{ base: "column", lg: "row-reverse" }}
								overflow="hidden"
								variant="outline"
							>
								<Image
									objectFit="contain"
									maxW={{ base: "100%", lg: "40%" }}
									src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
									alt="Spotify Logo"
								/>

								<Stack>
									<CardBody>
										<Heading size={"xl"}>
											Sign-in to{" "}
											<CombinedLink
												href="https://open.spotify.com/"
												color="green.400"
											>
												Spotify
											</CombinedLink>{" "}
											🎧
										</Heading>

										<Text fontSize="xl" py="2">
											We use{" "}
											<CombinedLink href="https://open.spotify.com/">
												<strong>Spotify</strong>
											</CombinedLink>
											* to seamlessly integrate a high-fidelity background
											listening experience as you read. <br /> Let the music{" "}
											<strong>immerse</strong> you into the fantasy of your
											favorite novels.
										</Text>
									</CardBody>

									<CardFooter>
										<Text color="gray.600">
											*Spotify Premium is highly recommended–we can't skip ads
											for you.
											<br />
											We hope to support logins to other popular music streaming
											services in the future.
										</Text>
									</CardFooter>
								</Stack>
							</Card>
							<Card
								p={[4, 8]}
								minW="60vw"
								direction={{ base: "column", lg: "row" }}
								overflow="hidden"
								variant="outline"
							>
								<Image
									objectFit="contain"
									maxW={{ base: "100%", lg: "40%" }}
									src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
									alt="Spotify Logo"
								/>

								<Stack>
									<CardBody>
										<Heading size={"xl"}>
											Sign-in to{" "}
											<CombinedLink
												href="https://open.spotify.com/"
												color="green.400"
											>
												Spotify
											</CombinedLink>{" "}
											🎧
										</Heading>

										<Text fontSize="xl" py="2">
											We use{" "}
											<CombinedLink href="https://open.spotify.com/">
												<strong>Spotify</strong>
											</CombinedLink>
											* to seamlessly integrate a high-fidelity background
											listening experience as you read. <br /> Let the music{" "}
											<strong>immerse</strong> you into the fantasy of your
											favorite novels.
										</Text>
									</CardBody>

									<CardFooter>
										<Text color="gray.600">
											*Spotify Premium is highly recommended–we can't skip ads
											for you.
											<br />
											We hope to support logins to other popular music streaming
											services in the future.
										</Text>
									</CardFooter>
								</Stack>
							</Card>
						</VStack>
					</Container>
				</VStack>
			</Box>
		</PageWrapper>
	);
}
