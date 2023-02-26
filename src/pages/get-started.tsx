import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import {
	VStack,
	Stack,
	Heading,
	Text,
	Container,
	Box,
} from "@chakra-ui/layout";
import PageWrapper from "../components/Layout/PageWrapper";
import CombinedLink from "../components/Utilities/CombinedLink";
import { Image } from "@chakra-ui/image";

export default function Setup() {
	return (
		<PageWrapper
			{...{
				title: "Get Started",
				ctaLabel: "Donate ❤️",
				ctaLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			}}
		>
			<Box bgColor="orange.50">
				<Container centerContent py={[8, 16]}>
					<Heading fontSize={[24, 48, 64]} pb={[8, 16]}>
						Get{" "}
						<Text color="pink.400" as="span">
							Started
						</Text>
					</Heading>
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
										We allow books in the form of <strong>PDF</strong> files*,
										which we present in a comfortable document viewer for you to
										read. <br />
										Navigate the pages and control your music with ease.
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
										*Spotify Premium is highly recommended–we can't skip ads for
										you.
										<br />
										We hope to support logins to other popular music streaming
										services in the future.
									</Text>
								</CardFooter>
							</Stack>
						</Card>
						<Card
							p={[4, 8]}
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
										*Spotify Premium is highly recommended–we can't skip ads for
										you.
										<br />
										We hope to support logins to other popular music streaming
										services in the future.
									</Text>
								</CardFooter>
							</Stack>
						</Card>
					</VStack>
				</Container>
			</Box>
		</PageWrapper>
	);
}
