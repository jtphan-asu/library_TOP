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
        addBookToLibrary(harryPotter);
        addBookToLibrary(shrek);
        
        //Iterate through data structure to print contents
        function printLibrary(){
            for(var i = 0; i < myLibrary.length; i++){
                document.getElementById("books").innerHTML += JSON.stringify(myLibrary[i]);
               
            }
        }
        
        
        
        
     