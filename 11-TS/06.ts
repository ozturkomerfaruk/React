// Generics
class Stack<T> {
    S: T []

    constructor(){
        this.S = []
    }

    push(item: T): void {
        this.S.push(item)
    }

    isEmpty(): boolean {
        return this.S.length == 0
    }

    pop(): T {
        if (this.isEmpty())
            throw "The stack is empty"
        const item: T = this.S[this.S.length-1]
        this.S.pop()
        return item
    }
}

const S1 = new Stack<number>()
S1.push(1)
S1.push(2)
S1.push(3)

while (!S1.isEmpty())
    console.log(S1.pop())

console.log('-------------------------')
const S2 = new Stack<string>()
S2.push('John')
S2.push('Jill')
S2.push('Alex')
S2.push('Mary')

while (!S2.isEmpty())
    console.log(S2.pop())
