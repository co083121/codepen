/*




https://www.w3schools.com/css/css_rwd_images.asp

*/
$(document).ready(function(){
	var header = $('header'), btn = $('button');
	btn.on('click', function(){
		header.toggleClass('active');
	});
});
