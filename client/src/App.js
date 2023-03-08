import './App.css';
import Ship from './components/Ship';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    // Needs to be wrapped in user context as soon as thats working
    <div className="App">
      <Header/>
      <Ship/>
      <Footer/>
    </div>
  );
}

export default App;
