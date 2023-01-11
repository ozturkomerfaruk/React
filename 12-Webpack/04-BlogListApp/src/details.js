import { getPost, deletePost } from './state.js'

///-------------------------------------------------
/// Renders Details page
///
function renderDetails(id){
    const post = getPost(id);
    const template = `
        <div>
            <h1>${post.title}</h1>
            <p>${post.body}</p>
        </div>
        <button onClick="renderPosts()">back</button>
        <button onClick="deleteBlog(${post.id})">delete</button>
    `;

    const container = document.querySelector('#root');
    container.innerHTML = template;
} // end-renderDetails

function deleteBlog(id){
    deletePost(id);
    renderPosts();
} // end-deleteBlog

// Add button callback functions to the global scope    
// If we do not do this, callback's are NOT found
window.renderDetails = renderDetails;
window.deleteBlog = deleteBlog;

export default renderDetails;