getComputedStyle(document.documentElement).getPropertyValue("--hdr-cul");
getComputedStyle(document.documentElement).getPropertyValue("--mai-cul");
getComputedStyle(document.documentElement).getPropertyValue("--asi-cul");
getComputedStyle(document.documentElement).getPropertyValue("--ftr-cul");
document.documentElement.style.setProperty("--hdr-cul","yellow");
var input_ftr = document.querySelector('input');
var footer = document.querySelector('footer');
input.addEventListener('change',function(){
	footer.style.setProperty()
})