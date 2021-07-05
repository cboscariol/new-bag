import './style.css'
import { useState } from 'react'
import data from '../../data.json'

function Itens({ cartItens, setCartItens }) {
  const [itens] = useState(data.foods)
  function adicionarAoCarrinho(id) {
    let currentCartItens = [...cartItens]
    const itenExiste = currentCartItens.find((iten) => iten.id === id)

    if (itenExiste) {
      currentCartItens = currentCartItens.map(item => {
        if (item.id === id) {
          item.quantidade += 1
        }
        return item
      })
    } else {
      const iten = itens.find((iten) => iten.id === id)
      currentCartItens = [...currentCartItens, iten]
    }

    setCartItens(currentCartItens)
  }

  return (
    <>
      <div className='container-iten'>
        {itens.map((item) =>
        (
          <div key={item.id} className='card-iten'>
            <img src={item.imagem} className="card-img-top image-top" alt="imagem-do-produto" />
            <div className='card-iten-content'>
              <h5>{item.produto}</h5>
              <h6 className='card-price'>Preço R${item.preco}</h6>
            </div>
            <div className='adicionar-button'>
              <button type="button" className="btn btn-primary btn-sm" onClick={() => adicionarAoCarrinho(item.id)}>ADICIONAR AO CARRINHO</button>
            </div>
          </div>
        )
        )}
      </div>
    </>
  )
}


export default Itens
