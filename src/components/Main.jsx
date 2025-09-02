import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./ui/Nav"
import Home from "./pages/Home"
import Contect from "./pages/Contect"
import Users from "./pages/Users"
import UserDialog from "./ui/UserDialog"
import ProductDetail from "./pages/ProductDetail"
import img1 from "../assets/img/_.jpeg";
import img2 from "../assets/img/anime_icon.jpeg";
import img3 from "../assets/img/Ishowspeed.jpeg";
import img4 from "../assets/img/❦.jpeg";

function Main() {
  const user = [
        {
            id: 1,
            name: "john",
            gender: "male",
            age: 20,
            image: img1
        },
        {
            id: 2,
            name: "janny",
            gender: "female",
            age: 18,
            image: img2
        },
        {
            id: 3,
            name: "kris",
            gender: "male",
            age: 23,
            image: img3
        },
        {
            id: 4,
            name: "kakada",
            gender: "male",
            age: 16,
            image: img4
        }
    ]
  return (
    <>
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contect/>} />
                <Route path="/products/:id" element={<ProductDetail />} /> {/* dynamic route */}
                <Route path="/users" element={<Users users={user}/>}/>
                <Route path="/users/:id" element={<UserDialog data={user}/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default Main