import logo from './logo.svg';
import './App.css';
import Header from './Components/header/header.js';
import Navbar from './Components/navbar/navbar.js';
import Items from './Components/items/items.js';
import Menu from './Components/menu/menu.js';
import Footer from './Components/footer/footer';
import Body from './Components/body/body';
function App() {
  return (
    <div className="App">
      <Header /> 
      <Navbar />
      <Items />
      <Menu />
      <Footer />
      {/* <Body /> */}
      {/* <Body /> */}
    </div>
  );
}

export default App;
