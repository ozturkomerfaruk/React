class Person {
    private name: string
    protected id: number
    public married?: boolean

    constructor(name: string, id: number, married?: boolean){
        this.name = name;
        this.id = id;
        if (married) this.married = married;
    } 
    
    public printName(): void {
        console.log(this.name)
    }
    
}

const person1 = new Person('John', 1, true)
const person2 = new Person('Jill', 2)

console.log(person1)
console.log(person2)

//person1.name = 'Alex'  // Will give an error because name is private
person1.married = false // No problem. married is public
console.log(person1)
console.log('--------------------------------------')

//------------------------------------
// Sub class
class Employee extends Person {
    private position: string

    constructor(name: string, id: number, position: string, married?: boolean){
        super(name, id, married)
        this.position = position
    }

    public print(): void {
        this.printName()
        console.log(this.id, this.position)
        if (this.married) console.log(this.married)
    }
}

const empl = new Employee('Mary', 4, 'Developer', true)
empl.print()
