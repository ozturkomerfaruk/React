import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import CounterContextProvider from './contexts/CounterContext'
import Navbar from './comps/Navbar' 
import Footer from './comps/Footer'
import Home from './pages/Home'
import About from './pages/About'
import UserList from './pages/UserList'
import UserDetails from './pages/UserDetails'

function App() {
  return (
    <CounterContextProvider>
      <BrowserRouter>
        <div className="content">
          <Navbar />

          <Routes>
            {/* Three different ways to declare and render routes */ }
            <Route
              exact
              path="/"
              element={<Home />}     
            />
            
            <Route path="/about"
              element={<About />}
            />

            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id/*" element={<UserDetails />} />          

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
          <Footer />
        </div>
      </BrowserRouter>
    </CounterContextProvider>      
  )
}

export default App
