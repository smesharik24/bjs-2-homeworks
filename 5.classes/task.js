
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
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = "magazine"; 
    }
}

class Book extends PrintEditionItem {
    constructor(autor, name, releaseDate, pagesCount) {
        super (name,releaseDate,pagesCount);
        this.autor = autor;
        this.type = "book";
    } 
}

class NovelBook extends Book {
    constructor(autor, name, releaseDate, pagesCount) {
        super (name,releaseDate,pagesCount);
       this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(autor, name, releaseDate, pagesCount) {
        super (name,releaseDate,pagesCount);
       this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(autor, name, releaseDate, pagesCount) {
        super (name,releaseDate,pagesCount);
        this.type = "fantastic";
    }
}
    