import './App.css';
import { useState } from 'react'
import Bag from './components/Bag'
import Itens from './components/Itens';

function App() {
  const [cartItens, setCartItens] = useState([])

  return (
    <>
      <Itens cartItens={cartItens} setCartItens={setCartItens} />
      <Bag cartItens={cartItens} setCartItens={setCartItens} />
    </>
  );
}

export default App;
