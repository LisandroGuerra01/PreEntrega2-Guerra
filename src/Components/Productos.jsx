import { useState } from 'react';
import Producto from './Producto';

const Productos = () => {

    const [producto, setProducto] = useState([
        {
            id: 1,
            name: "1 kg Helado",
            img: "https://ar.freddo.com/sabores/#saboreschoco",
            precio: 6500,
            stock: 50,
            categoria: "sabores"
        },
        {
            id: 2,
            name: "1/2 kg Helado",
            img: "https://ar.freddo.com/sabores/#saboresfrutales",
            precio: 4500,
            stock: 50,
            categoria: "sabores"
        },
        {
            id: 3,
            name: "1/4 kg Helado",
            img: "https://ar.freddo.com/sabores/#saboresddl",
            precio: 3500,
            stock: 50,
            categoria: "sabores"
        },
        {
            id: 4,
            name: "Tabletas",
            img: "https://ar.freddo.com/wp-content/uploads/2022/10/Tableta_Cookies_Cream-400x263.jpg",
            precio: 5000,
            stock: 50,
            categoria: "tentaciones"
        },
        {
            id: 5,
            name: "Cannoli",
            img: "https://ar.freddo.com/wp-content/uploads/2022/10/Cannoli_DDL-400x263.jpg",
            precio: 4000,
            stock: 50,
            categoria: "tentaciones"
        },
        {
            id: 6,
            name: "Postres helados",
            img: "https://ar.freddo.com/wp-content/uploads/2022/10/Postre_Mascarpone-400x263.jpg",
            precio: 6000,
            stock: 50,
            categoria: "pre envasados"
        },
        {
            id: 7,
            name: "Pinta 375g",
            img: "https://ar.freddo.com/wp-content/uploads/2023/05/PINTA-COOKIESCREAM-3.jpg",
            precio: 3500,
            stock: 50,
            categoria: "pre envasados"
        },
        {
            id: 8,
            name: "Vasito 90g",
            img: "https://ar.freddo.com/wp-content/uploads/2022/10/TABLETAS-crema-americana-1.jpg",
            precio: 3000,
            stock: 50,
            categoria: "pre envasados"
        },
        {
            id: 9,
            name: "Bombones",
            img: "https://ar.freddo.com/wp-content/uploads/2023/01/bombones-americana-2560x2560-1-600x600.png",
            precio: 4000,
            stock: 50,
            categoria: "pre envasados"
        }
    ]);
    return (
        <div className='row'>
            <h1>Productos</h1>
            {producto.map((p) => {
                return(
                    <Producto
                    key={p.id}
                    name={p.name}
                    img={p.img}
                    categoria={p.categoria}
                    precio={p.precio} />
                )
            })}

        </div>
    );
};

export default Productos;