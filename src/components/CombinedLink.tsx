import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

type CombinedLinkProps = {
	children: React.ReactNode | string;
} & NextLinkProps &
	ChakraLinkProps;

export default function CombinedLink({
	children,
	...props
}: CombinedLinkProps) {
	return (
		<Link as={NextLink} href={props.href} {...props}>
			{children}
		</Link>
	);
}
