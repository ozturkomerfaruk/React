export default function bar() {
    const node = document.createElement("h1")
    node.innerText = 'Inside bar from bar.js'
    document.body.appendChild(node)
    console.log(node)
}