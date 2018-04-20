window.onload = function () {
    document.getElementById("addBtn").addEventListener("click", addURLstorage)
    showAllURLs()
    document.getElementById("clearAllBtn").addEventListener("click", clearStorage)
    document.getElementById("removeBtn").addEventListener("click", removeURLstorage)
}

function clearStorage () {
    window.localStorage.clear();
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

    if (document.getElementById('addRadio1').checked == true) {
        url = {tabs1 : newUrl}
    } else {
        url = {tabs2 : newUrl}
    }

    if (window.localStorage.length == 0) {
        arr.push(url)
        localStorage.setItem('arr', JSON.stringify(arr))
    } else {
        let stored = JSON.parse(localStorage.getItem('arr'))
        stored.push(url)
        localStorage.setItem('arr', JSON.stringify(stored))
    }
    document.getElementById('addURL').value = ''
    showAllURLs()
}

function deleteUrl (newUrl) {
    let stored = JSON.parse(localStorage.getItem('arr'))
    i = 0

    if (document.getElementById('removeRadio1').checked == true) {
        for (i=0; i<stored.length; i++) {
            if (stored[i].tabs1 === newUrl) {
                stored.splice(i, 1)
                localStorage.setItem('arr',JSON.stringify(stored))
                stored = JSON.parse(localStorage.getItem('arr'))
                i = -1
            }
        }
    } else {
        for (i=0; i<stored.length; i++) {
            if (stored[i].tabs2 === newUrl) {
                stored.splice(i, 1)
                localStorage.setItem('arr',JSON.stringify(stored))
                stored = JSON.parse(localStorage.getItem('arr'))
                i = -1
            }
        }
    }

    document.getElementById('removeURL').value = ''
    showAllURLs()
}

function showAllURLs () {
    document.getElementById('URLs1').innerHTML = ''
    document.getElementById('URLs2').innerHTML = ''
    let stored = JSON.parse(localStorage.getItem('arr'))
    for (let i=0; i<stored.length; i++) {
        if (stored[i].tabs1 != undefined) {
            document.getElementById('URLs1').innerHTML += "<p style='font-size:150%;'>"+stored[i].tabs1+"</p>"
        }
        if (stored[i].tabs2 != undefined) {
            document.getElementById('URLs2').innerHTML += "<p style='font-size:150%;'>"+stored[i].tabs2+"</p>"
        }
        
    }
}
