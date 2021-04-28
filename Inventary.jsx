import React from 'react'

const Inventary = (props) => {

    console.log(props.products)

    return(
        <table>
            <thead>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.products.length > 0 ?
                    props.products.map(product => (
                        <tr key={product.id}>
                            <td>{product.producto}</td>
                            <td>{product.cantidad}</td>
                            <td>
                            <button 
                                className="button muted-button"
                                onClick={
                                    () => {props.editRow(product)}
                                }
                            >
                                Editar
                            </button>
                            <button 
                                className="button muted-button"
                                onClick = {() => {props.deleteProduct(product.id)}}
                            >
                                Eliminar
                            </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={4}>No hay productos</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default Inventary