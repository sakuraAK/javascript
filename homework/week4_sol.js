// Task1

let book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
  isAvailable: true
};

console.log(`The book ${book.title} by
     ${book.author} was first published in ${book.year}`);


book.isAvailable = false;

book.format = "hardcover";


console.log(book);

// Task 2

let library = [
  { title: "Book 1", author: "Author 1", year: 2000, isAvailable: true, rating: 3.5 },
  { title: "Book 2", author: "Author 2", year: 2010, isAvailable: false, rating: 4 },
  { title: "Book 3", author: "Author 3", year: 2015, isAvailable: true, rating: 2.1},
  { title: "Book 4", author: "Author 4", year: 2020, isAvailable: false, rating: 4.5}
];

// let library = [];
// let book1 = { title: "Book 1", author: "Author 1", year: 2000, isAvailable: true };
// library.push(book1);
// let book2 = { title: "Book 1", author: "Author 1", year: 2000, isAvailable: true };

let availableCounter = 0;

for (let i = 0; i < library.length; i++) {
    
    let currentBook = library[i];
    if (currentBook.isAvailable) {
        console.log(currentBook.title);
        availableCounter++;
    }
}

console.log(`Total number of books: ${library.length}
             Available books: ${availableCounter}`);


// Task 3

function findBook(title) {
    for (let i = 0; i < library.length; i++) {
        let currentBook = library[i];
        if (currentBook.title === title) {
            return currentBook;
        }
        
    }   
    return "Not found";
}

let title = "Book 1";
console.log(`Search result for ${title}: ${findBook(title)}`);

// Task 4


let total = 0;

for (let i = 0; i < library.length; i++) {
    let currentBook = library[i];
    total = total + currentBook.year;          
}   

let average = total / library.length;

console.log(`Average publication year: ${Math.floor(average)}`);


//Bonus
function findHighestRatedBook() {
    let maxRating = 0;
    for (let i = 0; i < library.length; i++) {
        let currentBook = library[i];
        if (currentBook.rating > maxRating) {
            maxRating = currentBook.rating;
        }         
    }   
    return maxRating;
}

console.log(`Max rating is: ${findHighestRatedBook()}`);
