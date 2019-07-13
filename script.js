window.onhashchange = function() {
	checkHash();
}

checkHash();

function loadPage(pageName) {
	$.ajax('pages/' + pageName + ".html", { 
		type: 'GET', 
		dataType: 'html', 
		success: dataLoaded, 
		error: errorHandler 
	});
}

function dataLoaded(data) {
	document.getElementById('main').innerHTML = data;
	switch (window.location.hash.slice(1)) {
		case 'main':
			document.getElementsByTagName('button')[0].addEventListener('click', function() {
				console.log(this.innerHTML);
			});
			break;
		case 'contacts':
			document.getElementsByTagName('button')[0].addEventListener('click', function() {
				console.log(this);
			});
			break;
	}
}

function errorHandler() {
	loadPage('main');
}

function checkHash() {
	var URLHash = window.location.hash;
	if (!URLHash) {
		loadPage('main');
		return false;
	}
	
	var hashStr = URLHash.slice(1);
	loadPage(hashStr);
}