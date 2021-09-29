import './App.css';
import Nav from './componants/Navegation'
import Home from './componants/Home'
import Cards from './componants/Cards';
import Footer from './componants/Footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Cards/>
      <Footer/>
    </div>
    
  );
}

export default App;
