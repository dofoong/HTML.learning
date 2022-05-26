var day = document.querySelector('#day')
var week = document.querySelector('#week')
var month = document.querySelector('#month')
var year = document.querySelector('#year')
var side1 = document.querySelector('#side11')
var side2 = document.querySelector('#side21')
var side3 = document.querySelector('#side31')
var side4 = document.querySelector('#side41')
var side5 = document.querySelector('#side51')
var side1p = document.querySelector('#side1p')
var side2p = document.querySelector('#side2p')
var side3p = document.querySelector('#side3p')
var side4p = document.querySelector('#side4p')
var side5p = document.querySelector('#side5p')
var searchon = document.querySelector('#searchon')
var searchoff = document.querySelector('#searchoff')
var test1 = document.querySelector('.test')

day.onclick = function (){
    
    side1.style.height = "190px";    
    side2.style.height = "190px";
    side3.style.height = "190px";
    side4.style.height = "190px";
    side5.style.height = "190px";
    side1.style.opacity = "1";
    side2.style.opacity = "1";
    side3.style.opacity = "1";
    side4.style.opacity = "1";
    side5.style.opacity = "1";
    side1p.style.opacity = "1";
    side2p.style.opacity = "1";
    side3p.style.opacity = "1";
    side4p.style.opacity = "1";
    side5p.style.opacity = "1";
}
week.onclick = function (){
    
    side1.style.height = "0";
    side2.style.height = "190px";
    side3.style.height = "190px";
    side4.style.height = "0";
    side5.style.height = "0";
    side1.style.opacity = "0";
    side2.style.opacity = "1";
    side3.style.opacity = "1";
    side4.style.opacity = "0";
    side5.style.opacity = "0";
    side1p.style.opacity = "0";
    side2p.style.opacity = "1";
    side3p.style.opacity = "1";
    side4p.style.opacity = "0";
    side5p.style.opacity = "0";
}
month.onclick = function (){
    
    side1.style.height = "0";
    side2.style.height = "190px";
    side3.style.height = "0";
    side4.style.height = "190px";
    side5.style.height = "0";
    side1.style.opacity = "0";
    side2.style.opacity = "1";
    side3.style.opacity = "0";
    side4.style.opacity = "1";
    side5.style.opacity = "0";
    side1p.style.opacity = "0";
    side2p.style.opacity = "1";
    side3p.style.opacity = "0";
    side4p.style.opacity = "1";
    side5p.style.opacity = "0";
}
year.onclick = function (){
    
    side1.style.height = "190px";
    side2.style.height = "0";
    side3.style.height = "190px";
    side4.style.height = "190px";
    side5.style.height = "0";
    side1.style.opacity = "1";
    side2.style.opacity = "0";
    side3.style.opacity = "1";
    side4.style.opacity = "1";
    side5.style.opacity = "0";
    side1p.style.opacity = "1";
    side2p.style.opacity = "0";
    side3p.style.opacity = "1";
    side4p.style.opacity = "1";
    side5p.style.opacity = "0";
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