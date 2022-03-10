import "./App.css"
import MyNav from "./components/MyNav"
import Welcome from "./components/Welcome"
import LatestRelease from "./components/LatestRelease"
import MyFooter from "./components/MyFooter"
import books from "./data/romance.json"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration"/>
      </Routes>
      <MyNav bookstore="Strive Books"></MyNav>
      <Welcome></Welcome>
      <LatestRelease books={books}></LatestRelease>
      <MyFooter></MyFooter>
    </BrowserRouter>
  )
}

export default App
