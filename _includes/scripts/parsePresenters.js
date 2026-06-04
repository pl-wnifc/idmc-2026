


//////////////////////////////
//
// parsePresentations -- Convert Presentations data from ATON to JSON.
//

function parsePresenters(presenters) {
	let aton = new ATON;
	presenters = aton.parse(presenters).BIO;

   let urlPattern = /(?<!href=")https?:\/\/[^\s)><]+[^\s),.?!><]/g;
	for (let i=0; i<presenters.length; i++) {
		let a = presenters[i].bio;

		// Convert URLs to hyperlinks
		a = a.replace(urlPattern, function (url) {
			return `<a target="_blank" href="${url}">${url}</a>`;
		});

		// Replace blank lines (only blank or whitespace-only lines) with paragraph separators
		a = a.replace(/^\s*$/gm, "</p><p class='abstract-content'>");

		// Ensure that the content starts and ends with paragraph tags
		a = `<p class='abstract-content'>${a}</p>`;

		// Store the processed abstract back into presentations
		presenters[i].bio = a;

		// Create ID lookup for presentations (by presenters' last name)
		let id = presenters[i].id;
		hLookup[id] = presenters[i];
	}

	return presenters;
}



