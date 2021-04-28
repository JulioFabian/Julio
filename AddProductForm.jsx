import React from 'react'
import { useState } from 'react'

const AddProductForm = (props) => {

    const initialFormState = { id: null, producto: '', cantidad: '' }
  const [product, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...product, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!product.producto || !product.cantidad){
            return
        }

        props.addProduct(product)
        setUser(initialFormState)
      }}
    >
      <label>producto</label>
      <input
        type="text"
        name="producto"
        value={product.producto}
        onChange={handleInputChange}
      />
      <label>cantidad</label>
      <input
        type="text"
        name="cantidad"
        value={product.cantidad}
        onChange={handleInputChange}
      />
      <button>Agregar Producto</button>
    </form>
  )
}

export default AddProductForm

/*
<form onSubmit={(event)}>
            <label>Producto</label>
            <input type="text" name="producto">

            </input>
            <label>Cantidad</label>
            <input type="text" name="cantidad"/>
            <button>Agregar Producto</button>
        </form>
*/

/*<form
      onSubmit={(event) => {
        event.preventDefault()
        if (!product.producto || !product.cantidad) return

        props.addProduct(product)
        setProduct(initialFormState)
      }}
    >
      <label>Producto</label>
      <input
        type="text"
        name="producto"
        value={product.producto}
        onChange={handleInputChange}
      />
      <label>Cantidad</label>
      <input
        type="text"
        name="cantidad"
        value={product.cantidad}
        onChange={handleInputChange}
      />
      <button>Agregar Producto</button>
    </form>*/

    /* const initialFormState = { id: null, producto: "hola", cantidad: "julio" }
  const [product, setProduct] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { producto, value } = event.target

    setProduct({ ...product, [producto]: value })
  }*/

  //Github