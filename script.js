const myLibrary = [];

function Book(title, author, pages, read) {
  // Initializing book & stores input from form
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement('div');
    bookEl.setAttribute("class", "bookCard");
    bookEl.innerHTML = `
      <div class="card-header">
        <h3 class="title">${book.title}</h3>
        <h4 class="author">Written By: ${book.author}</h4>
      </div>
      <div class="card-body">
        <p>${book.pages} pages</p>
        <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
        <button class="remove-btn" onClick="removeBook(${i})">Remove</button>
        <button class="toggle-read-btn" onClick="toggleRead(${i})">Toggle Read Status</button>
      </div>
    `;
    libraryEl.appendChild(bookEl);
  };
};

//remove book toggle
function removeBook(index) {
  console.log();
  myLibrary.splice(index, 1);
  //removes & refreshes the library
  render();
}

function addBookToLibrary() {
  //grabs values from form to create object (book function above)
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  //creates object from constructor
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  
  //calls render function to display book info
  render();
};

let newBookBtn = document.querySelector('#newBookBtn');
//waiting for the button to be clicked - starts functiom
newBookBtn.addEventListener("click", function() {
  let newBookForm = document.querySelector('#newBookForm');
  console.log(newBookForm);
  newBookForm.style.display = "block";
});


document.querySelector("#newBookForm").addEventListener("submit", function(event) {
  event.preventDefault();
  //When user clicks submit, call addBookToLibrary function to store values
  addBookToLibrary();
});

