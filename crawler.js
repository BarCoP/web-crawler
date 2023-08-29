const axios = require('axios');
const cheerio = require('cheerio');

const ARGUMENTS_NUMBER = 4;
const URL_RE =
	/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

let obj = {
	results: [],
};

async function scanImagesInWeb() {
	if (process.argv.length !== ARGUMENTS_NUMBER) {
		console.log(
			`wrong amount of argument, make sure you enter ${ARGUMENTS_NUMBER} arguments by the format: "node crawler.js <url: string> <depth: number>", please run the command again.`
		);
	} else {
		// the user entered the correct arguments:
		const [_, __, urlInput, depthInput] = process.argv;
		let isValidArguments = checkValidityOfInputs(urlInput, depthInput);

		if (!isValidArguments) {
			console.log(
				`you need to entered a valid arguments!, please run the command again.`
			);
		} else {
			// implement the core-logics of retrieving from a website the relevant data

			await calculateCurrentDepthImages(urlInput, depthInput);

			// console.log(obj.results);`

			// did not make it with the time-limit, wrote about it in README my thoughts

			//==============================================================
			// working on storing the results in json file including bulding array-demo with false data;

			writeResults2JSONFile(obj);
		}
	}
}

function checkValidityOfInputs(urlInput, depthInput) {
	// if there is more time we should check the edge-cases for this pattern

	let urlValid = URL_RE.test(urlInput);
	console.log(urlValid);
	let depthValid = depthInput >= 0 ? true : false;

	return urlValid && depthValid;
}

function writeResults2JSONFile(obj) {
	// if there is time left - check how to order the output in json file to be human-readable by default

	let json = JSON.stringify(obj);
	let fs = require('fs');
	fs.writeFile('results.json', json, 'utf8', (err) => {
		if (err) console.log(err);
		else {
			console.log('File written successfully\n');
		}
	});
}

const calculateCurrentDepthImages = async (url, depth) => {
	// if (counter > depth) {
	// 	return;
	// }
	const qArr = [[url, 0]];
	while (qArr.length > 0) {
		const cur = qArr.pop();
		console.log(cur);

		try {
			const html = await axios.get(cur[0]);
			const $ = cheerio.load(html.data);

			$('img').each((_, el) => {
				obj.results.push({
					imageUrl: $(el).attr('src'),
					sourceUrl: url,
					depth: cur[1],
				});
			});
			if (cur[1] + 1 <= depth) {
				$('a').each((_, el) => {
					qArr.push([$(el).attr('href'), cur[1] + 1]);
				});
			}
		} catch (err) {
			console.log(err);
		}
	}
};

// run main function:
scanImagesInWeb();
