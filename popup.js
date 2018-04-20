document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('options').addEventListener('click', function () {
		window.open("options.html")
	})

	document.getElementById('tabs1').addEventListener('click', function () {
		let stored = JSON.parse(localStorage.getItem('arr'))
		for (let i=0; i<stored.length; i++) {
			if (stored[i].tabs1 != undefined) {
				let newURL = "https://" + stored[i].tabs1
			chrome.tabs.create({ url: newURL })
			}
		}
	})

	document.getElementById('tabs2').addEventListener('click', function () {
		let stored = JSON.parse(localStorage.getItem('arr'))
		for (let i=0; i<stored.length; i++) {
			if (stored[i].tabs2 != undefined) {
				let newURL = "https://" + stored[i].tabs2
			chrome.tabs.create({ url: newURL })
			}
		}
	})
})