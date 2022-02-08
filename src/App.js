import './App.css';
import MyNav from "./components/MyNav"
import Welcome from "./components/Welcome"
import LatestRelease from "./components/LatestRelease"
import MyFooter from './components/MyFooter'

function App() {
  return (
    <div>
      <MyNav bookstore="Strive Books"></MyNav>
      <Welcome></Welcome>
      <LatestRelease></LatestRelease>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
