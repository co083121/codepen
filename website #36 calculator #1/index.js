const keys = document.querySelector('.keys');
keys.addEventListener('click', (event) => {
	// Access the clicked element
	const {target} = event;
	if (target.value == "C") {
		document.getElementById("answer").value = "";
	}
document.getElementById("answer").value += target.value;
console.log('digit', target.matches('button'));
});