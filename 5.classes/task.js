
//1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    get state() {
        return this._state;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }
}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super (name,releaseDate,pagesCount);
        this.type = "magazine"; 
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super (name,releaseDate,pagesCount);
        this.author = author;
        this.type = "book";
    } 
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author,name,releaseDate,pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author,name,releaseDate,pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author,name,releaseDate,pagesCount);
        this.type = "detective";
    }
}
    



//2

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    } 
    
    findBookBy(type, value) {

        const found = this.books.find(book => book[type] === value);
        if (found == undefined) 
            return null;
        
        return found;
    }

    giveBookByName(bookName) {

        const found = this.books.find(book => book.name === bookName);

        if (found == undefined)
            return null;

        const index  = this.books.indexOf(found);

        if (index > -1) {
            this.books.splice(index, 1);
        }

        return found;

    }
}