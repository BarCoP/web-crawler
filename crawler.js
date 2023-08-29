const ARGUMENTS_NUMBER = 4;

function scanImagesInWeb() {
	if (process.argv.length !== 4) {
		console.log(
			`wrong amount of argument, make sure you enter ${ARGUMENTS_NUMBER} arguments by the format: "node crawler.js <url: string> <depth: number>", please run the command again.`
		);
	} else {
		// the user entered the correct arguments:
		const [node, fileLocation, urlInput, depthInput] = process.argv;
		console.log(`url input: ${urlInput}`);
		console.log(`depth input: ${depthInput}`);

		// process.argv.forEach(function (val, index, array) {
		// 	console.log(index + ': ' + val);
	}
}

scanImagesInWeb();
