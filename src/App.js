import './App.css';
import MyFooter from './components/MyFooter'
import MyNav from "./components/MyNav";


function App() {
  return (
    <div>
      <MyNav bookstore="Strive Books"></MyNav>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
