import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Box, Container, Flex } from "@chakra-ui/layout";
// import { ReallyBadPractice } from "./ReallyBadPractice";
import defaultFile from "../../../assets/percy-jackson.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
	cMapUrl: "cmaps/",
	cMapPacked: true,
	standardFontDataUrl: "standard_fonts/",
};

const genres = [
	"action",
	"rock",
	"country",
	"sad",
	"jacob",
	"ko",
	"jianna",
	"torcende",
	"quinn",
	"ouyang",
	"lena",
	"brockway",
	"k-pop",
];

async function absoluteDogsht({ genre }: { genre: string }) {
	var searchParameters = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + process.env.LOOL,
		},
	};

	// var trackID = await fetch(
	// 	"https://api.spotify.com/v1/search?q=genre%3A" +
	// 		genre +
	// 		"&type=track&limit=50",
	// 	searchParameters
	// )
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		let current_name = data.tracks.items[Math.floor(Math.random() * 50)].name;
	// 		while (
	// 			current_name.match(
	// 				/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/
	// 			)
	// 		) {
	// 			current_name = data.tracks.items[Math.floor(Math.random() * 50)].name;
	// 		}
	// 		return current_name;
	// 	});

	// console.log("Spotify recommends: " + trackID);
}

export default function DocumentWrapper() {
	const [numPages, setNumPages] = useState(0);
	const [rightPageNum, setRightPageNum] = useState(1);

	function onDocumentLoadSuccess({ numPages: nextNumPages }) {
		setNumPages(nextNumPages);
	}

	function onLeftClick() {
		setRightPageNum(Math.max(1, rightPageNum - 2));
		// ReallyBadPractice({ ...{ pgNum: rightPageNum } });
		absoluteDogsht({
			...{ genre: genres[(rightPageNum - 1) % genres.length] },
		});
		console.log("left", rightPageNum);
	}

	function onRightClick() {
		setRightPageNum(Math.min(rightPageNum + 2, numPages));
		absoluteDogsht({
			...{ genre: genres[(rightPageNum - 1) % genres.length] },
		});
		console.log("right", rightPageNum);
	}

	return (
		<Container centerContent>
			<Document
				file={defaultFile}
				onLoadSuccess={onDocumentLoadSuccess}
				options={options}
			>
				<Flex borderWidth={4}>
					<Page
						key={`page_${rightPageNum}`}
						pageNumber={rightPageNum}
						onClick={onLeftClick}
					/>
					<Page
						key={`page_${rightPageNum + 1}`}
						pageNumber={rightPageNum + 1}
						onClick={onRightClick}
					/>
				</Flex>
			</Document>
		</Container>
	);
}
