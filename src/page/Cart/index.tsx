import { useDispatch, useSelector } from 'react-redux';
import { ReactNode, useEffect } from 'react';
import { DeleteOutlined, RollbackOutlined } from '@ant-design/icons';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';
import {
    ButtonCart,
    ButtonChage,
    ButtonDel,
    CartQuantity,
    Container,
    DivChage,
    DivTable,
    Table,
    Td,
} from '../../components/StyledComponents/Cart/Cart';
import { addCart, deleteAllCart, deleteCart, editQuantityCart, getTotal } from '../../redux/Cart.reducer';
import { Cart } from '../../redux/type/Product.type';

function Carts() {
    const carts = useSelector((state: RootState) => state.carts);
    const dispatch = useDispatch();

    const handleDelete = (cart: Cart) => {
        dispatch(deleteCart(cart));
        dispatch(getTotal());
    };
    const handleChange = (cart: Cart) => {
        dispatch(editQuantityCart(cart));
        dispatch(getTotal());
    };
    const handleChangeadd = (cart: Cart) => {
        dispatch(addCart(cart));
        dispatch(getTotal());
    };
    const handleDeleteAll = () => {
        dispatch(deleteAllCart());
        dispatch(getTotal());
    };
    useEffect(() => {
        dispatch(getTotal());
    }, [carts, dispatch]);
    const linkStyle = {
        margin: '1rem',
        textDecoration: 'none',
        fontSize: '20px',
    };
    return (
        <Container className="cart-container">
            {carts.cartAr.length === 0 ? (
                <div className="cart-empty">
                    <h1>Your cart is currently empty</h1>
                    <div className="start-shopping">
                        <Link to="/" style={linkStyle}>
                            Start shopping
                            <RollbackOutlined />
                        </Link>
                    </div>
                </div>
            ) : (
                <DivTable className="ooo">
                    <Table>
                        <thead>
                            <tr>
                                <Td>#</Td>
                                <Td>Product</Td>
                                <Td>Price</Td>
                                <Td>Quantity</Td>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.cartAr?.map((cart) => (
                                <>
                                    <tr key={cart.id}>
                                        <Td scope="row">{cart.id}</Td>
                                        <Td>{cart.title}</Td>
                                        <Td>${cart.price}</Td>
                                        <Td>
                                            <CartQuantity>
                                                <ButtonChage onClick={() => handleChange(cart)}>-</ButtonChage>
                                                <DivChage className="count">{cart.quantity}</DivChage>
                                                <ButtonChage onClick={() => handleChangeadd(cart)}>+</ButtonChage>
                                            </CartQuantity>
                                        </Td>
                                        <Td>
                                            <ButtonDel onClick={() => handleDelete(cart)}>
                                                <DeleteOutlined />
                                            </ButtonDel>
                                        </Td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                        <br />
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Subtotal</td>
                                <td>Total: {carts.cartTotalAmout as ReactNode}$</td>
                                <td>{carts.cartQuantity} Items</td>
                            </tr>
                        </tbody>
                    </Table>

                    <div className="cart-sumary">
                        <ButtonCart onClick={handleDeleteAll}>
                            Clear Cart
                            <DeleteOutlined />
                        </ButtonCart>
                    </div>
                </DivTable>
            )}
        </Container>
    );
}

export default Carts;
