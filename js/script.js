const timeList = document.querySelectorAll('.time__ul');
console.log(timeList);
for(child of timeList){
	let timeChildren = child.children;
	let lastChild = timeChildren[child.children.length-1].firstChild;
	if(timeChildren.length >= 4){
		for(let i = 3; i < child.children.length-1; i++){
			timeChildren[i].classList.toggle('d-none')
		}
		let pastText = lastChild.textContent;
		lastChild.textContent = "еще..";
		timeChildren[timeChildren.length-1].addEventListener("click", (e) => {
			for(let i = 0; i <= child.children.length-1; i++){
				timeChildren[i].classList.remove('d-none');
				lastChild.textContent = pastText;
			}
		})
	}
}

// -----------------------------------------------------------

let wayOption = document.querySelector('#route').value;
let timeOption = document.querySelector("#time").value;
let countValue = document.querySelector('#num').value;
const countBtn = document.querySelector('#count-btn');

countBtn.addEventListener('click', (e) => {
	wayOption = document.querySelector('#route').value;
	timeOption = document.querySelector("#time").value;
	countValue = document.querySelector('#num').value;
	console.log(wayOption + " " + timeOption + " " + countValue);
	document.querySelector('#way-text').textContent = wayOption
	// price
	if(wayOption == "ABA"){
		document.querySelector('#price-text').textContent = 1200 * countValue + "p";
		console.log(wayOption)
	}else if(wayOption == "AB" || "BA"){
		document.querySelector('#price-text').textContent = 700 * countValue + "p";
	}
	// time
	if(wayOption == "ABA"){
		document.querySelector('#time-text').textContent = "1 час 40 минут";
		console.log(wayOption)
	}else if(wayOption == "AB" || "BA"){
		document.querySelector('#time-text').textContent = "50 минут";
	}

})
document.querySelector("#route").addEventListener("change", (e) => {
	wayOption = document.querySelector('#route').value;
	if(wayOption == "AB"){
		document.querySelectorAll(".first-B").forEach((item) => {
			item.classList.add('d-none');
		})
	}else {
		document.querySelectorAll(".first-B").forEach((item) => {
			item.classList.remove('d-none');
		})
	}

	if(wayOption == "BA") {
		document.querySelectorAll(".first-A").forEach((item) => {
			item.classList.add('d-none');
		})
	}else {
		document.querySelectorAll(".first-A").forEach((item) => {
			item.classList.remove('d-none');
		})
	}

	if(wayOption == "ABA"){
		document.querySelectorAll(".first-B").forEach((item) => {
			item.classList.add('d-none');
		})
		document.querySelector("#time-B").classList.remove('d-none')
		for(child of document.querySelector('#time-B').children){
			child.classList.remove('d-none')
		}
	}else{
		document.querySelector("#time-B").classList.add('d-none')
	}
})