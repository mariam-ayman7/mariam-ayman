"use strict";

let changText = document.getElementById('changeText');
const arr = [
    'Web Developer' , 
    'Coder' ,
    'Youtuber'
];
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedLoop() {
    for (let i = 0; i < arr.length; i++) {
        changText.innerHTML = arr[i]
        await delay(1500);
        if (i == 2){
            i = 0 ;
            changText.innerHTML = arr[0]
            await delay(1500);
        }
    }
}
delayedLoop()
function checkEmail(){
let useremail =String(document.getElementById('useremail').value);
let result = document.getElementById('result');
let at = useremail.indexOf('@');
let dout = useremail.indexOf('.');
if (at >= 2 && dout >= 6){
    result.innerHTML = 'Email is True';
    result.setAttribute('class' , 'true');
}else{
    result.innerHTML = 'Email is False';
    result.setAttribute('class' , 'false');
}
}
let navClickOne = document.getElementById('navclickone');
let navClickTwo = document.getElementById('navclicktwo');
let navClickThree = document.getElementById('navclickthree');
let navClickFour = document.getElementById('navclickfour');
let navClickFive = document.getElementById('navclickfive');
function homeFun(){
    navClickOne.setAttribute('class' , 'navclick');
    navClickTwo.setAttribute('class' , '');
    navClickThree.setAttribute('class' , '');
    navClickFour.setAttribute('class' , '');
    navClickFive.setAttribute('class' , '');
}
function servFun() {
    navClickTwo.setAttribute('class' , 'navclick');
    navClickOne.setAttribute('class' , '');
    navClickThree.setAttribute('class' , '');
    navClickFour.setAttribute('class' , '');
    navClickFive.setAttribute('class' , '');
}
function projectFun() {
    navClickThree.setAttribute('class' , 'navclick');
    navClickOne.setAttribute('class' , '');
    navClickTwo.setAttribute('class' , '');
    navClickFour.setAttribute('class' , '');
    navClickFive.setAttribute('class' , '');
}
function contactFun() {
    navClickFour.setAttribute('class' , 'navclick')
    navClickOne.setAttribute('class' , '');
    navClickTwo.setAttribute('class' , '');
    navClickThree.setAttribute('class' , '');
    navClickFive.setAttribute('class' , '');
}
function massageFun() {
    navClickFive.setAttribute('class' , 'navclick');
    navClickOne.setAttribute('class' , '');
    navClickTwo.setAttribute('class' , '');
    navClickThree.setAttribute('class' , '');
    navClickFour.setAttribute('class' , '');
}