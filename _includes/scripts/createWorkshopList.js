


//////////////////////////////
//
// createWorkshopList --
//

function createWorkshopList(list) {
	let container = document.querySelector("#workshop-container");
	let options = {
		weekday: 'long',
		year: 'numeric',
		day: 'numeric',
		month: 'long',
	};
	for (let i=0; i<list.length; i++) {
		//let id = "w" + String(i);
    let id = list[i].id;
		//let contentId = id + "-description";
		let contentId = id;

		let item = document.createElement("div");
		item.classList.add("workshop-item");
		let workshopHead = document.createElement("div");
		workshopHead.classList.add("workshop-header");
		let func = "activateWorkshop(\"" + id + "\", \"" + contentId + "\")";
		workshopHead.setAttribute("onclick", func);
		let title = document.createElement("p");
		title.classList.add('title');
		title.innerHTML = list[i].title;
		let author = document.createElement("p");
		author.classList.add('author');
		let presentersIdList = getPresentersList(list[i].presenter);
		let authorFieldList = [];
		let affiliationFieldList = [];
		for (var j = 0; j < presentersIdList.length; j++) {
			let authorFieldItem = hLookup[presentersIdList[j]]['first-name'] + " " + hLookup[presentersIdList[j]]['last-name'];
			let affiliationFieldItem = hLookup[presentersIdList[j]]['affiliation'] + ", " + hLookup[presentersIdList[j]]['city'] + ", " +  hLookup[presentersIdList[j]]['country'] ;
			if (presentersIdList.length > 1) {
				let index = j+1
				authorFieldItem = authorFieldItem + "<sup>" + index + "</sup>";
				affiliationFieldItem = "<sup>" + index + "</sup>" + affiliationFieldItem;
			}
			authorFieldList.push(authorFieldItem);
			affiliationFieldList.push(affiliationFieldItem);
		}
		//console.log(list[i].presenter);
		//console.log("id=", id, sLookup[id]);
		author.innerHTML = authorFieldList.join(", ");

		//console.log(affiliationFieldList);

		let affiliationW = document.createElement("p");
		affiliationW.classList.add("affiliation");
		affiliationW.innerHTML = affiliationFieldList.join(", ");


		let dateString = formatDate(sLookup[id].day);

		//console.log("id=", id, sLookup[id]);

		let date = document.createElement("p");
		date.classList.add("date");
		let dateLink = document.createElement('a');
		let scheduleId = "schedule-" + id;
		let dateOnclick = "goToSchedule(\'schedule\', \'nav-schedule\', \'" + scheduleId + "\')";
		dateLink.setAttribute('onClick', dateOnclick)

		dateLink.innerHTML = dateString + ", " + sLookup[id].time;
		date.appendChild(dateLink);

		workshopHead.appendChild(title);
		workshopHead.appendChild(author);
		workshopHead.appendChild(affiliationW);
		workshopHead.appendChild(date);



		let abstractElement = document.createElement("div");
		abstractElement.setAttribute("id", contentId);
		abstractElement.classList.add('abstract');
		abstractElement.classList.add('hidden');

		let paragraphs = list[i].abstract.split("\\n");
		for (let j=0; j<paragraphs.length; j++) {
			let abstractP = document.createElement("p");
			abstractP.classList.add("abstract-content");
			abstractP.innerHTML = paragraphs[j];
			abstractElement.appendChild(abstractP);
		}

		if (list[i].slides) {
			let slidesElement = document.createElement("p");
			slidesElement.classList.add("abstract-content");
			abstractElement.appendChild(slidesElement);
			let slides = `<a class="slides" target="_blank" href="${list[i].slides}">slides</a>`;
			slidesElement.innerHTML = slides;
		}

		item.appendChild(workshopHead);
		item.appendChild(abstractElement);
		container.appendChild(item);
	}
}
