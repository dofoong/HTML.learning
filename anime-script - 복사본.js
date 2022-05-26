var day = document.querySelector('#day')
var week = document.querySelector('#week')
var month = document.querySelector('#month')
var year = document.querySelector('#year')
var side1 = document.querySelector('#side1')
var side2 = document.querySelector('#side2')
var side3 = document.querySelector('#side3')
var side4 = document.querySelector('#side4')
var side5 = document.querySelector('#side5')
var searchon = document.querySelector('#searchon')
var searchoff = document.querySelector('#searchoff')
var test1 = document.querySelector('.test')

day.onclick = function (){
    side1.style.visibility = "visible";
    side1.style.height = "auto";
    side1.style.opacity = "1";
    side2.style.visibility = "visible";
    side2.style.height = "auto";
    side2.style.opacity = "1";
    side3.style.visibility = "visible";
    side3.style.height = "auto";
    side3.style.opacity = "1";
    side4.style.visibility = "visible";
    side4.style.height = "auto";
    side4.style.opacity = "1";
    side4.style.margin_bottom = "2vh";
    side5.style.visibility = "visible";
    side5.style.height = "auto";
    side5.style.opacity = "1";
}
week.onclick = function (){
    side1.style.visibility = "hidden";
    side1.style.height = "0";
    side1.style.opacity = "0";
    side2.style.visibility = "visible";
    side2.style.height = "auto";
    side2.style.opacity = "1";
    side3.style.visibility = "visible";
    side3.style.height = "auto";
    side3.style.opacity = "1";
    side4.style.visibility = "hidden";
    side4.style.height = "0";
    side4.style.opacity = "0";
    side5.style.visibility = "hidden";
    side5.style.height = "0";
    side5.style.opacity = "0";
}
month.onclick = function (){
    side1.style.visibility = "hidden";
    side1.style.height = "0";
    side1.style.opacity = "0";
    side2.style.visibility = "visible";
    side2.style.height = "auto";
    side2.style.opacity = "1";
    side3.style.visibility = "hidden";
    side3.style.height = "0";
    side3.style.opacity = "0";
    side4.style.visibility = "visible";
    side4.style.height = "auto";
    side4.style.opacity = "1";
    side5.style.visibility = "hidden";
    side5.style.height = "0";
    side5.style.opacity = "0";
}
year.onclick = function (){
    side1.style.visibility = "visible";
    side1.style.height = "auto";
    side1.style.opacity = "1";
    side2.style.visibility = "hidden";
    side2.style.height = "0";
    side2.style.opacity = "0";
    side3.style.visibility = "visible";
    side3.style.height = "auto";
    side3.style.opacity = "1";
    side4.style.visibility = "visible";
    side4.style.height = "auto";
    side4.style.opacity = "1";
    side5.style.visibility = "hidden";
    side5.style.height = "0";
    side5.style.opacity = "0";
}
searchon.onclick = function (){
    test1.style.display = "inline";
}
searchoff.onclick = function (){
    test1.style.display = "none";
}

// day.onclick = function (){
//     if (side1.style.opacity === 0){
//         side1.style.display ="none";
//     }
// }