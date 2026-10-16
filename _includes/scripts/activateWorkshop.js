


//////////////////////////////
//
// activateWorkshop --
//

function activateWorkshop(wid, wcontent) {
	//let workshopDesc = document.querySelector('abstract');
  let workshopDesc = document.getElementsByClassName('abstract')
	let target;
		for (let i=0; i<workshopDesc.length; i++) {
		if (workshopDesc[i].classList.contains('hidden')) {
			if (workshopDesc[i].id == wcontent) {
				workshopDesc[i].classList.remove('hidden');
				//console.log("workshopDesc = ", workshopDesc[i]);
				target = workshopDesc[i];
			}
		} else {
			workshopDesc[i].classList.add('hidden');
		}
	}

	if (target) {
		scrollToElement(target.previousElementSibling, 80);
	}

	// let wdescription = document.querySelector(`${wcontent}`);
	// if (wdescription.classList.contains('hidden')) {
	//   console.log("open");
	//   wdescription.classList.remove('hidden');
	// } else {
	//   console.log("close");
	//   wdescription.classList.add('hidden');
	// }

}
