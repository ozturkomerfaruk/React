import {addPost} from './state.js';

///-------------------------------------------------
/// Renders CreateBlog page
///
function renderCreateBlog(){
    const template = `
    <h1>Create a New Blog</h1>

    <form id="blogForm" onsubmit="createPost()">
        <input type="text" name="title" required placeholder="Blog title">
        <textarea name="body" required placeholder="Blog body"></textarea>
        <button>Create</button>
    </form>
    `;

    const container = document.querySelector('#root');
    container.innerHTML = template;
} // end-renderCreateBlog
  
function createPost(){
    const e = window.event;  // Get the event
    e.preventDefault();

    const form = document.querySelector('#blogForm');

    const title = form.title.value.trim()
    const body = form.body.value.trim()
    if (title == ""){
      alert("title cannot be empty")
      return;
    } // end-if

    if (body == ""){
      alert("body cannot be empty")
      return;
    } // end-if

    const doc = {
      title: title,
      body: body,
      likes: 0,
    };

    // Add the new post to the end of the posts
    addPost(doc);
    renderPosts();
} // end-createPost   

// Add button callback functions to the global scope    
// If we do not do this, callback's are NOT found
window.renderCreateBlog = renderCreateBlog;
window.createPost = createPost;

export default renderCreateBlog;

