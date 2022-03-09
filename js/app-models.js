function InventoryItem(){
    const STATUSES = {IN_STOCK: 'available', OUT_OF_STOCK: 'not available'}

    //default state of the books
    this.status = STATUSES.IN_STOCK

    //methods
    this.notAvailable = function (){
        this.status = STATUSES.OUT_OF_STOCK;
    }

    this.isAvailable = function (){
        return this.status === STATUSES.IN_STOCK
    }
}

class Book extends InventoryItem{
    title = '';
    pageCount = 0;
    author = '';
    price = 0;

    constructor(title, pageCount, author , price) {
        super();

        this.title = title;
        this.pageCount = pageCount;
        this.author = author;
        this.price = price;
    }
}

class Magazines extends InventoryItem{
    title = '';
    pageCount = 0;
    author = '';
    company = '';
    price = 0;

    constructor(title, pageCount, author, company, price) {
        super();

        this.title = title;
        this.pageCount = pageCount;
        this.author = author;
        this.company = company;
        this.price = price;
    }
}