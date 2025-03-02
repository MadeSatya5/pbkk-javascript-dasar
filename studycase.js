const data = [
  {
    id: 1,
    title: "Laskar Pelangi",
    publicationDate: "2005-01-01",
    author: "Andrea Hirata",
    genres: [
      "drama",
      "coming-of-age",
      "education",
      "fiction",
      "literature",
      "indonesian",
    ],
    hasMovieAdaptation: true,
    pages: 529,
  },
  {
    id: 2,
    title: "One Piece",
    publicationDate: "1997-07-22",
    author: "Eiichiro Oda",
    genres: ["adventure", "fantasy", "action", "comedy", "manga"],
    hasMovieAdaptation: true,
    pages: 1064,
  },
  {
    id: 3,
    title: "Bumi Manusia",
    publicationDate: "1980-01-01",
    author: "Pramoedya Ananta Toer",
    genres: ["historical fiction", "romance", "political"],
    hasMovieAdaptation: true,
    pages: 535,
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// --------------- Destructuring -----------------

const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book; // Destructuring Object
// console.log(author, title);
// genres;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, a, ...otherGenres] = genres; // Destructuring Array, ...(Rest / Spread) Harus diakhir
// console.log(primaryGenre, secondaryGenre, a, otherGenres);

// -------------- Rest / Spread Operator ---------------
const newGenres = [...genres, "epic fantasy"]; 
// newGenres;

const updatedBook = {
  ...book,
  // Adding a New Property
  moviePublicationDate: "2001-12-19",

  //Overriding an existing property
  pages: 1120,
};
// updatedBook;

// --------------- Template Literals ----------------
const summary = `${title} is a book`;
// summary;

// --------------- Ternary Operators ----------------
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
// pagesRange;
const pagesRange1 =
  updatedBook.pages > 1000 ? "over a thousand" : "less than 1000";
// pagesRange1;

// ---------------- Array Map Method ----------------------  

const books = getBooks();

const titles = books.map((book) => book.title);
// titles;

// ---------------- Array Filter Method -------------------- 
const longBooks = books
  .filter((book) => book.pages > 500)
// longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
// adventureBooks;

// ---------------- Array Reduce Method --------------------
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// pagesAllBooks;

// ---------------- Array Sort Method ----------------------
const arr = [3, 7, 1, 9, 6];
const sortedArr = arr.slice().sort((a, b) => a - b);
// sortedArr;
// arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// sortedByPages;
