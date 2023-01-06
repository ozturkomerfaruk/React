function renderCreate(){
    let checked = {}
    categories.forEach((category, index) => {
        if (index == 0)
            checked[category] = "checked"
        else
            checked[category] = ""
    });

    let template = `
        <h6>Create a New Note</h6>

        <form id = "noteForm" class="col s12" onSubmit="createNote()">
        <div class="row">
            <div class="input-field col s12">
            <textarea id="title" class="materialize-textarea validate" required></textarea>
            <label for="title">Note Title</label>
            </div>

            <div class="input-field col s12">
            <textarea id="details" class="materialize-textarea validate" required></textarea>
            <label for="details">Details</label>
            </div>

            <h6>Note Category</h6>
    `;

    categories.forEach(category => {
        template += `
        <p>
        <label>
            <input class="with-gap" id="${category}" name="note-category" type="radio" ${checked[category]} />
            <span>${category.charAt(0).toUpperCase() + category.slice(1)}</span>
        </label>
        </p>                
        `
    })    

    template += `    
            <br>
            <a type="submit" onClick="createNote()" class="btn purple accent-2">
                <span>Submit</span>
                <i class="material-icons right">send</i>
            </a>            
        </div>
        </form>    
    `;

    history.replaceState(null, '', '/create')
    document.querySelector('#root').innerHTML = template;
} // end-renderCreate

function createNote(){
    const e = window.event;  // Get the event
    e.preventDefault();

    const form = document.querySelector('#noteForm');
    const title = form.title.value.trim();
    const details = form.details.value.trim();
    if (title === "" || details === "") return;

    var radioButtons = document.getElementsByName("note-category");
    let selectedCategory = 0;
    for (let i=0; i<radioButtons.length; i++){
        if (radioButtons[i].checked){
            selectedCategory = i;
            break;
        } // end-if
    } // end-for

    const categories = ['money', 'todo', 'reminder', 'work'];
    addNewNote(title, details, categories[selectedCategory]);
    navigate('/');
} // end-createNote