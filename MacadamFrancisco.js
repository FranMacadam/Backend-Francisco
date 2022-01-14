class User {
    constructor(name, surname, books, pets){
        this.name = name;
        this.surname = surname;
        this.books = [{name: name, author: author}];
        this.pets = [];
    }
    getFullName(name){
        console.log(`Your name is ${this.name}`);
    }
    addPet(pets){
        this.pets.push(pets)
        console.log(pets);
    }
    countPets(){
        console.log(`You have ${this.pets.length} pets`)
    }
    addBook(name, author){
        this.books.push(name, author)
    }
    getBookNames(){
        console.log(`${books.name}`)
    }
}