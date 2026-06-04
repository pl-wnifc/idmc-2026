

function parseSchedule(tsv) {
	let rows = parseTSV(tsv);
	let schedule = {};
	for (const row of rows) {
		if (!schedule[row.Day]) {
			schedule[row.Day] = [];
		}
		const item = {
			day: row.Day,
			time: row.Time,
			event: row.Event,
			presentationId: row.PresentationID
		};
		schedule[row.Day].push(item);
		if (row.PresentationID) {
			sLookup[row.PresentationID] = item;
		}
	}
	return schedule;
}

//function parseSchedule(tsv) {
//    const rows = parseTSV(tsv);
//
//    const result = {};
//
//    rows.forEach(row => {
//        if (!result[row.Day]) {
//            result[row.Day] = [];
//        }
//
//        result[row.Day].push({
//            time: row.Time,
//            event: row.Event,
//            presentationId: row.PresentationID
//        });
//    });
//
//    return result;
//}