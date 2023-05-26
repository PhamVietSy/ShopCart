import Carts from '../page/Cart';
import Home from '../page/Home';
import ProductDetail from '../page/ProductDetail';

const publicRoutes = [
    { path: '/', element: Home, layout: undefined },
    { path: '/cart', element: Carts, layout: undefined },
    { path: '/productdetail', element: ProductDetail, layout: undefined },
];
// privateRoutes
export { publicRoutes };
