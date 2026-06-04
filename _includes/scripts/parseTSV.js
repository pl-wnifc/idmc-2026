
function parseTSV(tsv) {
    const lines = tsv.split(/\r?\n/).filter(line => line.length);

    const headers = lines[0].split('\t');

    return lines.slice(1).map(line => {
        const values = line.split('\t');
        const row = {};

        headers.forEach((header, i) => {
            row[header] = values[i] || '';
        });

        return row;
    });
}
