import { Flex, Spacer } from "@chakra-ui/layout";
import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

type PageWrapperProps = {
	readonly title?: string;
	readonly children?: React.ReactNode;
};

const APP_NAME = "APP_NAME";

export default function PageWrapper({ title, children }: PageWrapperProps) {
	return (
		<>
			<Head key="PageWrapper">
				<title>{title ? `${APP_NAME} | ${title}` : APP_NAME}</title>
			</Head>
			<Flex direction="column" minH="100vh">
				<NavBar />
				{children}
				<Spacer />
				<Footer />
			</Flex>
		</>
	);
}
