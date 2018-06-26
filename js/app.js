const studentItem = document.querySelector('.student-item');
const studentList = document.querySelector('.student-list');
const studentsFromList = studentList.children;
const pageDIV = document.createElement('div');
const pageButtonUL = document.createElement('ul');
const pageButtonA = document.createElement('a');
const pageHTML = document.querySelector('.page');
const totalStudents = studentItem.length;
const totalPages = Math.ceil(totalStudents / 10);
const eaPage = ['pageOne', 'pageTwo', 'pageThree', 'pageFour', 'pageFive', 'pageSix'];

pageDIV.className = 'pagination';
pageHTML.appendChild(pageDIV);
pageDIV.appendChild(pageButtonUL);
pageButtonUL.appendChild(pageButtonA);



function getPageNumbers() {

    for (let i = 0; i < eaPage.length; i += 1) {
        if (i = 0) {
            i = 'pageOne';
            if (i = 1) {
                i = 'pageTwo';
                if (i = 2) {
                    i = 'pageThree';
                    if (i = 3) {
                        i = 'pageFour';
                        if (i = 4) {
                            i = 'pageFive';
                            if (i = 5) {
                                i = 'pageSix';
                            }
                        }
                    }
                }
            }
        }
    }
}

function showPage(pages, listOfStudents) {

    getPageNumbers();

    for (let i = 0; i < totalStudents; i++) {

        if (i > 10) {
            totalStudents[i].style.display = 'none'

        } else {
            totalStudents[i] = 'pageOne';
            totalStudents[i].style.display = 'block';
        }
        if (i >= 10 && i <= 19) {
            totalStudents[i].style.display = 'none'

        } else {
            totalStudents[i] = 'pageTwo';
            totalStudents[i].style.display = 'block';

            if (i >= 20 && i <= 29) {
                totalStudents[i].style.display = 'none'

            } else {
                totalStudents[i] = 'pageThree';
                totalStudents[i].style.display = 'block';

                if (i >= 30 && i <= 39) {
                    totalStudents[i].style.display = 'none'

                } else {
                    totalStudents[i] = 'pageFour';
                    totalStudents[i].style.display = 'block';

                    if (i >= 40 && i <= 49) {
                        totalStudents[i].style.display = 'none'

                    } else {
                        totalStudents[i] = 'pageFive';
                        totalStudents[i].style.display = 'block';

                        if (i >= 50 && i <= 59) {
                            totalStudents[i].style.display = 'none'

                        } else {
                            totalStudents[i] = 'pageSix';
                            totalStudents[i].style.display = 'block';
                        }
                    }
                }
            }
        }
    }



    function appendPageLinks(listofStudents) {


        for (let i = 1; i <= totalPages; i++) {

            showPage();

            if (i === 1) {
                pageButtonA.innerHTML = '<li>' + '<a class=\"active\" href=\"#\">' + i + '</a>' + '</li>';
            } else {
                pageButtonA.innerHTML = '<li>' + '<a href=\"#\">' + i + '</a>' + '</li>';
            }
        }
    }
}

