
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CardProduct = ({ products }) => {
    return (
        <div className="row">
            {products.map((product) => {
                return (
                    <div className="col-12" key={`product-${product.id}`}>
                        <div className="card">
                            <h6>{product.category}</h6>
                            <img src={product.img} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price}</p>
                                <Link to={`/item/${product.id}`} className="btn btn-success">Ver detalle</Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default CardProduct