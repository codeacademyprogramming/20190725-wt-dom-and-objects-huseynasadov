"use strict"

let students = [];
let list = "";
let inputs = document.getElementsByClassName("student-input");

function Student(name, surname, email, birthday) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.birthday = birthday;
    this.scores = [];
    this.addScores = function(score){
        this.scores.push(score);
    }

    this.getAverageScore = function () {
        let average = 0;
        if (this.scores.length > 0) {
            for (let i = 0; i < this.scores.length; i++) {
                average += this.scores[i];
            }
            average = average / this.scores.length;
        }
        return average;
    };
}

function reset() {
    list = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    document.getElementById("alert").style.visibility = "hidden";
    document.getElementById("alert-number").style.visibility = "hidden";
}
let student;
function getInputValues() {

    student = new Student(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
    if (inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value) {
        if (/\d{4}-(((0)[0-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])/.exec(inputs[3].value)
            && /\w+@\w.\w/.exec(inputs[2].value)
            && /[a-zA-Z]+$/.exec(inputs[1].value)
            && /[a-zA-Z]+$/.exec(inputs[0].value)) {
            students.push(student);
            getWriteList();
            document.getElementById("alert").style.visibility = "hidden";
            return document.getElementById("alert-number").style.visibility = "hidden";

        } else {
            document.getElementById("alert").style.visibility = "hidden";
            return document.getElementById("alert-number").style.visibility = "visible"
        }
    } else {
        document.getElementById("alert-number").style.visibility = "hidden";
        return document.getElementById("alert").style.visibility = "visible";
    }
}



function generateLiItems(value, index) {
     
    list += `<tr><th>${index + 1}</th><td>${value.name}</td><td>${value.surname}</td><td>${value.email}</td><td>${value.birthday}</td></tr>`;
}

function getWriteList() {
    let trElem = document.createElement("tr");
    document.getElementsByClassName("student-list")[1].appendChild(trElem); 
    trElem.setAttribute("data-index", (students.length-1));
    trElem.style.cursor = "pointer";
    trElem.innerHTML = `<td></td><td>${student.name}</td><td>${student.surname}</td><td>${student.email}</td><td>${student.birthday}</td>`;
    trElem.addEventListener("dblclick",function(){ 
        let  studentIndex = this.getAttribute("data-index");
          alert(students[studentIndex].getAverageScore());
      });
  
      inputs[0].value = "";
      inputs[1].value = "";
      inputs[2].value = "";
      inputs[3].value = "";
}


// When Onclick Sorted

function sortedMetod(value) {
    return function (a, b) {
        if (a[value] < b[value]) { return -1; } else if (a[value] > b[value]) { return 1 } else { return 0; }
    }
}

function sortedList(value) {
    students.sort(sortedMetod(value));
   
}

// Random Sorted

function randomSort() {
    students.sort(myFunct());
    getWriteList();
}
function myFunct() {
    return function () {
        return Math.random() - 0.5;
    }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

let empEmail = document.getElementById("empEmail"),
    empScore = document.getElementById("empScore"),
    tableStudentScores = document.getElementsByClassName("student-list")[0];

function setScoreStudents(){
    let index = students.findIndex((val)=>{
        if(val.email.toLowerCase() == empEmail.value.toLowerCase()){
            return true;
        }
        return false;
    });
        if(index != -1){
        students[index].addScores(Number(empScore.value));

        tableStudentScores.innerHTML = "";

        for(let i = 0; i < students[index].scores.length; i++){
            let tr = document.createElement("tr");
            tr.innerText = students[index].scores[i];

            tableStudentScores.appendChild(tr);
        }
    }
}

