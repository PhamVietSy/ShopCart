import { useDispatch, useSelector } from 'react-redux';
import { A, AA, Button, HeaderPage, Inner, LogoHead, UploadHead } from '../../../StyledComponents/Header/Header';
import { Link } from 'react-router-dom';
import { RootState } from '../../../../store';
import { useEffect } from 'react';
import { getTotal } from '../../../../redux/Cart.reducer';
import { ShoppingCartOutlined } from '@ant-design/icons';

function Header() {
    const carts = useSelector((state: RootState) => state.carts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotal());
    }, [carts, dispatch]);
    const linkStyle = {
        margin: '1rem',
        textDecoration: 'none',
    };
    return (
        <HeaderPage>
            <Inner>
                <LogoHead>
                    <Link to="/">
                        <img
                            width={40}
                            height={40}
                            style={{ borderRadius: 20 }}
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="github"
                        />
                    </Link>

                    <Link to="/cart" style={linkStyle}>
                        <AA>
                            MyCart
                            <ShoppingCartOutlined />
                        </AA>
                    </Link>
                </LogoHead>
                <UploadHead>
                    <Link to="/cart">
                        <Button>
                            <Link to="/cart" style={linkStyle}>
                                <A>
                                    <ShoppingCartOutlined />
                                    Cart({carts.cartQuantity})
                                </A>
                            </Link>
                        </Button>
                    </Link>
                </UploadHead>
            </Inner>
        </HeaderPage>
    );
}

export default Header;
