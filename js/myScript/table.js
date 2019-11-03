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
                txt += `<td colspan="5" rowspan="1" class="text-center" id="pt-phase">`
                if (getCookie("lang") == "th") {
                    txt += `ประเภทธาตุ : 
                    <a onmouseover="mygroup('ของแข็ง')" class="btn btn-light" alt="ของแข็ง" title="ของแข็ง"><i class="fas fa-cubes"></i></a>
                    <a onmouseover="mygroup('ของเหลว')" class="btn btn-light" alt="ของเหลว" title="ของเหลว"><i class="fas fa-tint"></i></a>
                    <a onmouseover="mygroup('ก๊าซ')" class="btn btn-light" alt="ก๊าซ" title="ก๊าซ"><i class="fas fa-wind"></i></a>
                    <a onmouseover="mygroup('Unknown')" class="btn btn-light" alt="ไม่ทราบ" title="ไม่ทราบ"><i class="fas fa-question-circle"></i></a>`
                } else if (getCookie("lang") == "en") {
                    txt += `
                    Phase : 
                            <a onmouseover="mygroup('solid')" class="btn btn-light" alt="Solid" title="Solid"><i class="fas fa-cubes"></i></a>
                            <a onmouseover="mygroup('liquid')" class="btn btn-light" alt="Liquid" title="Liquid"><i class="fas fa-tint"></i></a>
                            <a onmouseover="mygroup('gas')" class="btn btn-light" alt="Gas" title="Gas"><i class="fas fa-wind"></i></a>
                            <a onmouseover="mygroup('Unknown')" class="btn btn-light" alt="Unknown" title="Unknown"><i class="fas fa-question-circle"></i></a>`
                }
                txt += `</td>`
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
                txt += `<td class="element-box text-center cl_Lanthanide" id="119" onmouseover="mygroup('more1')"><number>57-71</number></td>`
            } else if (i == 7 && j == 3) {
                // row = 7, col = 3
                txt += `<td class="element-box text-center cl_Actinide" id="120" onmouseover="mygroup('more2')"><number>89-103</number></td>`
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
    for(let i=1; i<=118; i++) {
        myset = document.getElementById(i);
        if (choose == "more1" || choose == "more2" || choose == "x") {
            if ((choose == "more1" && (i>=57 && i<=71)) || (choose == "more2" && (i>=89 && i<=103))) 
                myset.style.opacity = "1";
            else if (choose == "x") myset.style.opacity = "1";
            else myset.style.opacity = "0.25";
        }
        else if ((choose == json_obj[i-1].Phase || (json_obj[i-1].Phase == "ของเทียม" && choose == "ของแข็ง") || 
                (json_obj[i-1].Phase == "artificial" && choose == "solid")) && i<104) 
                myset.style.opacity = "1";
        else if (choose == 'Unknown' && i>=104) myset.style.opacity = "1";
        else if (choose == json_obj[i-1].Group) myset.style.opacity = "1";
        else myset.style.opacity = "0.25";
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
    mygroup("x")
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