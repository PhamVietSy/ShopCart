import { Link } from 'react-router-dom';

function ProductItem() {
    const handleAddCart= ()=>{
        
    }
    return (
        <div className="col-6 col-sm-4">
            <div className="product-box card bg-light mb-3">
                <div className="card-header">
                    <h5 className="card-title">
                        <Link to="/productdetail">Banana</Link>
                    </h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <Link to="/productdetail">
                            <img
                                className="card-img-top"
                                alt="Banana"
                                src="http://www.loop54.com/hubfs/demo_images/banana.jpg"
                            />
                        </Link>
                    </div>
                    <p className="card-text description">
                        The banana is an edible fruit, botanically a berry, produced by several kinds of large
                        herbaceous...
                    </p>
                    <p className="card-text">
                        <b>Category:</b> Fruit
                    </p>
                    <p className="card-text">
                        <b>Made by:</b> The banana company
                    </p>
                    <p className="card-text">
                        <b>Organic:</b> Yes
                    </p>
                    <p className="card-text">
                        <b>Price:</b> $7
                    </p>
                    <div className="add-cart-container">
                        <button type="button" onClick={handleAddCart} className="btn btn-primary">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
