"use strict";

let students = [],
    student,
    inputs = document.getElementsByClassName("student-input"),
    empEmail = document.getElementById("empEmail"),
    empScore = document.getElementById("empScore"),
    tableStudentScores = document.getElementsByClassName("student-list")[0],
    tableStudent = document.getElementsByClassName("student-list")[1],
    scoreFullName = document.getElementsByClassName("scoreFullName");

function Student(name, surname, email, birthday) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.birthday = birthday;
    this.scores = [];
    this.addScores = function (score) {
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
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    empScore.value = "";
    empEmail.value = "";
    document.getElementById("alert").style.visibility = "hidden";
    document.getElementById("alert-number").style.visibility = "hidden";
    scoreFullName[0].innerText = "#";
    scoreFullName[1].innerText = "Name";
    scoreFullName[2].innerText = "Surname";
    tableStudentScores.innerHTML = "";
}

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



function getWriteList() {

    let trElem = document.createElement("tr");
    document.getElementsByClassName("student-list")[1].appendChild(trElem);
    trElem.setAttribute("data-index", (students.length - 1));
    trElem.style.cursor = "pointer";
    trElem.innerHTML = `<td>${students.length}</td><td>${student.name.toUpperCase()}</td><td>${student.surname.toUpperCase()}</td><td>${student.email.toUpperCase()}</td><td>${student.birthday.toUpperCase()}</td><td><i class="far fa-trash-alt icon"></i></td>`;
    trElem.addEventListener("dblclick", function () {
        let studentIndex = this.getAttribute("data-index");
        alert(students[studentIndex].name.toUpperCase() + " " + students[studentIndex].surname.toUpperCase() + " " + "Average Score : " + students[studentIndex].getAverageScore());
    });

    let deletes = document.querySelectorAll('.icon');
    deletes.forEach(btn => {
        btn.addEventListener("click", function () {
            let trDelete = this.parentNode.parentNode;
            trDelete.remove();
        })
    });
    reset();
}


// Score Table


function setScoreStudents() {
    let index = students.findIndex((val) => {
        if (val.email.toLowerCase() == empEmail.value.toLowerCase()) {
            return true;
        }
        return false;
    });

    if (index != -1) {
        if (empScore.value > 0) {
            students[index].addScores(Number(empScore.value));
            tableStudentScores.innerHTML = "";

            for (let i = 0; i < students[index].scores.length; i++) {
                let tr = document.createElement("tr");
                tr.innerText = `${i + 1} . ${students[index].scores[i]}`;
                tableStudentScores.appendChild(tr);
                empScore.value = "";
            }
            scoreFullName[0].innerText = index + 1;
            scoreFullName[1].innerText = students[index].name.toUpperCase();
            scoreFullName[2].innerText = students[index].surname.toUpperCase();
        } else {
            alert("Please,Enter Score");
        }
    }
}

