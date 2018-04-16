document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('options').addEventListener('click', function(){
		window.open("options.html");
	})

	document.getElementById('tabs').addEventListener('click', function(){
		let stored = JSON.parse(localStorage.getItem('arr'));
		for (let i=0; i<stored.length; i++) {
			let newURL = "https://" + stored[i][0];
			chrome.tabs.create({ url: newURL });
		}
	})
})