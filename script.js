const container = document.querySelector('.container');
// onst con = document.querySelector('.con');
// const library = document.createElement('div');
const newBookBtn = document.querySelector('.addbook');
const formelt = document.querySelector('form');
const submitBtn = document.querySelector('.submitbtn');

// // library.classList.add('library');
// newBookBtn.textContent = 'Add a New Book';
// newBookBtn.classList.add('addbtn');
// container.appendChild(newBookBtn);
// con.appendChild(newBookBtn);

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

let book1 = new Book('On Becoming', 'Michelle Obama', 400, true);
let book2 = new Book('Rich Dad, Poor Dad', 'Kiyosaki', 400, true);
let book3 = new Book('Think Big', 'Ben Carson', 400, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


function addBookToLibrary(book) {
  myLibrary.push(book);
};

function displayLibrary(array) {
  container.innerHTML = '';

  for (let i = 0; i < array.length; i += 1) {
    const bookcard = document.createElement('div');
    const title = document.createElement('h2');
    const body = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const readbtn = document.createElement('button');

    bookcard.classList.add('bookcard');
    title.textContent = array[i].title;
    body.textContent = `${array[i].title} was written by "${array[i].author}"`;
    deleteBtn.textContent = "Delete book";
    deleteBtn.setAttribute('data-attribute', i);
    if (array[i].read) {
      readbtn.textContent = 'I have read this book';
    } else {
      readbtn.textContent = `I havn't read this book`;
    }

    readbtn.addEventListener('click', (e) => {
      array[i].read = !(array[i].read);
      displayLibrary(myLibrary);

    })
    deleteBtn.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-attribute');
      removeBook(index);
      displayLibrary(myLibrary);
});

    container.appendChild(bookcard);
    bookcard.appendChild(title);
    bookcard.appendChild(body);
    bookcard.appendChild(deleteBtn);
    bookcard.appendChild(readbtn);

  };
};

newBookBtn.addEventListener('click', () => {
  formelt.classList.toggle('display');
});

function removeBook(index) {
  myLibrary.splice(index, 1);
  // displayLibrary(myLibrary);
};
displayLibrary(myLibrary)

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newbook = new Book(title.value, author.value, pages.value, read.checked);
  if ((title.value === '') || (author.value === '') || pages.value === '') {
  displayLibrary(myLibrary)
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
  alert(`Can't create book because some properties are missing`)
  return;
  }
  addBookToLibrary(newbook);
  displayLibrary(myLibrary)
  console.log(myLibrary)
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
});

// console.log(myLibrary)

