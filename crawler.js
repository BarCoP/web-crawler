const ARGUMENTS_NUMBER = 4;

function scanImagesInWeb() {
	if (process.argv.length !== 4) {
		console.log(
			`wrong amount of argument, make sure you enter ${ARGUMENTS_NUMBER} arguments by the format: "node crawler.js <url: string> <depth: number>", please run the command again.`
		);
	} else {
		// the user entered the correct arguments:
		const [node, fileLocation, urlInput, depthInput] = process.argv;
		let isValidArguments = checkValidityOfInputs(urlInput, depthInput);

		if (!isValidArguments) {
			console.log(`you need to entered a valid arguments!`);
		} else {
			// everything is valid, now we can scan
		}
	}
}

function checkValidityOfInputs(urlInput, depthInput) {
	// if there is more time we should check the edge-cases for this pattern
	const urlRe =
		/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

	let urlValid = urlRe.test(urlInput);
	console.log(urlValid);
	let depthValid = depthInput > 0 ? true : false;

	return urlValid && depthValid;
}
scanImagesInWeb();
