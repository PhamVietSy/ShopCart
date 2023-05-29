import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Img,
    P,
    ProductBody,
    ProductH2,
    Products,
    Row,
    Container,
    ProductHead,
    A,
} from '../StyledComponents/Home/Home';
import { RootState } from '../../store';
import { Product } from '../../redux/type/Product.type';
import { useNavigate } from 'react-router-dom';
import { addCart } from '../../redux/Cart.reducer';

function ProductList() {
    const { productList } = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAddCart = (product: Product) => {
        dispatch(addCart({ ...product, quantity: 1 }));
    };
    const handleProduct = (id: string) => {
        navigate(`/productdetail/${id}`);
    };

    return (
        <Container>
            <h3>Product List</h3>
            <Row>
                {productList.map((pro: Product) => (
                    <ProductBody key={pro.id}>
                        <Products>
                            <ProductHead className="card-header">
                                <ProductH2 onClick={() => handleProduct(pro.id)}>
                                    <A href="#"> {pro.title}</A>
                                </ProductH2>
                            </ProductHead>
                            <ProductBody className="card-body">
                                <div className="text-center" onClick={() => handleProduct(pro.id)}>
                                    <Img className="card-img-top" alt="Banana" src={pro.image} />
                                </div>
                                {/* <Detail className="card-text description">
                                    The banana is an edible fruit, botanically a berry, produced by several kinds of
                                    large herbaceous...
                                </Detail> */}

                                <P className="card-text">
                                    <b>Price:</b> ${pro.price}
                                </P>
                                <div className="add-cart-container">
                                    <Button
                                        type="button"
                                        onClick={() => handleAddCart(pro)}
                                        className="btn btn-primary"
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            </ProductBody>
                        </Products>
                    </ProductBody>
                ))}
            </Row>
        </Container>
    );
}

export default ProductList;
