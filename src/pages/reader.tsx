import { useState } from "react";
import DocumentWrapper from "../components/Reader/DocumentWrapper";
import defaultFile from "../../assets/Algorithms-JeffE-shortened.pdf";
import PageWrapper from "../components/Layout/PageWrapper";

export default function Reader() {
	const [file, setFile] = useState(defaultFile);

	function onFileChange(event) {
		setFile(event.target.files[0]);
	}

	return (
		<PageWrapper
			{...{
				title: "Reader",
				ctaLabel: "Donate ❤️",
				ctaLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			}}
		>
			<header>
				<h1>react-pdf sample page</h1>
			</header>
			<div className="Example__container">
				<div className="Example__container__load">
					<label htmlFor="file">Load from file:</label>{" "}
					<input onChange={onFileChange} type="file" />
				</div>
				<DocumentWrapper {...{ file: file }} />
			</div>
		</PageWrapper>
	);
}
