class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}
	addFavoriteBook(bookName){
		if (!bookName.includes('Great') && !bookName.includes('great')) {
			this.favoriteBooks.push(bookName);
			console.log(this.favoriteBooks)
		}
	}
	printFavoriteBooks(){
		console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
		for (let book of this.favoriteBooks) {
			console.log(book);
		}
	}

}

// bookNames - esta reciviendo el arreglo de cb [...] 
//function cb(["A Song of Ice and Fire", "The Great Gatsby", ...])
function loadBooks( bookshelf ) {
	fakeAjax(BOOK_API, function cb(bookNames){
		for (let libro of bookNames) {
			bookshelf.addFavoriteBook(libro);
		}
			bookshelf.printFavoriteBooks();
	})
};

var BOOK_API = "https://some.url/api";
let myBook = new Bookshelf()
loadBooks(myBook);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
