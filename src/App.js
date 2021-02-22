import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import "./App.css";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <div className="App">
      <Header/>
      <GameBoard/>
    </div>
  );
}

export default App;
