const keys = document.querySelector(".xxx");
keys.addEventListener("click",e =>{
	if (e.target.matches("button")){
		const key = e.target;
		const a = key.textcontent;
		const keep = key.textContent;
		document.getElementById("demo").innerHTML = keep;
	}
})
