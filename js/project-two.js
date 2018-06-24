

const studentList = document.querySelector('.student-list');
const student = document.getElementsByTagName('ul')[0];
const addSearchInput = document.createElement('input');
const li = studentList.children;
const page = document.querySelector('.page');
const buttonOne = document.createElement('button');
const buttonTwo = document.createElement('button');
const buttonThree = document.createElement('button');
const buttonFour = document.createElement('button');
const buttonFive = document.createElement('button');
const buttonSix = document.createElement('button');


buttonOne.className = 'pagination';
buttonTwo.className = 'pagination';
buttonThree.className = 'pagination';
buttonFour.className = 'pagination';
buttonFive.className = 'pagination';
buttonSix.className = 'pagination';

buttonOne.innerHTML = '<li>' + '<a>' + 1 + '</a>' + '</li>';
buttonTwo.textContent = '2';
buttonThree.textContent = '3';
buttonFour.textContent = '4';
buttonFive.textContent = '5';
buttonSix.textContent = '6';


page.appendChild(buttonOne);
page.appendChild(buttonTwo);
page.appendChild(buttonThree);
page.appendChild(buttonFour);
page.appendChild(buttonFive);
page.appendChild(buttonSix);


window.addEventListener("load", function () {
    for (var i = 0; i < li.length; i++) {
        if (i >= 10) {
            li[i].style.display = "none"
        }

        else {
            li[i].style.display = "block"
        }
    }

})


buttonOne.addEventListener("click", function () {
    for (var i = 0; i < li.length; i++) {
        if (i >= 10) {
            li[i].style.display = "none"
        }

        else {
            li[i].style.display = "block"
        }
    }
})

buttonTwo.addEventListener("click", function () {
    for (var i = 0; i < li.length; i++) {
        if (i < 11) {
            li[i].style.display = "none"
        }

        else if (i > 20) {
            li[i].style.display = "none"

        } else { li[i].style.display = "block" }

    }
})

buttonThree.addEventListener("click", function () {
    for (var i = 0; i < li.length; i++) {
        if (i < 21) {
            li[i].style.display = "none"
        }

        else if (i > 30) {
            li[i].style.display = "none"

        } else { li[i].style.display = "block" }

    }
})

buttonFour.addEventListener("click", function () {
    for (var i = 0; i < li.length; i++) {
        if (i < 31) {
            li[i].style.display = "none"
        }

        else if (i > 40) {
            li[i].style.display = "none"

        } else { li[i].style.display = "block" }

    }
})

buttonFive.addEventListener("click", function () {
    for (var i = 0; i < li.length; i++) {
        if (i < 41) {
            li[i].style.display = "none"
        }

        else if (i > 50) {
            li[i].style.display = "none"

        } else { li[i].style.display = "block" }

    }
})

buttonSix.addEventListener("click", function () {
    for (var i = 0; i < li.length; i++) {
        if (i < 50) {
            li[i].style.display = "none"
        }

        else if (i > 53) {
            li[i].style.display = "none"

        } else { li[i].style.display = "block" }

    }
})
