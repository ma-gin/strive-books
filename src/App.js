import './App.css';
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import MyNav from "./components/MyNav";
import LatestRelease from './components/LatestRelease';


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
