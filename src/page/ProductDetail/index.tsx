import { useParams } from 'react-router';
import { AddCart, ButtonAdd, CardBody, DivContrainer, DivImage, P, ProductBox } from './styledProductDetail';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addCart } from '../../redux/Cart.reducer';
import { Product } from '../../redux/type/Product.type';

function ProductDetail() {
    const idProduct = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state: RootState) => state.products);
    const productIndex = product.productList.filter((pro) => pro.id === idProduct.id);
    // const productDetail = Object.entries(productIndex);

    const handleAdd = (product: Product) => {
        dispatch(addCart({ ...product, quantity: 1 }));
    };

    return (
        <DivContrainer>
            {productIndex.map((product) => (
                <>
                    <h3>Product Details - {product.title}</h3>
                    <ProductBox>
                        <CardBody>
                            <DivImage>
                                <img src={product.image} alt="" />
                            </DivImage>
                            <P>{product.description}</P>
                            <P>
                                <b>Price</b> : ${product.price}
                            </P>
                            <AddCart>
                                <ButtonAdd onClick={() => handleAdd(product)}>Add cart</ButtonAdd>
                            </AddCart>
                        </CardBody>
                    </ProductBox>
                </>
            ))}
        </DivContrainer>
    );
}

export default ProductDetail;
