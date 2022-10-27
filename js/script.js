/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function studentPages(list, page) {
   let itemsPerPage = 9;
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   for (let i = 0; i <= list.length; i++) {
      let studentData = list[i];
      console.log(studentData); //Logs all student names to the console
      if (i >= startIndex && i < endIndex) {
         /*create the elements that will be inserted into the dom 
            with the correspondiong student information
         */
         let listItem = `
         <h3>${ studentData }</h3>

         `;
         studentList.appendChild(listItem);
      }

   }

}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
studentPages(data, 1);