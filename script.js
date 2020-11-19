const container = document.querySelector('.container');

let myLibrary = [];

function Book(title, author, pages, read) {
  (title,author,pages,read);
};

function addBookToLibrary(book) {
  myLibrary.push(book)
};

let book1 = new Book('On Becoming', 'Michelle Obama', 400, true)
addBookToLibrary(book1)

console.log(myLibrary)