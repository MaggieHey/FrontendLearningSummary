var favoriteBooks = [];
function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
}

function printFavoriteBooks() {
  console.log(`
    Favorite Books:${favoriteBooks.length};
    `);
  for (let i = 0; i < favoriteBooks.length; i++) {
    console.log(`   
        Favorite Books:${favoriteBooks[i]};
    `);
  }
}
addFavoriteBook("MT");
addFavoriteBook("MTT");
addFavoriteBook("MTTT");
addFavoriteBook("MTTT");
printFavoriteBooks();
