import getPosts from './state.js'

///-------------------------------------------------
/// Renders Blog posts page
///
function renderPosts() {
    const posts = getPosts();
    let template = `
        <nav>
        <h1>All Blogs</h1>
        <button onClick="renderCreateBlog()">Add a new blog</button>
        </nav>
        <div>
        `;

    posts.forEach(post => {
        template += `
        <div class="post">
            <h2>${post.title}</h2>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body.slice(0, 200)}...</p>
            <button onClick="renderDetails(${post.id})">Read more</button>
        </div>
        `
    });

    template += "</div>";

    const container = document.querySelector('#root');
    container.innerHTML = template;
} // end-renderPosts
  
// Add button callback functions to the global scope    
// If we do not do this, callback's are NOT found
window.renderPosts = renderPosts;

export default renderPosts;