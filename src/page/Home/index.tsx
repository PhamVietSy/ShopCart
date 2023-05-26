import { Container, MainContainer } from '../../components/StyledComponents/Home/Home';
import ProductList from '../../components/containers/productList';

function Home() {
    return (
        <div>
            <MainContainer>
                <Container>
                    <ProductList />
                </Container>
            </MainContainer>
        </div>
    );
}

export default Home;
