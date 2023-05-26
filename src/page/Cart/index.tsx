import { useDispatch, useSelector } from 'react-redux';
import { ReactNode, useEffect } from 'react';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';
import { CartQuantity, Table } from '../../components/StyledComponents/Cart/Cart';
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
    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {carts.cartAr.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is currently empty</p>
                    <div className="start-shopping">
                        <Link to="/"> Start shopping</Link>
                    </div>
                </div>
            ) : (
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th scope="row">#</th>
                                <td>Product</td>
                                <td>$Price</td>
                                <td>Quantity</td>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.cartAr?.map((cart) => (
                                <>
                                    <tr key={cart.id}>
                                        <th scope="row">{cart.id}</th>
                                        <td>{cart.title}</td>
                                        <td>${cart.price}</td>
                                        <td>
                                            <CartQuantity>
                                                <button onClick={() => handleChange(cart)}>-</button>
                                                <div className="count">{cart.quantity}</div>
                                                <button onClick={() => handleChangeadd(cart)}>+</button>
                                            </CartQuantity>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(cart)}>x</button>
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td>Subtotal</td>
                                <td>Total {carts.cartTotalAmout as ReactNode}</td>
                                <td>{carts.cartQuantity}Item</td>
                            </tr>
                        </tbody>
                    </Table>

                    <div className="cart-sumary">
                        <button onClick={handleDeleteAll}>Clear Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Carts;
