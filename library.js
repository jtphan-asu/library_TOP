//*** Author: Jonathan Phan
        //*** Github: jtphan-asu 
        
        //Initialize empty array as data structure.
        let myLibrary = [];

        //Constructor for Book object
        function Book (title, author, numberPages, status) {
            this.title = title;
            this.author = author;
            this.numberPages = numberPages;
            this.status = status;
            
        }
        //New instance of Object
        const harryPotter = new Book('Harry Potter', 'J.K Rowling', '367 pages', 'off');

        const shrek = new Book('Shrek', 'Mike Myers', '200 pages', 'on');
        
        //Add Book object to Library array
        function addBookToLibrary (obj) {
            myLibrary.push(obj);
        }
        addBookToLibrary(harryPotter);
        addBookToLibrary(shrek);
        
        //Delete Book
        function deleteBook(obj) {
            alert("Delete functionality in progress");
           // myLibrary.slice(obj, obj + 1);
        }

        //Iterate through data structure to print contents
        function showLibrary(){
        
                const bookList = document.querySelector('#table-body');
                bookList.textContent = '';
                        for(let i = 0; i < myLibrary.length; i++){
                //Create table row
                const bookRow = document.createElement('tr');
                bookRow.classList.add('book-info');
                bookList.appendChild(bookRow);	

                //Title table data
                const bookTitle = document.createElement('td');
                bookTitle.textContent = myLibrary[i].title;
                bookRow.appendChild(bookTitle);	
                
                //Author table data
                const bookAuthor = document.createElement('td');
                bookAuthor.textContent = myLibrary[i].author;
                bookRow.appendChild(bookAuthor);

                //Pages table data
                const bookPages = document.createElement('td');
                bookPages.textContent = myLibrary[i].numberPages;
                bookRow.appendChild(bookPages);
                
                //Status table data
                const bookStatus = document.createElement('td');
                bookStatus.textContent = myLibrary[i].status;
                bookRow.appendChild(bookStatus);
                         
         
                 // Book Delete Button
              const bookDelete = document.createElement('td');
              bookDelete.innerHTML = ('<button class="deleteButton" onClick="deleteBook()">Delete</button>');
              bookRow.appendChild(bookDelete);
               }

               
        }
        showLibrary();

        
        function newBookForm(){
            const x = document.getElementById('contact-form');
            if(x.style.display === 'none'){
                x.style.display = 'block';
            } else {
                x.style.display = 'none';
            }

        }

        function addRow(obj){
            var table = document.getElementById('table');
            var row = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            
            td1.innerHTML = obj.title;
            td2.innerHTML = obj.author;
            td3.innerHTML = obj.numberPages;
            td4.innerHTML = obj.status;
           
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            
            table.children[0].appendChild(row);
	   
        }

        //Create Form variable
        const form = document.getElementById("contact-form");

        
        //On submit event listener
        form.addEventListener("submit", (e) => {
            e.preventDefault();
        
            const myFormData = new FormData(e.target);
        
            const formDataObj = Object.fromEntries(myFormData.entries());
        
            
            console.log(formDataObj);
        
            // output data
            const output = document.querySelector(".output-pre");
            output.innerText = JSON.stringify(formDataObj, null, 2);

            //Add Object to myLibrary array
            addBookToLibrary(formDataObj);
            addRow(formDataObj);

            //Update library table
            showLibrary();
        });
    
      
      
      // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function validateLogin(){
    if(document.getElementById("username").value === "admin" && document.getElementById("password").value === "password"){
        alert("Success Login information with admin");
        
        window.location.href = "https://jtphan-asu.github.io/library_TOP/success.html";
    } else {
        alert("Failed. Not admin account");
    }
    
}