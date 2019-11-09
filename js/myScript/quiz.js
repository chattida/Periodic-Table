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
    let score = 0, correct = [], states = ["ของแข็ง", "ของเหลว", "แก็ส", "ไม่ทราบ"]
    let presetQ = [0, 1, 2, 3, 4]
    for (i = 0; i < 5; i++) {
        correct = (json_obj[i][Math.floor(Math.random() * json_obj[i].length)])
        switch (presetQ.splice(Math.floor(Math.random() * presetQ.length), 1)[0]) {
            case 0:
                //ชื่อเต็มของธาตุน้คืออะไร
                quizDialog = "ชื่อเต็มของธาตุ " + correct.Symbol + " คืออะไร"
                console.log(quizDialog)
                for (j in json_obj[i]){
                    console.log(json_obj[i][j].Element)
                }
                console.log(correct)
                break
            case 1:
                //ชื่อย่อของธาตุน้คืออะไร
                quizDialog = "ชื่อย่อของธาตุ " + correct.Element + " คืออะไร"
                console.log(quizDialog)
                for (j in json_obj[i]){
                    console.log(json_obj[i][j].Symbol)
                }
                console.log(correct)
                break
            case 2:
                //ธาตุอยู่หมุ่อะไร
                quizDialog = "ธาตุ " + correct.Element + " อยู่หมุ่อะไร"
                console.log(quizDialog)
                for (j in json_obj[i]){
                    console.log(json_obj[i][j].Element)
                }
                console.log(correct)
                break
            case 3:
                //เลขอะตอมธาตุน้คืออะไร
                quizDialog = "เลขอะตอมของธาตุ " + correct.Element + " คืออะไร"
                console.log(quizDialog)
                for (j in json_obj[i]){
                    console.log(json_obj[i][j].Element)
                }
                console.log(correct)
                break
            case 4:
                //ธาตุนีทีสถานะอะไร
                quizDialog = "ธาตุ " + correct.Element + " นีทีสถานะอะไร"
                console.log(quizDialog)
                for (j in states){
                    console.log(states[j])
                }
                console.log(correct)
                break
        }
    }
    // console.log(correct)
}

// get cookie function
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}