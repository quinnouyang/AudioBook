import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
	cMapUrl: "cmaps/",
	cMapPacked: true,
	standardFontDataUrl: "standard_fonts/",
};

export default function DocumentWrapper({ file }: { file: string }) {
	const [numPages, setNumPages] = useState(null);

	function onDocumentLoadSuccess({ numPages: nextNumPages }) {
		setNumPages(nextNumPages);
	}

	return (
		<div className="Example__container__document">
			<Document
				file={file}
				onLoadSuccess={onDocumentLoadSuccess}
				options={options}
			>
				{Array.from(new Array(numPages), (el, index) => (
					<Page key={`page_${index + 1}`} pageNumber={index + 1} />
				))}
			</Document>
		</div>
	);
}
