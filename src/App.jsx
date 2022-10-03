import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage  from "./page/RegisterPage"
import 'antd/dist/antd.css'; 
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
     
  )
}

export default App
