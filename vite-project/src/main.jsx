
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'



createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about-us" element={<About/>}/>
    <Route path="/contact-us" element={<Contact/>}/>
 </Routes>
 </BrowserRouter>
)
