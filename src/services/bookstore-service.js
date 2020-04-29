import {Titles, Authors, Images} from '../mock/mock';


export default class BookstoreService {

  _countBooks = 15;

  _createMockBook = (bookIndex, id) => ({
    id,
    title: Titles[bookIndex],
    author: Authors[bookIndex],
    price: Math.floor(Math.random() * 50 + 1),
    coverImage: Images[bookIndex],
  });

  _createMockBooks = (countBook) => {
    let bookIndex = 0;
    const books = new Array(countBook)
      .fill(``)
      .map((book, i) => {
        book = this._createMockBook(bookIndex, ++i);
        bookIndex = bookIndex === Titles.length - 1 ? 0 : ++bookIndex;
    
        return book;
      });
  
    return books;
  };

  getBooks = async () => {
    return new Promise((resolve, reject) => {
      const data = this._createMockBooks(this._countBooks);
      setTimeout(() => {

        if (Math.random() > 0.95) {
          return reject(new Error(`Something bad happened`));
        }

        resolve(data);
      }, 500);
    });
  };
}
