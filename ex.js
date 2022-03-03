// TODO: define addFavoriteBook(..) function
// Llamamos a la funcion en lienas 20-24
function addFavoriteBook(bookName){
    if (!bookName.includes('Great') && !bookName.includes('great')) {
        favoriteBooks.push(bookName)
    }
}

// TODO: define printFavoriteBooks() function

function printFavoriteBooks(){
    console.log(`Favorite Books: ${favoriteBooks.length}`)
    for (let book of favoriteBooks) {
        console.log(`Fav Books: ${book}`) 
    }
}

let favoriteBooks = []

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks()

/*

*/