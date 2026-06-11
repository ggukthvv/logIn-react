import './App.css'
import Dashboard from './pages/dashboard/Dashboard';
import LoginPage from './pages/login/LoginPage'
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={() => <>div</>} />
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
