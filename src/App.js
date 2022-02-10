import "./App.css"
import MyNav from "./components/MyNav"
import Welcome from "./components/Welcome"
import LatestRelease from "./components/LatestRelease"
import MyFooter from "./components/MyFooter"
import books from "./data/romance.json"

function App() {
  return (
    <div>
      <MyNav bookstore="Strive Books"></MyNav>
      <Welcome></Welcome>
      <LatestRelease books={books}></LatestRelease>
      <MyFooter></MyFooter>
    </div>
  )
}

export default App
