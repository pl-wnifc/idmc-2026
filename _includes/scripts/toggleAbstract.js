


//////////////////////////////
//
// toggleAbstract --
//

function toggleAbstract(id) {
	let abstracts = document.querySelectorAll(".abstract");
	//console.log("abstracts and workshops?", abstracts);
	let target;
	for (let a of abstracts) {
		if (a.classList.contains("hidden")) {
			if (a.id == id) {
				a.classList.remove("hidden");
				//console.log("a = ", a);
				target = a;
			}
		} else {
			a.classList.add("hidden");
		}
	}




	if (target) {
		scrollToElement(target.previousElementSibling, 80);
	}

}
