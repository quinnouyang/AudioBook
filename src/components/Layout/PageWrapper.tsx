import { Flex, Spacer } from "@chakra-ui/layout";
import Head from "next/head";

type PageWrapperProps = {
	readonly title: string;
	readonly children?: React.ReactNode;
};

export default function PageWrapper({ title, children }: PageWrapperProps) {
	return (
		<>
			<Head key="PageWrapper">
				<title>{"APP NAME | " + title}</title>
			</Head>
			<Flex direction="column" minH="100vh">
				{/* <NavBar /> */}
				{children}
				<Spacer />
				{/* <Footer /> */}
			</Flex>
		</>
	);
}
