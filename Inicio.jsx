import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddProductForm from './AddProductForm';
import Inventary from './Inventary';
import EditProductForm from './EditProductForm'

const Inicio = () => {

    const productsData = [
        { id: uuidv4(), producto: 'Quesillo', cantidad: '10' },
        { id: uuidv4(), producto: 'Cafe', cantidad: '15' },
        { id: uuidv4(), producto: 'Queso', cantidad: '20' },
      ]

      //state
      const [products, setProducts] = useState(productsData)

      //Agregar productos

      const addProduct = (product) => {
          product.id=uuidv4()
          setProducts([
              ...products,
              product
          ])
      }

      //Eliminar Productos
      const deleteProduct = (id) => {
          const arrayFiltrado = products.filter(product => product.id !== id);
        setProducts(arrayFiltrado)
      }

      //Editar Usuarios
      const [editing, setEditing] = useState(false)

      const [currentProduct, setCurrentProduct] = useState({
        id: null, producto: '', cantidad: ''
      });

      const editRow = (product) => {
        setEditing(true);
          setCurrentProduct({
            id: product.id, producto: product.producto, cantidad: product.cantidad
          })
      }

      const updateProduct = (id, updateProduct) => {
        setEditing(false);
        setProducts(products.map(product => (product.id === id ? updateProduct : product)))
      }

    return (
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">

                    {
                        editing ? (
                            <div>
                                <h2>Editar Producto</h2>
                                <EditProductForm 
                                    currentProduct={currentProduct}
                                    updateProduct={updateProduct}
                                />
                            </div>
                        ) : (
                            <div>
                                <h2>Agregar Producto</h2>
                                <AddProductForm addProduct={addProduct}/>
                            </div>
                        )
                    }
                </div>
                <div className="flex-large">
                <h2>View users</h2>
                <Inventary 
                    products={products} 
                    deleteProduct={deleteProduct} 
                    editRow={editRow}
                />
                </div>
            </div>
        </div>
    )
}

export default Inicio