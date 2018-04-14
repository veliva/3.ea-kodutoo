window.onload = function(){
    document.getElementById("addBtn").addEventListener("click", addURLstorage);
    showHighScores();
};

function addURLstorage(){
    var pageUrl = document.getElementById("addURL").value;
    console.log("salvestatud: " + pageUrl);
    saveScore(pageUrl);
}

function saveScore (pageUrl) {
    arr = []
    if (window.localStorage.length == 0) {
        url = [pageUrl]
        arr.push(url)
        localStorage.setItem('arr', JSON.stringify(arr));
    } else {
        let stored = JSON.parse(localStorage.getItem('arr'));
        let url2 = [pageUrl];
        stored.push(url2);
        localStorage.setItem('arr', JSON.stringify(stored));
    }
    showHighScores();
}

function showHighScores() {
    document.getElementById('URLs').innerHTML = ''
    let unsorted = JSON.parse(localStorage.getItem('arr'));
    for (let i=0; i<unsorted.length; i++) {
        document.getElementById('URLs').innerHTML += "<p>"+unsorted[i]+"</p>";
    }
}
