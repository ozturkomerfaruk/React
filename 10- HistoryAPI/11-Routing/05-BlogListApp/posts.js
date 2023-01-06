///-------------------------------------------------
/// Renders Blog posts page
///
function renderPosts() {
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
  
    history.replaceState(null, '', '/')
    document.querySelector('#root').innerHTML = template;
  } // end-renderPosts