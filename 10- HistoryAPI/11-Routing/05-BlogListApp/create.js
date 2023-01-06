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

    history.replaceState(null, '', 'create')
    document.querySelector('#root').innerHTML = template;
} // end-renderCreateBlog

function deleteBlog(id){
    posts = posts.filter((post)=>post.id != id);
    renderPosts();
} // end-deleteBlog

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
        id: ++lastPostId,
        title: title,
        body: body,
        likes: 0,
    };

    // Add the new post to the end of the posts
    posts.push(doc);
    renderPosts();
} // end-createPost