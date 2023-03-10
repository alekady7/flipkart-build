import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './Cart/Cart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
