import './App.css';
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron'
import MyNav from "./components/MyNav";


function App() {
  return (
    <div>
      <MyNav bookstore="Strive Books"></MyNav>
      <MyJumbotron></MyJumbotron>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
