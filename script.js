const library = [];

//Ajouter un nouveau livre
function addBook(book) {
  if (
    typeof book.title === "string" &&
    typeof book.author === "string" &&
    typeof book.publicationYear === "number" &&
    typeof book.borrowed === "boolean"
  ) {
    library.push(book);
    console.log("Livre ajouté :", book);
  } else {
    console.error("Erreur");
  }
}

//lister les livres disponibles
addBook({
  title: "Spark of the Everflame",
  author: "Penn Cole",
  publicationYear: 2025,
  borrowed: false,
});

addBook({
  title: "Une braise sous la cendre",
  author: "Sabaah Tahir",
  publicationYear: 2025,
  borrowed: false,
});

addBook({
  title: "Shatter Me",
  author: "Tahereh Mafi",
  publicationYear: 2025,
  borrowed: false,
});

addBook({
  title: "Super livre",
  author: "Mathéo",
  publicationYear: 2000,
  borrowed: false,
});

function getAvailableBooks() {
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    if (book.borrowed === false) {
      console.log(book);
    }
  }
}

//rechercher un livre par titre
function searchByTitle(title) {
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    if (book.title.tolowerCase().trim() === title.tolowerCase().trim()) {
      return book;
    }
  }
}

//Recherche par auteur ou année
function searchByAuthor(author) {
   for (let i = 0; i < library.length; i++) {
    const book = library[i];
    if (book.author.tolowerCase().trim() === author.tolowerCase().trim()) {
      return book;
    }
  }
}

const searchForm = document.getElementById("search-form");
const searchTitle = document.getElementById("search-title");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchedBook = searchByTitle(searchTitle.value);
    const searchResult = document.getElementById("search-result");
    if (searchedBook) {
        searchResult.textContent = Le livre ${searchedBook.title} de ${searchedBook.author} 
        est ${searchedBook.borrowed ? "emprunté" : "disponible"}
    }
});

//Emprunter un livre
function borrowBook(title) {
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    if (book.title.toLowerCase().trim() === title.toLowerCase().trim()) {
      if (book.borrowed === false) {
        book.borrowed = true;
        console.log(`Le livre "${book.title}" a été emprunté.`);
        return;
      } else {
        console.log(`Le livre "${book.title}" est déjà emprunté.`);
        return;
      }
    }
  }
}

//retourner un livre
function returnBook(title) {
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    if (book.title.toLowerCase().trim() === title.toLowerCase().trim()) {
      if (book.borrowed === true) {
        book.borrowed = false;
        console.log(`Le livre "${book.title}" a été retourné`);
        return;
      } else {
        console.log(`Le livre "${book.title}" n'était pas emprunté.`);
        return;
      }
    }
  }
  console.log("Livre non trouvé.");
}

