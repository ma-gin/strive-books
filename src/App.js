import './App.css';
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import MyNav from "./components/MyNav";
import DisplayLatest from './components/LatestRelease';


function App() {
  return (
    <div>
      <MyNav bookstore="Strive Books"></MyNav>
      <Welcome></Welcome>
      <DisplayLatest></DisplayLatest>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
