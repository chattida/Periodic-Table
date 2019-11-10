let requestURL = ''
let json_obj, rest, list
let qarea = document.getElementById("question")
let elem = document.getElementById('myBar')
let qbox1 = document.getElementById('ansbox1')
let qbox2 = document.getElementById('ansbox2')
let qbox3 = document.getElementById('ansbox3')
let qbox4 = document.getElementById('ansbox4')
let sbox = document.getElementById('startbox')
let qTitle = document.getElementById('quizTitle')
let clickGame = 0
let gameCounter = 0
let winCounter = 0
let quizDialog = []
let presetQ = [0, 1, 2, 3, 4]

if (getCookie("lang") == "th") {
    requestURL = '../../data/elements_th.json'
} else if (getCookie("lang") == "en") {
    requestURL = '../../data/elements_en.json'
}

let request = new XMLHttpRequest()
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        let dataJSON = JSON.parse(request.responseText)
        rest = generateQuiz(dataJSON)
    }
}
request.open("GET", requestURL, true)
request.send()

function generateQuiz(obj) {
    json_obj = obj
    let qArr = [],
        groupCheck = [],
        list = []
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
    let correct = [],
        ansArray = []
    qTitle.style.display = "block"

    ansLocation = Math.floor(Math.random() * json_obj[gameCounter].length)
    correct = (json_obj[gameCounter][ansLocation])
    switch (presetQ.splice(Math.floor(Math.random() * presetQ.length), 1)[0]) {
        case 0:
            //ชื่อเต็มของธาตุน้คืออะไร
            quizDialog[0] = "ชื่อเต็มของธาตุ " + correct.Symbol + " คืออะไร"
            quizDialog[1] = 0
            for (j in json_obj[gameCounter]) ansArray.push(json_obj[gameCounter][j].Element);
            break
        case 1:
            //ชื่อย่อของธาตุน้คืออะไร
            quizDialog[0] = "ชื่อย่อของ " + correct.Element + " คืออะไร"
            quizDialog[1] = 1
            for (j in json_obj[gameCounter]) ansArray.push(json_obj[gameCounter][j].Symbol);
            break
        case 2:
            //ธาตุอยู่หมุ่อะไร
            quizDialog[0] = correct.Element + " อยู่หมู่อะไร"
            quizDialog[1] = 2
            for (j in json_obj[gameCounter]) ansArray.push(json_obj[gameCounter][j].Group);
            break
        case 3:
            //เลขอะตอมธาตุน้คืออะไร
            quizDialog[0] = "เลขอะตอมของธาตุ " + correct.Element + " คืออะไร"
            quizDialog[1] = 3
            for (j in json_obj[gameCounter]) ansArray.push(json_obj[gameCounter][j].AtomicNumber);
            break
        case 4:
            //ธาตุนีทีสถานะอะไร
            quizDialog[0] = correct.Element + " มีสถานะอะไร"
            quizDialog[1] = 4
            ansArray = ["ของแข็ง", "ของเหลว", "ก๊าซ", "ของเทียม"]
            for (j = 0; j < 4; j++) if (ansArray[j].localeCompare(json_obj[gameCounter][j].State)) {
                ansLocation = j
                break
            }
            break
    }
    list = [quizDialog, ansArray, correct, ansLocation]
    qTitle.innerHTML = quizDialog[0]
    qbox1.innerHTML = ansArray[0]
    qbox2.innerHTML = ansArray[1]
    qbox3.innerHTML = ansArray[2]
    qbox4.innerHTML = ansArray[3]
}

// get cookie function
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

function move() {
    if (gameCounter < 5) {
        let width = 100;
        var id = setInterval(frame, 150);
        displayQuiz(rest)
        elem.style.backgroundColor = "#505050"
        qbox1.style.display = "block"
        qbox2.style.display = "block"
        qbox3.style.display = "block"
        qbox4.style.display = "block"
        elem.style.display = "block"
        sbox.innerHTML = ""
        clickGame = 0

        function frame() {
            if (width <= 0) {
                clearInterval(id);
                qbox1.style.display = "none"
                qbox2.style.display = "none"
                qbox3.style.display = "none"
                qbox4.style.display = "none"
                qTitle.style.display = "none"
                gameCounter++
                sbox.innerHTML = "Continue"

            } else if (clickGame != 0) {
                clearInterval(id);
                qbox1.style.display = "none"
                qbox2.style.display = "none"
                qbox3.style.display = "none"
                qbox4.style.display = "none"
                gameCounter++
                sbox.innerHTML = "Continue"

            } else if (width < 51) {
                elem.style.backgroundColor = "red"
                width--
                elem.style.width = width + '%'

            } else {
                width--
                elem.style.width = width + '%'
            }
        }
    } else {
        qTitle.innerHTML = "คุณทำได้ " + winCounter + "/5 คะแนน"
        sbox.innerHTML = "เล่นอีกรอบ"
        presetQ = [0, 1, 2, 3, 4]
        gameCounter = 0
        winCounter = 0
    }
}

function clickChoice(ans) {
    if (ans === list[3]) {
        qTitle.innerHTML = "ถูกต้อง"
        winCounter++
    } else {
        qTitle.innerHTML = "ผิด คำตอบคือที่ถูกต้องคือ " + list[1][list[3]]
    }
    clickGame++;
}

function arraysEqual(a1, a2) {
    return JSON.stringify(a1) === JSON.stringify(a2);
}