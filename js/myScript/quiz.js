let requestURL = ''
let json_obj

if (getCookie("lang") == "th") {
    requestURL = '../../data/elements_th.json'
} else if (getCookie("lang") == "en") {
    requestURL = '../../data/elements_en.json'
}

let request = new XMLHttpRequest()
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        let dataJSON = JSON.parse(request.responseText)
        let presetAns = generateQuiz(dataJSON)
        displayQuiz(presetAns)
    }
}
request.open("GET", requestURL, true)
request.send()

function generateQuiz(obj) {
    json_obj = obj
    let qArr = []
    let qSet = new Set()
    for (i = 0; i < 5; i++) {
        while (qSet.size < 4) qSet.add(json_obj[Math.floor(Math.random() * json_obj.length)]);
        let array = Array.from(qSet);
        qArr.push(array)
        qSet.clear()
    }
    return qArr
}

function displayQuiz(obj) {
    json_obj = obj
    console.log(json_obj[2][3].Element)
}

// get cookie function
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}