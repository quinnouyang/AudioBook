import DocumentWrapper from "../components/Reader/DocumentWrapper";
import PageWrapper from "../components/Layout/PageWrapper";
import { useRouter } from "next/router";

export default function Reader() {
	const router = useRouter();

	return (
		<PageWrapper
			{...{
				title: "Reader",
				ctaLabel: "Donate ❤️",
				ctaLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			}}
		>
			<DocumentWrapper />
		</PageWrapper>
	);
}
