let table = document.getElementById("pt-table")
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
            showTable(dataJSON)
        }
    }
    request.open("GET", requestURL, true)
    request.send()

function showTable(obj) {
    let txt = ""
    let count = 0 // 1
    for (let i = 1; i < 11; i++) {
        txt += `<tr>`
        for (let j = 1; j < 19; j++) {
            if (i == 1 && (j > 1 && j < 18)) {
                // row = 1, col > 1, col < 18
                txt += `<td class="empty-box"></td>`
            } else if (i == 2 && (j > 2 && j < 13)) {
                // row = 2, col > 2, col < 13
                txt += `<td class="empty-box"></td>`
            } else if (i == 3 && (j > 2 && j < 13)) {
                // row = 3, col > 2, col < 13
                txt += `<td class="empty-box"></td>`
            } else if (i == 6 && j == 3) {
                // row = 6, col = 3
                txt += `<td class="element-box text-center cl_Lanthanide"><number>57-71</number></td>`
            } else if (i == 7 && j == 3) {
                // row = 7, col = 3
                txt += `<td class="element-box text-center cl_Actinide"><number>89-103</number></td>`
            } else if (i == 8) {
                // row = 8
                txt += `<td class="empty-box"></td>`
            } else if (i == 9 && j < 4) {
                // row = 9, col < 4
                txt += `<td class="empty-box"></td>`
            } else if (i == 10 && j < 4) {
                // row = 10, col < 4
                txt += `<td class="empty-box"></td>`
            } else {
                if (i == 6 && j == 4) {
                    count = 71 // 72
                } else if (i == 7 && j == 4) {
                    count = 103 // 104
                } else if (i == 9 && j == 4) {
                    count = 56 // 57
                } else if (i == 10 && j == 4) {
                    count = 88 // 89
                }
                txt += `<td class="element-box `;
                //color table
                if(`${obj[count].Type}` == "อโลหะ" || `${obj[count].Type}` == "Nonmetal" || `${obj[count].Type}` == "Halogen") txt += `cl_Nonmetal`;
                else if(`${obj[count].Type}` == "โลหะอัลคาไล" || `${obj[count].Type}` == "Alkali Metal") txt += `cl_AlkaliMetal`;
                else if(`${obj[count].Type}` == "โลหะอัลคาไลน์เอิร์ธ" || `${obj[count].Type}` == "Alkaline Earth Metal") txt += `cl_AlkalineEarthMetal`;
                else if(`${obj[count].Type}` == "กึ่งโลหะ" || `${obj[count].Type}` == "Metalloid") txt += `cl_Metalloid`;
                else if(`${obj[count].Type}` == "ก๊าซเฉี่อย" || `${obj[count].Type}` == "Noble Gas") txt += `cl_NobleGas`;
                else if(`${obj[count].Type}` == "โลหะหลังทรานซิชัน" || `${obj[count].Type}` == "Post-transition metals") txt += `cl_PostMetal`;
                else if(`${obj[count].Type}` == "โลหะทรานซิชัน" || `${obj[count].Type}` == "Transition Metal") txt += `cl_TransitionMetal`;
                else if(`${obj[count].Type}` == "แลนทาไนด์" || `${obj[count].Type}` == "Lanthanide") txt += `cl_Lanthanide`;
                else if(`${obj[count].Type}` == "แอกทิไนด์" || `${obj[count].Type}` == "Actinide") txt += `cl_Actinide`;
                else if(`${obj[count].Type}` == "") txt += `cl_artificial`;
                txt += `">
                            <box>
                                <number>${obj[count].AtomicNumber}</number>
                                <symbol>${obj[count].Symbol}</symbol>
                                <element>${obj[count].Element}</element>
                                <mass>${obj[count].AtomicMass}</mass>
                            </box>
                        </td>`
                count++
            }
        }
        txt += `</tr>`
    }
    table.innerHTML = txt
}

function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}