import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Productos from "./components/Productos/Productos"
import ItemDetail from "./components/ItemDetail/ItemDetail"

const App = () => {
  return (
    <div >
     
     <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>} /> 
                    <Route path="/productos" element={<Productos/>}/>
                    <Route path="/products/:productId" element={<ItemDetail/>}/>
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
      
    </div>
    // Cada componente debe tener su carpeta 
  )
}

export default App