let requestURL = ''
let json_obj
let qarea = document.getElementById("question")
let clickgame = 0;

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
    let qArr = [],
        groupCheck = []
    let qSet = new Set()
    for (i = 0; i < 5; i++) {
        while (qSet.size < 4) {
            let adder = json_obj[Math.floor(Math.random() * json_obj.length)]
            if (groupCheck.includes(adder.Group) === false) {
                if ((parseInt(adder.Period) === 6 && parseInt(adder.Group) === 3) === false) {
                    if ((parseInt(adder.Period) === 7 && parseInt(adder.Group) === 3) === false) qSet.add(adder);
                }
            }

            groupCheck.push(adder.Group)
        }
        let array = Array.from(qSet);
        qArr.push(array)
        qSet.clear()
        groupCheck = []
    }
    return qArr
}

function displayQuiz(obj) {
    json_obj = obj
    let score = 0,
        txt = '',
        correct = [],
        ansArray = [],
        presetQ = [0, 1, 2, 3, 4]
    // let width = 100, id = setInterval(frame, 75)
    // function frame() {
    //     if (width <= 0) {
    //       clearInterval(id);
    //       document.getElementById("start").innerHTML = "Continue";
    //     }
    //     else if (clickgame != 0) {
    //       clearInterval(id);
    //       boxc1.style.display = "none";
    //       boxc2.style.display = "none";
    //       document.getElementById("start").innerHTML = "Continue";
    //     }
    //     else {
    //       width--;
    //       elem.style.width = width + '%';
    //     }
    //   }


    for (i = 0; i < 5; i++) {
        correct = (json_obj[i][Math.floor(Math.random() * json_obj[i].length)])
        switch (presetQ.splice(Math.floor(Math.random() * presetQ.length), 1)[0]) {
            case 0:
                //ชื่อเต็มของธาตุน้คืออะไร
                quizDialog = "ชื่อเต็มของธาตุ " + correct.Symbol + " คืออะไร"
                for (j in json_obj[i]) ansArray.push(json_obj[i][j].Element);
                break
            case 1:
                //ชื่อย่อของธาตุน้คืออะไร
                quizDialog = "ชื่อย่อของ " + correct.Element + " คืออะไร"
                for (j in json_obj[i]) ansArray.push(json_obj[i][j].Symbol);
                break
            case 2:
                //ธาตุอยู่หมุ่อะไร
                quizDialog = correct.Element + " อยู่หมู่อะไร"
                for (j in json_obj[i]) ansArray.push(json_obj[i][j].Group);
                break
            case 3:
                //เลขอะตอมธาตุน้คืออะไร
                quizDialog = "เลขอะตอมของธาตุ " + correct.Element + " คืออะไร"
                for (j in json_obj[i]) ansArray.push(json_obj[i][j].AtomicNumber);
                break
            case 4:
                //ธาตุนีทีสถานะอะไร
                quizDialog = correct.Element + " มีสถานะอะไร"
                ansArray = ["ของแข็ง", "ของเหลว", "แก็ส", "ไม่ทราบ"]
                break
        }
        console.log(quizDialog, ansArray, correct)




        ansArray = []
    }
}

// get cookie function
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}