import { useState } from "react";
import DocumentWrapper from "../components/DocumentWrapper";
import defaultFile from "../../assets/Algorithms-JeffE-shortened.pdf";

export default function Book() {
	const [file, setFile] = useState(defaultFile);

	function onFileChange(event) {
		setFile(event.target.files[0]);
	}

	return (
		<div className="Example">
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
		</div>
	);
}
