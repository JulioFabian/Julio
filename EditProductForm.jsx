import React from 'react'
import { useState, useEffect } from 'react'

const EditProductForm = (props) => {
  const [product, setUser] = useState(props.currentProduct)

  useEffect(
    () => {
      setUser(props.currentProduct)
    },
    [ props ]
  )

  const handleInputChange = (event) => {
    const { name, value} = event.target

    setUser({ ...product, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        props.updateProduct(props.currentProduct.id, product)
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
      <button>Editar Producto</button>
    </form>
  )
}

export default EditProductForm
