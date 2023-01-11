// Generics
var Stack = /** @class */ (function () {
    function Stack() {
        this.S = [];
    }
    Stack.prototype.push = function (item) {
        this.S.push(item);
    };
    Stack.prototype.isEmpty = function () {
        return this.S.length == 0;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty())
            throw "The stack is empty";
        var item = this.S[this.S.length - 1];
        this.S.pop();
        return item;
    };
    return Stack;
}());
var S1 = new Stack();
S1.push(1);
S1.push(2);
S1.push(3);
while (!S1.isEmpty())
    console.log(S1.pop());
console.log('-------------------------');
var S2 = new Stack();
S2.push('John');
S2.push('Jill');
S2.push('Alex');
S2.push('Mary');
while (!S2.isEmpty())
    console.log(S2.pop());
