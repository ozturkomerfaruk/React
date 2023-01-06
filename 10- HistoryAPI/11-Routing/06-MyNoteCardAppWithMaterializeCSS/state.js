const categories = ['money', 'todo', 'reminder', 'work'];

let notes = [
    {
      title: "Complete my ninja training",
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      category: "work",
      id: 1
    },
    {
      title: "Pay the bill",
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ips",
      category: "money",
      id: 2
    },
    {
      title: "Some note",
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      category: "reminder",
      id: 3
    },
    {
      title: "Do the dishes",
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum has been the industry's standard dummy text.",
      category: "todo",
      id: 4
    },
    {
      title: "Reminder 2",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem soluta aperiam sed cum perspiciatis, nobis laborum dolorem similique dolore nisi odit voluptatum nesciunt mollitia!",
      category: "reminder",
      id: 5
    }
  ]

  let lastNoteId = 5;

  function findNote(id){
    for (let i=0; i<notes.length; i++)
      if (notes[i].id == id)
        return notes[i];
    return null;
  } // end-findNote

  function addNewNote(title, details, category){
    notes.push({title, details, category, id: ++lastNoteId})  
  } // end-addNewNote

  function deleteNote(id){
    notes = notes.filter(note=>note.id != id);    
  } // end-deleteNote

  function updateNote(id, title, details, category){
    for (let i=0; i<notes.length; i++)
      if (notes[i].id == id){
        notes[i].title = title;
        notes[i].details = details;
        notes[i].category = category;
        return;
      } // end-if
  } // end-updateNote
