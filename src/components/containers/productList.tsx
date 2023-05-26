import { useDispatch, useSelector } from 'react-redux';
import { Row } from '../StyledComponents/Home/Home';
import { RootState } from '../../store';
import { Product } from '../../redux/type/Product.type';
import { Link } from 'react-router-dom';
import { addCart } from '../../redux/Cart.reducer';

function ProductList() {
    const { productList } = useSelector((state: RootState) => state.products);

    const dispatch = useDispatch();
    const handleAddCart = (product: Product) => {
        dispatch(addCart({ ...product, quantity: 1 }));
    };
    return (
        <Row>
            {productList.map((pro: Product) => (
                <div className="col-6 col-sm-4" key={pro.id}>
                    <div className="product-box card bg-light mb-3">
                        <div className="card-header">
                            <h5 className="card-title">
                                <Link to="/productdetail">{pro.title}</Link>
                            </h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <Link to="/productdetail">
                                    <img className="card-img-top" alt="Banana" src={pro.image} />
                                </Link>
                            </div>
                            <p className="card-text description">
                                The banana is an edible fruit, botanically a berry, produced by several kinds of large
                                herbaceous...
                            </p>

                            <p className="card-text">
                                <b>Price:</b> ${pro.price}
                            </p>
                            <div className="add-cart-container">
                                <button type="button" onClick={() => handleAddCart(pro)} className="btn btn-primary">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Row>
    );
}

export default ProductList;
