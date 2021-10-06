class User {
    constructor(name, surname, books, pets) {
        this.name = name,
        this.surname = surname,
        this.books = [],
        this.pets = []
    }
    getFullname() { 
        return `${this.name} ${this.surname}`;
    }
    addPet(name) {
        this.pets.push(name);
    }
    countPets() {
        return console.log(this.pets.length);
    }
    addBook(name, author) {
        const book = {
            Name: name,
            Author: author
        }
        this.books.push(book);
    }
    getBookNames() {
        return console.log(this.books.map(n => n.Name));
    }
}


const user = new User("Francisco", "Macadam")
user.getFullName()
user.addMascota("Dog")
user.addMascota("Cat")
user.countMascotas()
user.addBook('Libertad, Libertad, Libertad', 'William Golding')
user.addBook('Otra vez SOPA', 'Isaac Asimov')
user.getBookNames()