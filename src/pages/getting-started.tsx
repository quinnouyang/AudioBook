import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import {
	VStack,
	Stack,
	Heading,
	Text,
	Container,
	Box,
	Circle,
} from "@chakra-ui/layout";
import PageWrapper from "../components/Layout/PageWrapper";
import CombinedLink from "../components/CombinedLink";
import CustomButton from "../components/CustomButton";
import { useEffect, useState } from "react";
import { useMultiStyleConfig } from "@chakra-ui/system";
import { Input } from "@chakra-ui/input";
import { useSession, signIn, signOut } from "next-auth/react";
import LinkButton from "../components/LinkButton";
import "@fontsource/caveat";
import { useToast } from "@chakra-ui/toast";
import { useRouter } from "next/router";

type CircleProps = { number: number; color: string };

function StepCircle({ color, number }: CircleProps) {
	return (
		<Circle size={["90px", "120px"]} bg={color} color="white" m={10}>
			<Heading fontSize={["4xl", "6xl"]}>{number}</Heading>
		</Circle>
	);
}

type CardProps = {
	title: string;
	circleProps: CircleProps;
	footerText?: string;
	button: React.ReactNode; // Weak typing
	children: React.ReactNode;
};

function StepCard({
	title,
	circleProps,
	footerText,
	button,
	children,
}: CardProps) {
	return (
		<Card
			direction={{ base: "column", xl: "row" }}
			minW="60vw"
			overflow="hidden"
			variant="outline"
			align="center"
			borderColor={circleProps.color}
			borderWidth={4}
		>
			<StepCircle {...circleProps} />
			<Stack p={[4, 8]}>
				<CardBody>
					<Heading size={"xl"}>{title}</Heading>
					{children}
				</CardBody>

				<CardFooter>
					<VStack align="start">
						{button}
						<Text fontSize={12} color="gray.600">
							{footerText}
						</Text>
					</VStack>
				</CardFooter>
			</Stack>
		</Card>
	);
}

function UploadButton({ file }: { file: string }) {
	const toast = useToast();
	const router = useRouter();

	useEffect(() => {
		if (file)
			toast({
				title: "File uploaded.",
				status: "info",
				position: "bottom-left",
				duration: 4000,
				isClosable: true,
			});
	}, [file]);

	function onFileChange(event) {
		file = event.target.files[0];
		router.push(file);
	}

	return (
		<Input
			type="file"
			onChange={onFileChange}
			maxWidth={400}
			accept=".pdf"
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
	const { data: session } = useSession();
	const toast = useToast();

	useEffect(() => {
		if (session)
			toast({
				// Inconnsitent rendering
				title: "Success!",
				description: "You're signed into Spotify.",
				status: "success",
				position: "bottom-left",
				duration: 4000,
				isClosable: true,
			});
	}, []);

	if (session) {
		return (
			<CustomButton
				onClick={() => signOut()}
				bgColor="red.400"
				hoverBgColor="red.300"
			>
				Sign out
			</CustomButton>
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

function SpotifyCard() {
	return (
		<StepCard
			{...{
				title: "Sign in to Spotify 🎧",
				circleProps: { ...{ number: 1, color: "green.400" } },
				button: <LoginButton />,
				footerText:
					"*We highly recommend Spotify Premium–we cannot skip intrusive ads for you. 😔",
			}}
		>
			<Text fontSize="xl" py="2">
				Please log into your{" "}
				<CombinedLink href="https://open.spotify.com/">
					<strong>Spotify</strong>
				</CombinedLink>
				* account to seamlessly integrate a high-fidelity reading and listening
				experience, where we automatically queue music in the background as you
				read.
			</Text>
		</StepCard>
	);
}

function UploadCard({ file }: { file: string }) {
	return (
		<StepCard
			{...{
				title: "Upload Your Book 📚",
				circleProps: { ...{ number: 2, color: "blue.400" } },
				button: <UploadButton {...{ file }} />,
				footerText:
					"*We hope to support EPUB file uploads and logins to other popular online reading services in the future.",
			}}
		>
			<Text fontSize="xl" py="2">
				Please upload a book (novels work best!) in the form of a PDF file*,
				where <strong>artifical intelligence</strong> will analyze it as you
				read to <strong>customize</strong> background music that fits your
				reading pace.
			</Text>
		</StepCard>
	);
}

function ReadCard({ file }: { file: string }) {
	return (
		<StepCard
			{...{
				title: "Start your AudioBook! ⚡",
				circleProps: { ...{ number: 3, color: "pink.400" } },
				button: (
					<LinkButton {...{ link: "/reader", data: file }}>
						Let's go!
					</LinkButton>
				),
			}}
		>
			<Text fontSize="xl" py="2">
				Head over to our e-reader, press play, and let the music{" "}
				<strong>immerse</strong> you into the fantasy of your favorite novel.
				Enjoy!
			</Text>
		</StepCard>
	);
}

export default function Setup() {
	const [file, setFile] = useState<string>();

	return (
		<PageWrapper
			{...{
				title: "Getting Started",
				ctaLabel: "Donate ❤️",
				ctaLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			}}
		>
			<Box bgColor="orange.50">
				<Container maxW={["1xl", "2xl", "8xl"]} centerContent py={[8, 16]}>
					<Heading
						color="pink.400"
						fontSize={{ base: "3xl", sm: "5xl", lg: "7xl" }}
					>
						Getting Started
					</Heading>
					<Heading
						fontFamily={"Caveat"}
						fontSize={{ base: "3xl", sm: "5xl", lg: "7xl" }}
						justifyContent="center"
						pb={[8, 16]}
					>
						In 1, 2, ...3! 🚀
					</Heading>
					<Container>
						<VStack spacing={10}>
							<SpotifyCard />
							<UploadCard {...{ file }} />
							<ReadCard {...{ file }} />
						</VStack>
					</Container>
				</Container>
			</Box>
		</PageWrapper>
	);
}
