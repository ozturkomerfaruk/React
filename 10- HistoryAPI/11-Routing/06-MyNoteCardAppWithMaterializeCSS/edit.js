function renderEdit(id){
    const note = findNote(id)
    let checked = {}
    categories.forEach(category => {
        if (category == note.category)
            checked[category] = "checked"
        else
            checked[category] = ""
    });
    
    let template = `
        <h6>Edit Note</h6>

        <form id = "editNoteForm" class="col s12" onSubmit="changeNoteHandler(${id})">
        <div class="row">
            <div class="input-field col s12">
                <textarea id="title" class="materialize-textarea validate" required>${note.title}</textarea>
                <label for="title" class="active">Note Title</label>
            </div>

            <div class="input-field col s12">
                <textarea id="details" class="materialize-textarea validate" style="height: auto;" required>${note.details}</textarea>
                <label for="details" class="active">Details</label>
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
            <a type="submit" onClick="cancelEdit()" class="btn purple accent-2">
                <span>Cancel</span>
                <i class="material-icons right">cancel</i>
            </a>            
            <a type="submit" onClick="changeNoteHandler(${id})" class="btn purple accent-2">
                <span>Submit</span>
                <i class="material-icons right">send</i>
            </a>            
        </div>
        </form>    
    `;

    history.replaceState(null, '', '/edit')
    document.querySelector('#root').innerHTML = template;
    const form = document.querySelector('#editNoteForm');
    form.title.click()
    form.details.click()
} // end-renderCreate

function cancelEdit(){
    navigate('/');
} // end-cancelChange

function changeNoteHandler(id){
    const e = window.event;  // Get the event
    e.preventDefault();

    const form = document.querySelector('#editNoteForm');
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

    updateNote(id, title, details, categories[selectedCategory]);
    navigate('/');
} // end-changeNoteHandler