import {
	AzureKeyCredential,
	TextAnalysisClient,
} from "@azure/ai-language-text";
import fetch from "node-fetch";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// You will need to set these environment variables or edit the following values
const endpoint =
	process.env["AZURE_LANGUAGE_ENDPOINT"] ||
	"https://audiobook-genre.cognitiveservices.azure.com/";
const apiKey =
	process.env["AZURE_LANGUAGE_KEY"] || "8e0f3b6cf3e54e04a43598b2ac5dbc3a";
const deploymentName =
	process.env["MULTI_LABEL_CLASSIFY_DEPLOYMENT_NAME"] || "audiobook-deployment";
const projectName =
	process.env["MULTI_LABEL_CLASSIFY_PROJECT_NAME"] || "audiobook";

let max_confidence = 0;
let genre = "";
const token =
	"BQC5h0UXawym79sEgAqqBXFyeBs1q66HamxEXoVABzMnyDORj_ATsVL-F-aSAzVDSiovlHVInmI-tjcB29qGi0U5-fdnF18BJuKztp4_wR_2AvnniaE0oeYxEffOGsaCq7kGh-pzNEXf9VryfDSROiQHNhioJAowP4uTQiTmC79oNf-JWaNLKQAGHceYQGRN";

export default async function nlpApi(text) {
	console.log("== Custom Entity Recognition Sample ==");

	const client = new TextAnalysisClient(
		endpoint,
		new AzureKeyCredential(apiKey)
	);
	const actions = [
		{
			kind: "CustomMultiLabelClassification",
			deploymentName,
			projectName,
		},
	];
	const poller = await client.beginAnalyzeBatch(actions, new Array(text), "en");
	const results = await poller.pollUntilDone();

	for await (const actionResult of results) {
		if (actionResult.kind !== "CustomMultiLabelClassification") {
			throw new Error(
				`Expected a CustomMultiLabelClassification results but got: ${actionResult.kind}`
			);
		}
		if (actionResult.error) {
			const { code, message } = actionResult.error;
			throw new Error(`Unexpected error (${code}): ${message}`);
		}
		for (const result of actionResult.results) {
			console.log(`- Document ${result.id}`);
			if (result.error) {
				const { code, message } = result.error;
				throw new Error(`Unexpected error (${code}): ${message}`);
			}
			console.log(`\tClassification:`);
			for (const classification of result.classifications) {
				console.log(`\t\t-category: ${classification.category}`);
				console.log(classification.confidenceScore);

				if (classification.confidenceScore > max_confidence) {
					genre = classification.category;
					max_confidence = classification.confidenceScore;
				}
			}
		}
	}

	// Get request to search for genre
	// var searchParameters = {
	//   method: 'GET',
	//   headers: {
	//     'Content-Type': 'application/json',
	//     'Authorization': 'Bearer ' + token
	//   }
	// }
	// var trackID = await fetch('https://api.spotify.com/v1/search?q=genre%3A' + genre + '&type=track&limit=50', searchParameters)
	//   .then(response => response.json())
	//   .then(data => {
	//     let current_name = data.tracks.items[Math.floor(Math.random() * 50)].name;
	//     while (current_name.match(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/)) {
	//       current_name = data.tracks.items[Math.floor(Math.random() * 50)].name;
	//     }
	//     return current_name;
	//   })

	//   console.log("Spotify recommends: " + trackID);
}

main().catch((err) => {
	console.error("The sample encountered an error:", err);
});
