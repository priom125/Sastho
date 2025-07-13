import {BrowserRouter as Router, Route, Routes, useNavigate, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Chat from './pages/Chat'
import Doctor from './pages/Doctor'
import Help from './components/Help'

function App() {
  return (
    <div>
    
     <BrowserRouter>
       <Navbar />
     <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/help" element={<Help />} />
        {/* Add more routes as needed */}
     </Routes>
     </BrowserRouter>
      
    </div>
  )
}

export default App