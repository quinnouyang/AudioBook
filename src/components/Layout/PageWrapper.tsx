import { Flex, Spacer } from "@chakra-ui/layout";
import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

type PageWrapperProps = {
	readonly title?: string;
	readonly children?: React.ReactNode;
	readonly ctaLabel: string;
	readonly ctaLink: string;
};

const APP_NAME = "AudioBook";

export default function PageWrapper({
	title,
	children,
	ctaLabel,
	ctaLink,
}: PageWrapperProps) {
	return (
		<>
			<Head key="PageWrapper">
				<title>{title ? `${APP_NAME} | ${title}` : APP_NAME}</title>
			</Head>
			<Flex direction="column" minH="100vh">
				<NavBar {...{ ctaLabel: ctaLabel, ctaLink: ctaLink }} />
				{children}
				<Spacer />
				<Footer />
			</Flex>
		</>
	);
}
