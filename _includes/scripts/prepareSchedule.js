
function prepareSchedule(schedule) {
	console.log(pLookup);
	for (var d in schedule) {
		//console.log(schedule[d]);
		//console.log(formatDate(d));
		let container = document.querySelector("#schedule-container");
		let dayDiv = document.createElement('div');
		dayDiv.setAttribute('id', d);
		dayDiv.classList.add('day');
		let dayHead = document.createElement('h2');
		dayHead.innerHTML = formatDate(d);
		dayDiv.appendChild(dayHead);
		
		let dayTable = document.createElement('table');
		dayTable.classList.add("tg");
		let dayTbody = document.createElement('tbody');
		
		for (var row of schedule[d]) {
			let dayEvent = document.createElement('tr');
			//console.log(row);
			let eventTimeCell = document.createElement('td');
			eventTimeCell.classList.add('hour');
			eventTimeCell.innerHTML = row['time'];
			dayEvent.appendChild(eventTimeCell);
			
			let eventCell = document.createElement('td');
			eventCell.classList.add('event');
			
			if (row['presentationId'] == "") {
				eventCell.innerHTML = row['event'];
			} else {
				let presentation;
				if (pLookup[row['presentationId']]) {
					presentation = pLookup[row['presentationId']];
				} else if (wLookup[row['presentationId']]) {
					presentation = wLookup[row['presentationId']];
				}
				console.log(presentation);
					//pLookup[row['presentationId']];
				let presentationDiv = document.createElement('div');
				if (row['event'] == 'keynote') {
					let keynoteLabel = document.createElement('p');
					keynoteLabel.classList.add('schedule-label');
					keynoteLabel.innerHTML = "Keynote: ";
					presentationDiv.appendChild(keynoteLabel);
				}
				if (row['event'] == 'workshop') {
					let workshopLabel = document.createElement('p');
					workshopLabel.classList.add('schedule-label');
					workshopLabel.innerHTML = "Workshop: ";
					presentationDiv.appendChild(workshopLabel);
				}
				let presentationLink = document.createElement('b');
				presentationLink.classList.add('linkicon');
				let onclick = "goToDescription(" + "\'abstracts\', \'nav-abstracts\', \'\', \'" + row['presentationId'] + "\')";
				presentationLink.setAttribute('onclick', onclick);
				presentationLink.innerHTML = presentation['title'];
				presentationDiv.appendChild(presentationLink);
				let br = document.createElement("br");
				presentationDiv.appendChild(br);
				let allPresenters = document.createElement("p");
				allPresenters.classList.add('schedule-presenters');
				let allPresentersIdList = getPresentersList(presentation['presenter']);
				//console.log(allPresentersIdList);
				let allPresentersList = [];
				for (var prId of allPresentersIdList) {
					let pr = hLookup[prId]['first-name'] + " " + hLookup[prId]['last-name'];
					allPresentersList.push(pr);
				}
				allPresenters.innerHTML = allPresentersList.join(', ');
				presentationDiv.appendChild(allPresenters);



				eventCell.appendChild(presentationDiv)
				
			}
			
			dayEvent.appendChild(eventCell);
			dayTbody.appendChild(dayEvent);
		}
		
		dayTable.appendChild(dayTbody);
		dayDiv.appendChild(dayTable);
		
		container.appendChild(dayDiv);
	}
}