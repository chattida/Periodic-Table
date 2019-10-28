let table = document.getElementById("pt-table")
let requestURL = ''
let json_obj

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
    json_obj = obj
    let txt = ""
    let count = 0 // 1
    for (let i = 1; i < 11; i++) {
        txt += `<tr>`
        for (let j = 1; j < 19; j++) {
            if (i == 1 && j == 2) {
                // row = 1, col = 2
                txt += `<td class="empty-box"></td>`
            } else if (i == 1 && j == 3) {
                // boxArea-1
                console.log(count)
                txt += `<td colspan="3" rowspan="3" id="boxArea-1">
                        <table>
                            <tr>
                                <td class="element-bigbox ${colorTable(obj[0].Type)}">
                                    <bigbox>
                                        <bigNumber>${obj[0].AtomicNumber}</bigNumber>
                                        <bigSymbol>${obj[0].Symbol}</bigSymbol>
                                        <bigElement>${obj[0].Element}</bigElement>
                                        <bigMass>${obj[0].AtomicMass}</bigMass>
                                    </bigbox>
                                </td>
                            </tr>
                        </table>
                </td>`
            } else if (i == 1 && j == 4) {
                // boxArea-2
                txt += `<td colspan="7" rowspan="3" class="text-center" id="boxArea-2">boxArea-2</td>`
            } else if (i == 1 && j == 5) {
                // boxArea-3
                txt += `<td colspan="5" rowspan="1" class="text-center" id="boxArea-3">boxArea-3</td>`
            } else if (i == 1 && (j > 5 && j < 18)) {
                // row = 1, col > 5, col < 18
                continue
            } else if (i == 2 && (j > 2 && j < 13)) {
                // row = 2, col > 2, col < 13
                continue
            } else if (i == 3 && (j > 2 && j < 13)) {
                // row = 3, col > 2, col < 13
                continue
            } else if (i == 6 && j == 3) {
                // row = 6, col = 3
                txt += `<td class="element-box text-center cl_Lanthanide" id="119"><number>57-71</number></td>`
            } else if (i == 7 && j == 3) {
                // row = 7, col = 3
                txt += `<td class="element-box text-center cl_Actinide" id="120"><number>89-103</number></td>`
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
                txt += `<td class="element-box `
                txt += colorTable(obj[count].Type)
                txt += `" id="${obj[count].AtomicNumber}" onmouseover="toShow(${obj[count].AtomicNumber})"> 
                            <a class="datalink" href="./data.php?id=${count + 1}">
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

//กลุ่มธาติ
function mygroup(choose) {
    for(let i=1; i<=120; i++) {
        myset = document.getElementById(i);
        if((choose == 1 && (i == 1 || i == 3 || i == 11 || i == 19 || i == 37 || i == 55 || i == 87)) ||
           (choose == 2 && (i == 4 || i == 12 || i == 20 || i == 38 || i == 56 || i == 88)) ||
           (choose == 3 && (i == 21 || i == 39 || (i >= 57 && i <= 71) || (i >= 89 && i <= 103) || i == 119 || i == 120)) ||
           (choose == 4 && (i == 22 || i == 40 || i == 72 || i == 104)) ||
           (choose == 5 && (i == 23 || i == 41 || i == 73 || i == 105)) ||
           (choose == 6 && (i == 24 || i == 42 || i == 74 || i == 106)) ||
           (choose == 7 && (i == 25 || i == 43 || i == 75 || i == 107)) ||
           (choose == 8 && (i == 26 || i == 44 || i == 76 || i == 108)) ||
           (choose == 9 && (i == 27 || i == 45 || i == 77 || i == 109)) ||
           (choose == 10 && (i == 28 || i == 46 || i == 78 || i == 110)) ||
           (choose == 11 && (i == 29 || i == 47 || i == 79 || i == 111)) ||
           (choose == 12 && (i == 30 || i == 48 || i == 80 || i == 112)) ||
           (choose == 13 && (i == 5 || i == 13 || i == 31 || i == 49 || i == 81 || i == 113)) ||
           (choose == 14 && (i == 6 || i == 14 || i == 32 || i == 50 || i == 82 || i == 114)) ||
           (choose == 15 && (i == 7 || i == 15 || i == 33 || i == 51 || i == 83 || i == 115)) ||
           (choose == 16 && (i == 8 || i == 16 || i == 34 || i == 52 || i == 84 || i == 116)) ||
           (choose == 17 && (i == 9 || i == 17 || i == 35 || i == 53 || i == 85 || i == 117)) ||
           (choose == 18 && (i == 2 || i == 10 || i == 18 || i == 36 || i == 54 || i == 86 || i == 118)) ||
           (choose == "x")) {
            myset.style.opacity = "1";
        }else {
            myset.style.opacity = "0.25";
        }
    }
}

// get cookie function
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

// display big-element box
function toShow(n) {
    n = n - 1
    let element_bigbox = document.getElementsByClassName("element-bigbox")
    let bigNumber = document.getElementsByTagName("bigNumber")
    let bigSymbol = document.getElementsByTagName("bigSymbol")
    let bigElement = document.getElementsByTagName("bigElement")
    let bigMass = document.getElementsByTagName("bigMass")
    element_bigbox[0].className = "element-bigbox";
    element_bigbox[0].classList.add(colorTable(json_obj[n].Type))
    element_bigbox[0].style.display = "table-cell"
    bigNumber[0].innerHTML = json_obj[n].AtomicNumber
    bigSymbol[0].innerHTML = json_obj[n].Symbol
    bigElement[0].innerHTML = json_obj[n].Element
    bigMass[0].innerHTML = json_obj[n].AtomicMass
}

// colorTable function
function colorTable(type) {
    //color table
    if(type == "อโลหะ" || type == "Nonmetal" || type == "Halogen") return `cl_Nonmetal`;
    else if(type == "โลหะอัลคาไล" || type == "Alkali Metal") return `cl_AlkaliMetal`;
    else if(type == "โลหะอัลคาไลน์เอิร์ธ" || type == "Alkaline Earth Metal") return `cl_AlkalineEarthMetal`;
    else if(type == "กึ่งโลหะ" || type == "Metalloid") return `cl_Metalloid`;
    else if(type == "ก๊าซเฉี่อย" || type == "Noble Gas") return `cl_NobleGas`;
    else if(type == "โลหะหลังทรานซิชัน" || type == "Post-transition metals") return `cl_PostMetal`;
    else if(type == "โลหะทรานซิชัน" || type == "Transition Metal") return `cl_TransitionMetal`;
    else if(type == "แลนทาไนด์" || type == "Lanthanide") return `cl_Lanthanide`;
    else if(type == "แอกทิไนด์" || type == "Actinide") return `cl_Actinide`;
    else if(type == "") return `cl_artificial`;
}