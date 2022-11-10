const tableDiv = document.querySelector("#table")
const pageNumsDiv = document.querySelector("#pageNums")

let currPage = 1;
const numTodosPerPage = 10;
const numPages = Math.ceil(todos.length/numTodosPerPage);

function renderTable(){
    const lastItemIndex = currPage*numTodosPerPage;
    const firsItemIndex = lastItemIndex - numTodosPerPage;
    const items = todos.slice(firsItemIndex, lastItemIndex);

    const liStyle = `
        display:flex; 
        justify-content: space-between; 
        height: 50px; 
        border-bottom: 1px solid black; 
        padding-top: 0;   
    `;

    // Render the items
    let template = '<ul>';
    items.forEach(item=>{
        template += `
            <li style= "${liStyle}">
                <h4>${item.title}<h4>
                <button style="color: ${item.completed? 'green': 'red'}">
                    ${item.completed? 'completed': 'not completed'}
                </button>
            </li>
        `;
    })  
    template += '</ul>'

    tableDiv.innerHTML = template;
} // end-renderTable

function renderPageNums(){
    let template = '<div>';

    for (let i=1; i<=numPages; i++){
        template += `<button style="margin:auto" 
        class="btn ${i==currPage? 'active': ''}"
        onclick="pageClicked(${i})">${i}</button>
        `;
    } // end-for
    template += "</div>"
    pageNumsDiv.innerHTML = template;
}

function pageClicked(pageNum){
    if (pageNum == currPage) return;
    currPage = pageNum;
    renderAll();
} // end-pageClicked

function renderAll(){
    renderTable();
    renderPageNums();
} // end-renderAll

window.addEventListener('DOMContentLoaded', (e) => {
    renderAll();
});