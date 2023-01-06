import './App.css';
import React from 'react';
import { Link, BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  const items = [{id:1, title: "Item 1"}, {id:2, title: "Item 2"}, {id:3, title: "Item 3"}]

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    paddingRight: '1em',
    fontSize: '24px'
  }

  return (
    <BrowserRouter>
      <div className="container">
        {/* Links to the routes */}       
        <div className="navbar">
          <Link style={linkStyle} to="/">Home</Link>
          <Link style={linkStyle} to="/about">About</Link>
          <Link style={linkStyle} to="/contact">Contact</Link>
        </div>

        <Routes>
          {/* Three different ways to declare and render routes */ }
          <Route
            exact
            path="/"
            element={(
              <div>
                <h1>Here is a list of current items:</h1>
                <Home items={items}/>
              </div>
            )}
          />
          
          <Route path="/about"
            element={<About name="XYZ"/>}
          />

          <Route 
            path="/contact" 
            element={<Contact />} 
          />

          {/* Redirect /oldroute to the root route / */}              
          <Route 
            path="/oldroute" element={<Navigate to="/"/>} />

          {/* Default route: 404 */}
          <Route 
            path = "*"
            element = {(
              <div>
                <p>404: Page not found</p>
                <br/>
                <Link to="/">Press here to go home</Link>
              </div>
            )}
          />          
        </Routes>
      </div>
    </BrowserRouter>
  );
} //end-App

export default App;
