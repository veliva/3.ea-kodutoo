window.onload = function(){
    document.getElementById("addBtn").addEventListener("click", addURLstorage);
    showHighScores();
    document.getElementById("clearAllBtn").addEventListener("click", clearStorage);
    document.getElementById("removeBtn").addEventListener("click", removeURLstorage);
};

function clearStorage () {
    window.localStorage.clear();
    showHighScores();
}

function addURLstorage(){
    let newUrl = document.getElementById("addURL").value;
    saveScore(newUrl);
}

function removeURLstorage(){
    let newUrl = document.getElementById("removeURL").value;
    deleteUrl(newUrl);
}

function saveScore (newUrl) {
    arr = []
    if (window.localStorage.length == 0) {
        url = [newUrl]
        arr.push(url)
        localStorage.setItem('arr', JSON.stringify(arr));
    } else {
        let stored = JSON.parse(localStorage.getItem('arr'));
        let url2 = [newUrl];
        stored.push(url2);
        localStorage.setItem('arr', JSON.stringify(stored));
    }
    document.getElementById('addURL').value = ''
    showHighScores();
}

function deleteUrl (newUrl) {
    let stored = JSON.parse(localStorage.getItem('arr'));
    for (let i=0; i<stored.length; i++) {
        if (stored[i][0] === newUrl) {
            stored.splice(i, 1);
            localStorage.setItem('arr',JSON.stringify(stored));
            stored = JSON.parse(localStorage.getItem('arr'));
            i = -1;
        }
    }
    document.getElementById('removeURL').value = ''
    showHighScores();
}

function showHighScores() {
    document.getElementById('URLs').innerHTML = ''
    let stored = JSON.parse(localStorage.getItem('arr'));
    for (let i=0; i<stored.length; i++) {
        document.getElementById('URLs').innerHTML += "<p style='font-size:150%;'>"+stored[i]+"</p>";
    }
}
