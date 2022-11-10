function renderNotes(){
    let template = '';

    const categoryAvatar = {
        'money': '<span class="circle green lighten-1 white-text">M</span>',
        'todo': '<span class="circle pink lighten-1 white-text">T</span>',
        'reminder': '<span class="circle blue lighten-1 white-text">R</span>',
        'work': '<span class="circle yellow lighten-1 white-text">W</span>'
    }

    notes.forEach(note=>{
        template += `
        <div class="col s12 l6">
          <div class="card grey lighten-5">
            <div class="card-content">
              <div class="card-header">
                <div class="flex">
                    ${categoryAvatar[note.category]}
                  <div>
                      <p class="card-title text-darken-4" style="margin-bottom: 0">
                      ${note.title}
                      </p>
                      <p>${note.category}</p>
                  </div>
                </div>
                <div> 
                  <span onClick="editNoteHandler(${note.id})">
                      <i class="material-icons editIcon"
                      style="margin-right: 10">edit</i>
                  </span>                                 
                  <a href="#yesNoDialog${note.id}" class="modal-trigger">
                      <i class="material-icons deleteIcon" 
                      style="margin-right:-25">delete_outlined</i>
                  </a>
                </div>
              </div>

              <p>${note.details}</p>
            </div>
          </div>
        </div>      
        `  

        template += `
        <div id="yesNoDialog${note.id}" class="modal">
            <div class="modal-content center">
                <h4>Delete this note?</h4>
            </div>
            <div class="modal-footer">
                <a onClick="deleteNoteHandler(${note.id})" class="modal-close btn red">Yes</a>
                <a class="modal-close btn green">No</a>
            </div>
        </div>        
        `;        
    })

    history.replaceState(null, '', '/')
    document.querySelector('#root').innerHTML = template;

    var elems = document.querySelectorAll('.modal');
    console.log(elems)
    M.Modal.init(elems);
} // end-renderNotes

/*-----------------------------------------------------*/
function editNoteHandler(id){
  renderEdit(id);
} // end-editNoteHandler

/*-----------------------------------------------------
 * Deletes an existing note and re-renders the page
 */
function deleteNoteHandler(id){
    deleteNote(id);
    setTimeout(renderNotes, 250); // Update the DOM 250 ms later
} // end-deleteNote
