export function __ensureMoreThanOneDigitForEach(parts) {
	let results = [], i = -1;
	while (++i < parts.length) results.push(__ensureMoreThanOneDigit(parts[i]));
	return results;
}


export function __ensureMoreThanOneDigit(str) {
	if (String(str).length === 1) str = ('0' + str);

	return str;
}
