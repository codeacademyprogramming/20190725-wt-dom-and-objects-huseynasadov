"use strict";

let linkFonts = document.createElement("link"),
    main = document.createElement("main"),
    divContainer = document.createElement("div"),
    divPeople = document.createElement("div"),
    h3 = document.createElement("h3"),
    h1 = document.createElement("h1"),
    divRow = document.createElement("div"),
    divCol4John = document.createElement("div"),
    divCol4Pete = document.createElement("div"),
    divCol4Mark = document.createElement("div"),
    pJohn = document.createElement("p"),
    pPete = document.createElement("p"),
    pMark = document.createElement("p"),
    imgJohn = document.createElement("img"),
    imgPete = document.createElement("img"),
    imgMark = document.createElement("img"),
    nameJohn = document.createElement("p"),
    namePete = document.createElement("p"),
    nameMark = document.createElement("p");

    document.head.appendChild(linkFonts);
    linkFonts.rel = "stylesheet";
    linkFonts.href = "https://fonts.googleapis.com/css?family=Chonburi|Gravitas+One&display=swap"
    document.body.appendChild(main).appendChild(divContainer).appendChild(divPeople).appendChild(h3);
    divPeople.appendChild(h1);
    divPeople.appendChild(divRow).appendChild(divCol4John);
    divRow.appendChild(divCol4Pete);
    divRow.appendChild(divCol4Mark);
    divCol4John.appendChild(pJohn);
    divCol4John.appendChild(imgJohn);
    divCol4John.appendChild(nameJohn);
    divCol4Pete.appendChild(pPete);
    divCol4Pete.appendChild(imgPete);
    divCol4Pete.appendChild(namePete);
    divCol4Mark.appendChild(pMark);
    divCol4Mark.appendChild(imgMark);
    divCol4Mark.appendChild(nameMark);

    divContainer.className = "container";
    divPeople.style.padding = "20px 0";
    divPeople.style.textAlign = "center";
    h3.innerText = "WHAT PEOPLE SAY";
    h3.style.color = "#BE9359";
    h3.style.fontSize = "17px";
    h3.style.letterSpacing = "2px";
    h3.style.marginTop = "10px";
    h1.innerText = "Reviews";
    h1.style.fontSize = "60px";
    h1.style.color ="#B1B1B1";
    h1.style.fontFamily = 'Chonburi';
    h1.style.fontWeight = "300";
        divRow.className = "row";
    divRow.style.paddingTop = "40px";
    divCol4John.className = "col-4";
    divCol4John.style.margin = "0 5%";
    divCol4Pete.className = "col-4";
    divCol4Pete.style.margin = "0 5%";
    divCol4Mark.className = "col-4";
    divCol4Mark.style.margin = "0 5%";
    pJohn.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales,rna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero at arcu.";
    pJohn.style.color = "#909090";
    pJohn.style.fontSize = "17px";
    pJohn.style.lineHeight = "1.7";
    pPete.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales,rna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero at arcu.";
    pPete.style.color = "#909090";
    pPete.style.fontSize = "17px";
    pPete.style.lineHeight = "1.7";
    pMark.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales,rna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero at arcu.";
    pMark.style.color = "#909090";
    pMark.style.fontSize = "17px";
    pMark.style.lineHeight = "1.7";
    imgJohn.src = "Images/avatar-dhg.png";
    imgJohn.style.width = "100px"
    imgJohn.style.borderRadius = "50%";
    imgJohn.style.margin = "15px 0"
    imgPete.src = "Images/avatar-fat.jpg";
    imgPete.style.width = "100px";
    imgPete.style.borderRadius = "50%";
    imgPete.style.margin = "15px 0"
    imgMark.src = "Images/testimonials-2.jpg";
    imgMark.style.width = "100px";
    imgMark.style.borderRadius = "50%";
    imgMark.style.margin = "15px 0"
    nameJohn.innerText = "John Doe";
    nameJohn.style.color = "#CE9359";
    nameJohn.style.fontWeight = "bold";
    nameJohn.style.fontStyle = "italic";
    nameJohn.style.fontSize = "17px";
    namePete.innerText = "Pete Jones";
    namePete.style.color = "#CE9359";
    namePete.style.fontWeight = "bold";
    namePete.style.fontStyle = "italic";
    namePete.style.fontSize = "17px";
    nameMark.innerText = "Mark Wilson";
    nameMark.style.color = "#CE9359";
    nameMark.style.fontWeight = "bold";
    nameMark.style.fontStyle = "italic";
    nameMark.style.fontSize = "17px";



