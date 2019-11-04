let element_list = document.getElementById("element_list")
let requestURL = ''

if (getCookie("lang") == "th") {
    requestURL = '../data/elements_th.json'
} else if (getCookie("lang") == "en") {
    requestURL = '../data/elements_en.json'
}

let request = new XMLHttpRequest()
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        let dataJSON = JSON.parse(request.responseText)
            showList(dataJSON)
        }
    }
    request.open("GET", requestURL, true)
    request.send()
