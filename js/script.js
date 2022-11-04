let pageNumber = 1;


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   //create an element to store the number of student items per page
   let itemsPerPage = 9;
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   //Loop through the array of students and create an element for each student. 
   for (let i = 0; i <= list.length; i++) {
      let studentData = list[i];
      if (i >= startIndex && i < endIndex) {
         /*create the elements that will be inserted into the dom
            with the correspondiong student information
         */
         let listItem = document.createElement('li');
            listItem.setAttribute('class', 'student-item cf');

         let studentDetailsDiv = document.createElement('div');
            studentDetailsDiv.setAttribute('class', 'student-details');

         let studentImage = document.createElement('img');
            studentImage.setAttribute('class', 'avatar');
            studentImage.setAttribute('src', `${studentData.picture.large}`);

         let header3 = document.createElement('h3');
            header3.textContent = studentData.name.first + ' ' + studentData.name.last;
         
         let span = document.createElement('span');
            span.setAttribute('class', 'email');
            span.textContent = studentData.email;

         let joinedDetailsDiv = document.createElement('div');
            joinedDetailsDiv.setAttribute('class', 'joined-details');

         let dateSpan = document.createElement('span');
            dateSpan.setAttribute('class', 'date');
            dateSpan.textContent = studentData.registered.date


         //appends all of the created elements with the correct student information to the ul element with className student-list
            studentList.appendChild(listItem);
            listItem.appendChild(studentDetailsDiv);
            studentDetailsDiv.appendChild(studentImage);
            studentImage.insertAdjacentElement('afterend', header3); 
            header3.insertAdjacentElement('afterend', span)
         studentDetailsDiv.insertAdjacentElement('afterend', dateSpan);
      }
   }
   //page = addPagination(data);
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   let numberOfPages = Math.ceil(list.length / 9);
   let buttonNumbers = 0;
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   

   for (let i = 0; i < numberOfPages; i++) {
      let buttonList = document.createElement('li');
      let paginationButton = document.createElement('button');
      buttonNumbers += 1;
      paginationButton.innerHTML = buttonNumbers;
      linkList.appendChild(buttonList);
      buttonList.appendChild(paginationButton);
      linkList.firstChild.firstChild.setAttribute('class', 'active');
   }
   
   linkList.addEventListener('click', (e) => {

      buttons = e.target;
      let listItemBtns = document.querySelectorAll('button');

      /* loops through each pagination button and checks for the class 'active'
         if the button does not contain the className 'active', the attribute is added to that button
         and removed from any other button
      */
      if (buttons.nodeName === "BUTTON") {
         for (let i = 0; i < listItemBtns.length; i++) {
            if (listItemBtns[i].classList.contains('active')) {
               listItemBtns[i].classList.remove('active');
               buttons.setAttribute('class', 'active');
               pageNumber = parseInt(buttons.textContent);
               showPage(data, pageNumber);
            }
         }
         return pageNumber;
      };
   });
};


//create a search bar and display it to the browser
function searchStudents(data, page) {
   let pageHeader = document.querySelector('header');
   let searchBarLabel = document.createElement('label');
   let inputSpan = document.createElement('span');
   let searchInput = document.createElement('input');
   let searchBtn = document.createElement('button');
   let searchImgIcon = document.createElement('img');

   searchImgIcon.setAttribute('src', 'img/icn-search.svg');

   searchBtn.setAttribute('type', 'button');

   searchImgIcon.setAttribute('alt', 'Search icon');

   searchInput.setAttribute('id', 'search');
   searchInput.setAttribute('placeholder', 'Search by name..');

   inputSpan.textContent = 'Search by name';

   searchBarLabel.setAttribute('for', 'search');
   searchBarLabel.setAttribute('class', 'student-search');

   pageHeader.appendChild(searchBarLabel);
   searchBarLabel.appendChild(inputSpan);
   searchBarLabel.appendChild(searchInput);
   searchBarLabel.appendChild(searchBtn);
   searchBtn.appendChild(searchImgIcon);

   //add event listener to the input
   //get the value of the search input and return it to the console
   searchInput.addEventListener('keyup', e => {
      let input = e.target.value.toLowerCase();
      let filterdStudents = data.filter((names) => {
         return names.name.first.toLowerCase().includes(input);
      });

      addPagination(filterdStudents, page);
      showPage(filterdStudents, page);
      //console.log(filterdStudents);
   })




};

searchStudents(data, pageNumber);




















// Call functions
addPagination(data, pageNumber);
showPage(data, pageNumber);