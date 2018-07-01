//declaring all the variables that are creating elements to append to the DOM.
const pageDIV = document.createElement('div');
const pageUL = document.createElement('ul');
const searchDIV = document.createElement('div');
const searchInput = document.createElement('input');
const searchButton = document.createElement('button');
const noSearchResultsDIV = document.createElement('div');

/*Declaring all the variables that are grabbing class names out of the DOM. The
only exception was const noSearchResults = document.querySelector('.student-list').appendChild(noSearchResultsDIV);
Whenever I tried creating a variable to grab the student-list class and then having a separate function
to append the noSearchResultsDIV variable to that it would hide all the students and pagination when you first load the page
so I had to combine them all into one variable to make it work*/
const studentItem = document.querySelectorAll('.student-item');
const page = document.querySelector('.page');
const pageHeader = document.querySelector('.page-header');
const noSearchResults = document.querySelector('.student-list').appendChild(noSearchResultsDIV);

/* Set the div class to pagination and have that append to the page class html element
then have the UL element append to the DIV. Also, would have a separate search div class append to the page header
and then have the search input append to the search DIV, then have the search button append to the search DIV as well*/
page.appendChild(pageDIV);
pageDIV.appendChild(pageUL);
pageHeader.appendChild(searchDIV);
searchDIV.appendChild(searchInput);
searchDIV.appendChild(searchButton);

//Setting all the class names
pageDIV.className = 'pagination';
searchDIV.className = 'student-search';
noSearchResults.className = 'no-students';

//setting the placeholder and textcontent for different search elements
searchInput.placeholder = 'Search for students...';
searchButton.textContent = 'Search';
noSearchResults.textContent = 'No results';

//Have to initially hide the noSearchResults, since if it was not initially hidden it would show on the bottom of the student list on the first page
noSearchResults.style.display = 'none';


//Function to create page buttons one through six on the bottom of the page
const showPage = (totalStudents) => {
    const pages = Math.ceil(totalStudents.length / 10); //creates total amount of page buttons needed
    let emptyHTML = '';  //creates an empty string to be able to add the html elements and text of the page buttons

    for (let i = 1; i <= pages; i++) {   //created a for loop to loop through all the page buttons 
        if (i === 1) {
            emptyHTML += '<li>' + '<a class=\"active\" href=\"#\">' + i + '</a>' + '</li>';  //if the page is 1 add these html elements with the class of active and that page number(i), which would be 1

        } else {
            emptyHTML += '<li>' + '<a href=\"#\">' + i + '</a>' + '</li>'; //else add the other page buttons with these html elements without the class of active and their page number(i), which would be 2-6

        }
    } pageUL.innerHTML = emptyHTML; //have the UL element that was created's innerHTML to be equal to the empty string
}


//Function to create ten students to show up per page button
const showStudents = (selectedPage, listOfStudents) => {
    const numOfStudents = listOfStudents.length;   //create variable to be the length of the listOfStudents parameter
    let firstStudent = (selectedPage * 10) - 10;  //the first student of the page will be the parameter that is entered for selectedPage * 10 and then - 10. So, if the parameter of selectedPage is 1, then the result would be the 0 string, which is the position of the first student of the student list
    let lastStudent = (selectedPage * 10) - 1;  //the last student of the page will be the parameter that is entered for selectedPage * 10 and then - 1. So, if the parameter of selectedPage is 1, then the result would be the 9 string, which is the position of the last student of the student list


    for (let i = 0; i < numOfStudents; i++) {  //loop through the students through the length of the listOfStudents parameter
        if (i <= lastStudent && i >= firstStudent) { //if i is less than or equal to the last student and greater than and equal to the first student 
            listOfStudents[i].style.display = 'block'; //then that amount of students will appear until the loop ends
        } else {
            listOfStudents[i].style.display = 'none'; //else the rest of the students will not appear
        }
    }
}

//Function to make the page buttons be activated when clicking on them
const pageLink = (event) => {
    let buttons = document.getElementsByTagName('A'); // get all elements with the anchor tag which are the page buttons
    if (event.target.tagName === 'A') { //if the event parameter's html element is an anchor tag
        for (let i = 0; i < buttons.length; i++) { //first loop through all the page buttons 
            if (buttons[i] != event.target) {  //if the button is not equal the to event target
                buttons[i].className = '';     //the class name will be empty
            }
        }
        event.target.className = 'active';  //the page number that is clicked will have the class active which will show the page button being activated
        showStudents(event.target.textContent, studentItem); //showStudents function is called to bring up that page 
    } else {
        return false;   //return false in case if somebody clicks around the page buttons which might trigger the page to be empty
    }
}

/*Search event listener added to the searchInput variable to be able to search each student
by name and email*/
searchInput.addEventListener('keyup', (event) => {
    let searchResults = [];  // create an empty array for the search results to go into
    let term = event.target.value.toLowerCase(); //set the event of the search input's value to lower case incase the user types with capital letters

    for (let i = 0; i < studentItem.length; i++) { //loop through the length of the student item class which is 54
        let student = studentItem[i];   //create a variable student which will be equal to each student from the loop  
        let Name = studentItem[i].children[0].children[1].textContent; //create a variable which traverses through the dom to get the name and then grab its text content
        let Email = studentItem[i].children[0].children[2].textContent; //create a variable which traverses through the dom to get the email and then grab its text content
        studentItem[i].style.display = 'none'; //first have each student's display not show up


        if (Name.toLowerCase().indexOf(term) > -1 || Email.toLowerCase().indexOf(term) > -1) { //set the name to lower case and if the user's input value is greater than -1 (no match) and matches with the name set to lower case or if the user's input value matches with the email set to lower case and is greater than -1
            noSearchResults.style.display = 'none'; //then the noSearchResults variable will not display
            searchResults.push(student); //and the matched student variable will be pushed into the empty array
        }

        if (searchResults.length === 0) {  //but if the search results does not match with anything the user inputted into the search field
            noSearchResults.style.display = 'block'; //the 'No results' text will display in the page
        }

    }
    showStudents(1, searchResults); //the showStudents is called again to start at page 1 and have the list of students equal to the amount of students pushed into the empty student array
    showPage(searchResults); //the showPage function is called again to show the right amount of page buttons, for example if the user inputs i and there are 40 students names and email with the letter i then 4 pages should appear

})






/*declared the functions showPage and showStudents and having the required parameters inside of them to work. 
Put studentItem as a parameter, since the total amount of students is based on the array of student-item.
Put 1 as selectedPages parameter to show the first ten students when you load up the page, and studentItem
as the the second parameter, since listOfStudents is based off of student-item as the total amount of listOfStudents
which should be 54 */
showPage(studentItem);
showStudents(1, studentItem);

//set the event listener so whenever a page button is clicked or anything with the class pagination the page link function will go in action
document.querySelector('.pagination').addEventListener('click', pageLink);

