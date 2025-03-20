let items = document.querySelectorAll(".faq-main .faq-item");
items.forEach(function (t) {
	t.addEventListener("click", function (e) {
		items.forEach(function (e) {
			e !== t || e.classList.contains("faq-item-show")
				? e.classList.remove("faq-item-show")
				: e.classList.add("faq-item-show");
		});
	});
});


let endDate = new Date("April 4, 2025").getTime();
let currentDateElement = document.getElementById("currentDate");

function updateDate() {
	let now = new Date().getTime();
	if (now >= endDate) {
		let endDateObj = new Date(endDate);
		currentDateElement.innerHTML = endDateObj.toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
		clearInterval(dateInterval);
	} else {
		let currentDate = new Date();
		currentDateElement.innerHTML = currentDate.toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
	}
}

let dateInterval = setInterval(updateDate, 1000);
updateDate();