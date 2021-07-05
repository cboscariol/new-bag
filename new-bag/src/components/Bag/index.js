import './style.css'


function Bag({ cartItens, setCartItens }) {

	function somar(id) {
		setCartItens(cartItens.map(item => {
			if (item.id === id) {
				item.quantidade += 1
			}
			return item
		}))
	}

	function subtrair(id) {
		setCartItens(cartItens.map(item => {
			if (item.id === id && item.quantidade > 0) {
				item.quantidade -= 1
			}
			return item
		}))
	}

	function totalCompra() {
		let total = 0
		cartItens.forEach(item => {
			total += item.preco * item.quantidade
		})
		return total.toFixed(2);
	}

	function finalizarCompra(event) {

	}

	return (
		<>
			<div className='productContainer'>
				{cartItens.map((item) =>
				(
					<div key={item.id} className='card2'>
						<img src={item.imagem} className="card-img-top" alt="imagem-do-produto" />
						<div className='card3'>
							<h5>{item.produto}</h5>
							<h6 className='card-price'>Preço R${item.preco}</h6>
							<h6>Total do item R$ {(item.quantidade * item.preco).toFixed(2)}</h6>
						</div>
						<div className='counter-box'>
							<button type="button" className="btn btn-primary btn-sm" onClick={() => subtrair(item.id)}>-</button>
							<p>{item.quantidade}</p>
							<button type="button" className="btn btn-primary btn-sm" onClick={() => somar(item.id)}>+</button>
						</div>
					</div>
				)
				)}
				<p className='total'>Total R$ {totalCompra()}</p>
			</div>
			<button type="button" className="btn btn-outline-primary button-finalizar" onClick={finalizarCompra}>FINALIZAR COMPRA</button >
		</>
	)
}

export default Bag
