
let Presentations = `{% include presentations/main.aton %}`;
let Workshops     = `{% include workshops/main.aton %}`;
let Presenters    = `{% include presenters/main.aton %}`;
let Schedule      = `{% include schedule.tsv %}`;
let pLookup  = {};
let wLookup  = {};
let hLookup  = {};
let sLookup  = {};


//////////////////////////////
//
// DOMContentLoaded event listener -- fill in abstract and workshop tabs and
//   open the webpage to the given tab.
//

document.addEventListener("DOMContentLoaded", function (event) {
	Presentations = parsePresentations(Presentations);
	Workshops     = parseWorkshops(Workshops);
	Presenters    = parsePresenters(Presenters);
	Schedule      = parseSchedule(Schedule);
	createAbstractList(Presentations);
	createWorkshopList(Workshops);
	prepareSchedule(Schedule);
	//fillInPresentationsSchedule(Presentations);
  //fillInWorkshopsSchedule(Workshops);

	let originUrl = window.location.href;
	let target;
	if (/#/.test(originUrl)) {
		target = originUrl.match(/#.*$/)[0];
		target = target.replace("#", "");
		originUrl = originUrl.replace(/#.*$/, '');
	}

	showTabContents(target);

});
