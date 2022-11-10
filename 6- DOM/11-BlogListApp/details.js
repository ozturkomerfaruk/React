///-------------------------------------------------
/// Renders Details page
///
function renderDetails(id){
    const post = posts.filter((post)=>post.id == id)[0]
    const template = `
        <div>
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        </div>
        <button onClick="renderPosts()">back</button>
        <button onClick="deleteBlog(${post.id})">delete</button>
    `;

    history.replaceState(null, '', 'details')
    document.querySelector('#root').innerHTML = template;
} // end-renderDetails
