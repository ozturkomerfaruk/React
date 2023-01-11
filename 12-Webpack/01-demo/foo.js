export default function foo() {
    const node = document.createElement("h1")
    node.innerText = 'Inside foo from foo.js'
    document.body.appendChild(node)
    console.log(node)
}