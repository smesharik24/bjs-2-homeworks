
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
    



//2



findBookBy(type, value) {
    if (this.books.find(book => book[type] === value)) {
        return book;
    }else if (this.books.find(book => book[type] == undefined)) {
        return null;
    }
}

// Ваша реализация должна быть такой:
// Создать переменную, куда запишется результат метода (find). Значение переменной будет либо объект, либо undefined. Ничего другого метод find по определению вернуть не способен.
// Исходя из того, что записалось в переменную из п.1 ретёрнуть либо объект, либо null

// Не факт. Надо смотреть документацию к каждому методу. Но конкретно у find() колбэк всегда возвращает булево значение. Да и вообще, везде, где происходит проверка истинности в колбэке - там будет булево значение.
// Но! Колбэк - это всего лишь функиця, которая передается в другую функцию в виде аргумента. Она может быть абсолютно любая. Вы можете в своей логике создавать и использовать функции-колбэки, которые будут возвращать то, что вам нужно, будь то булевы значения, строки, числа, объекты, массивы, что угодно. 