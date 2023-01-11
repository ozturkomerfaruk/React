// Include all project files here so that 
// webpack can bundle them together
import './state.js'
import './createBlog.js'
import './details.js'
import renderPosts from './posts.js'

// Render all posts after the page is loaded
window.addEventListener('DOMContentLoaded', () => renderPosts());