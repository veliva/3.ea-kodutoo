window.onload = function () {
    document.getElementById("addBtn").addEventListener("click", addURLstorage)
    showAllURLs()
    document.getElementById("clearAllBtn").addEventListener("click", clearStorage)
    document.getElementById("removeBtn").addEventListener("click", removeURLstorage)
}

function clearStorage () {
    window.localStorage.clear()
    showAllURLs()
}

function addURLstorage () {
    let newUrl = document.getElementById("addURL").value
    saveURL(newUrl)
}

function removeURLstorage () {
    let newUrl = document.getElementById("removeURL").value
    deleteUrl(newUrl)
}

function saveURL (newUrl) {
    let arr = []
    if (window.localStorage.length == 0) {
        let url = [newUrl]
        arr.push(url)
        localStorage.setItem('arr', JSON.stringify(arr))
    } else {
        let stored = JSON.parse(localStorage.getItem('arr'))
        let url = [newUrl]
        stored.push(url)
        localStorage.setItem('arr', JSON.stringify(stored))
    }
    document.getElementById('addURL').value = ''
    showAllURLs()
}

function deleteUrl (newUrl) {
    let stored = JSON.parse(localStorage.getItem('arr'))
    for (let i=0; i<stored.length; i++) {
        if (stored[i][0] === newUrl) {
            stored.splice(i, 1)
            localStorage.setItem('arr',JSON.stringify(stored))
            stored = JSON.parse(localStorage.getItem('arr'))
            i = -1
        }
    }
    document.getElementById('removeURL').value = ''
    showAllURLs()
}

function showAllURLs () {
    document.getElementById('URLs').innerHTML = ''
    let stored = JSON.parse(localStorage.getItem('arr'))
    for (let i=0; i<stored.length; i++) {
        document.getElementById('URLs').innerHTML += "<p style='font-size:150%;'>"+stored[i]+"</p>"
    }
}
