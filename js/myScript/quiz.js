let requestURL = '../../data/elements_th.json'
let json_obj

let request = new XMLHttpRequest()
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        let dataJSON = JSON.parse(request.responseText)
        generateQuiz(dataJSON)
    }
}
request.open("GET", requestURL, true)
request.send()

function generateQuiz(obj) {
    json_obj = obj
    let qArray = {}
    var randomItem = json_obj[Math.floor(Math.random() * json_obj.length)]
    console.log(randomItem)

}

// get cookie function
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}