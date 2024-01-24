
import { Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import { Navbar } from './component/Navbar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { Comments } from './pages/Comments';



function App() {
  

  return (
    <>
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Comments" element={<Comments />}/>
      </Routes>
    </div>
    </>
  )
}

export default App
