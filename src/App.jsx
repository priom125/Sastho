import {BrowserRouter as Router, Route, Routes, useNavigate, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Chat from './pages/Chat'

function App() {
  return (
    <div>
    
     <BrowserRouter>
       <Navbar />
     <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        {/* Add more routes as needed */}
     </Routes>
     </BrowserRouter>
      
    </div>
  )
}

export default App