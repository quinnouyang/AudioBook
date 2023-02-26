import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import {
	VStack,
	Stack,
	Heading,
	Text,
	Container,
	Box,
	HStack,
	Circle,
} from "@chakra-ui/layout";
import PageWrapper from "../components/Layout/PageWrapper";
import CombinedLink from "../components/CombinedLink";
import { Image } from "@chakra-ui/image";
import CustomButton from "../components/CustomButton";
import { Children, useState } from "react";
import { useMultiStyleConfig } from "@chakra-ui/system";
import { Input } from "@chakra-ui/input";
import { useSession, signIn, signOut } from "next-auth/react";

type CircleProps = { color: string; number: number };

function StepCircle({ color, number }: CircleProps) {
	return (
		<Circle size={["60px", "90px", "120px"]} bg={color} color="white" m={10}>
			<Heading fontSize={["2xl", "4xl", "6xl"]}>{number}</Heading>
		</Circle>
	);
}

type CardProps = {
	title: React.ReactNode;
	stepCircle: typeof StepCircle;
	direction: "row" | "row-reverse";
	body: React.ReactNode;
	footerText: string;
};

function StepCard({
	title,
	stepCircle,
	direction,
	body,
	footerText,
}: CardProps) {
	return (
		<Card
			direction={{ base: "column", xl: direction }}
			minW="60vw"
			overflow="hidden"
			variant="outline"
			align="center"
		>
			{stepCircle}
			<Stack p={[4, 8]}>
				<CardBody>
					<Heading size={"xl"}>{title}</Heading>
					{body}
				</CardBody>

				<CardFooter>
					<VStack align="start">
						<UploadButton />
						<Text color="gray.600">{footerText}</Text>
					</VStack>
				</CardFooter>
			</Stack>
		</Card>
	);
}
function UploadButton() {
	const [file, setFile] = useState<string>();

	function onFileChange(event) {
		setFile(event.target.files[0]);
		// console.log(file);
	}

	return (
		<Input
			type="file"
			onChange={onFileChange}
			onProgress={() => {}}
			sx={{
				"::file-selector-button": {
					height: 10,
					padding: 0,
					mr: 4,
					border: "none",
					fontWeight: "bold",
					...useMultiStyleConfig("Button"),
				},
			}}
		/>
	);
}

function LoginButton() {
	const { data } = useSession();

	console.log("data: ", data);
	if (data) {
		return (
			<>
				{/* @ts-ignore */}
				Signed in as {data?.session?.user?.email} <br />
				<CustomButton
					onClick={() => signOut()}
					bgColor="green.400"
					hoverBgColor="green.300"
				>
					Sign out
				</CustomButton>
			</>
		);
	}
	return (
		<CustomButton
			onClick={() => signIn("spotify")}
			bgColor="green.400"
			hoverBgColor="green.300"
		>
			Sign in
		</CustomButton>
	);
}

function UploadCard() {
	return (
		<>
			<StepCard {...{ title: }} />
			<Card
				direction={{ base: "column", xl: "row-reverse" }}
				minW="60vw"
				overflow="hidden"
				variant="outline"
				align="center"
			>
				<StepCircle {...{ number: 1, color: "purple.400" }} />
				<Stack p={[4, 8]}>
					<CardBody>
						<Heading size={"xl"}>
							1. Upload Your{" "}
							<Text color="blue.400" as="span">
								Book
							</Text>{" "}
							📚
						</Heading>
						<Text fontSize="xl" py="2">
							We allow books in the form of PDF files*, where{" "}
							<strong>artifical intelligence</strong> will queue background
							music that fits what you're reading,{" "}
							<strong>as you read it.</strong>
							<br />
						</Text>
					</CardBody>

					<CardFooter>
						<VStack align="start">
							<UploadButton />
							<Text color="gray.600">
								*We hope to support EPUB file uploads and logins to other
								popular online reading services in the future.
							</Text>
						</VStack>
					</CardFooter>
				</Stack>
			</Card>
		</>
	);
}

export default function Setup() {
	return (
		<PageWrapper
			{...{
				title: "Getting Started",
				ctaLabel: "Donate ❤️",
				ctaLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			}}
		>
			<Box>
				<Container centerContent py={[8, 16]}>
					<Heading
						maxW={["1xl", "2xl", "8xl"]}
						fontSize={[24, 48, 64]}
						pb={[8, 16]}
						alignItems="center"
					>
						<Text color="pink.400" as="span">
							Getting Started <br />
						</Text>
						In{" "}
						<Text color="pink.400" as="span">
							1, 2, ...3! 🚀
						</Text>
					</Heading>
					<VStack spacing={10}>
						<UploadCard />
						<Card
							p={[4, 8]}
							direction={{ base: "column", xl: "row-reverse" }}
							overflow="hidden"
							variant="outline"
							align="center"
						>
							<Stack>
								<CardBody>
									<StepCircle {...{ number: 2, color: "green.400" }} />
									<Heading size={"xl"}>
										2. Sign-in to{" "}
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
									<VStack align="start">
										<LoginButton />
										<Text color="gray.600">
											*Spotify Premium is highly recommended–we can't skip ads
											for you.
											<br />
											We hope to support logins to other popular music streaming
											services in the future.
										</Text>
									</VStack>
								</CardFooter>
							</Stack>
						</Card>
						<Card
							p={[4, 8]}
							direction={{ base: "column", xl: "row" }}
							overflow="hidden"
							variant="outline"
						>
							<StepCircle {...{ number: 2, color: "green.400" }} />
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
