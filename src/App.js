import "./App.css"
import Navigation from "./components/main/Navigation"
import { Routes, Route } from "react-router-dom"
import Home from "./components/views/Home"
import Footer from "./components/main/Footer"
import Registration from "./components/Registration"

function App() {
  return (
    <>
      <Navigation bookstore="Strive Books"></Navigation>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<Registration />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
