


//////////////////////////////
//
// goToDescription --
//

function goToSchedule(tab, navtab, targetId) {
	let target = document.getElementById(targetId)
	console.log(target);
	activateTab(tab, navtab);
	setTimeout(() => {
			let target = document.getElementById(targetId);
			console.log(target);
			if (target) {
					scrollToElement(target, 80);
			}
	}, 50);
}



