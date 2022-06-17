        //*** Author: Jonathan Phan
        //*** Github: jtphan-asu 
        
        //Initialize empty array as data structure.
        let myLibrary = [];

        //Constructor for Book object
        function Book (title, author, numberOfPages) {
            this.title = title;
            this.author = author;
            this.numberOfPages = numberOfPages;
        
        }
        //New instance of Object
        const harryPotter = new Book('Harry Potter', 'J.K Rowling', '367 pages');

        const shrek = new Book('Shrek', 'Mike Myers', '200 pages');
        
        //Add Book object to Library array
        function addBookToLibrary (obj) {
            myLibrary.push(obj);
        }
        //addBookToLibrary(harryPotter);
        //addBookToLibrary(shrek);
        
        //Iterate through data structure to print contents
        function printLibrary(){
            for(var i = 0; i < myLibrary.length; i++){
                document.getElementById("books").innerHTML += JSON.stringify(myLibrary[i]);
               
            }
        }

        function newBookForm(){
            const x = document.getElementById('contact-form');
            if(x.style.display === 'none'){
                x.style.display = 'block';
            } else {
                x.style.display = 'none';
            }

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
        });
        
           

           
   
        
        
        
        
     