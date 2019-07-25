"use strict"

let students = [];
let list = "";
let listScore = "";
let inputs = document.getElementsByClassName("student-input");

function Student(name, surname, email,birtday) {
    this.name = name,
    this.surname = surname,
    this.email = email,
    this.birthday = birtday,
    this.scores = [],
    this.getAverageScore = function(){
        return alert(`${this.surname} ${this.name} Avarage Score is : ${this.scores}`);
    }
}

function generateLiItems(value, index) {
    list += `<tr><th>${index + 1}</th><td>${value.name}</td><td>${value.surname}</td><td>${value.email}</td><td>${value.birthday}</td></tr>`;
}

function reset() {
    list = "";
    listScore = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    document.getElementById("alert").style.display = "none";
    document.getElementById("alert-number").style.display = "none";
}

function getInputValues() {

    let student = new Student(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
    if (inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value) {
        if( /\d-/.exec(inputs[3].value)){
        students.push(student);
        getWriteList();
        getWriteListScore() ;
         document.getElementById("alert").style.display = "none";
         return document.getElementById("alert-number").style.display = "none";
         
        }else{
            document.getElementById("alert").style.display = "none";
            return document.getElementById("alert-number").style.display = "block"
        }
    }else {
        document.getElementById("alert-number").style.display = "none";
        return document.getElementById("alert").style.display = "block";
    }
}

function getWriteList() {
    students.forEach(generateLiItems);
    document.getElementsByClassName("student-list")[1].innerHTML = list;
    reset();
}


// When Onclick Sorted

function sortedMetod(value) {
    return function (a, b) {
        if (a[value] < b[value]) { return -1; } else if (a[value] > b[value]) { return 1 } else { return 0; }
    }
}

function sortedList(value) {
    students.sort(sortedMetod(value));
    getWriteList();
}

// Random Sorted

function randomSort(){
    students.sort(myFunct());
    getWriteList();
}
function myFunct(){
    return function () {
        return Math.random() - 0.5;
      }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function generateLiItemsScore(value, index) {
    listScore += `<tr><th>${index + 1}</th><td>${value.name}</td><td>${value.surname}</td><td>${value.scores}</td></tr>`;
}

function getWriteListScore() {
    students.forEach(generateLiItemsScore);
    document.getElementsByClassName("student-list")[0].innerHTML = listScore;
    reset();
}


