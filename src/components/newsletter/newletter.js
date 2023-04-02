import styled from 'styled-components';
import { Newsletter } from './comp1';

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Subscribe = () => {
    return (
        <AppContainer>
            <Newsletter />
        </AppContainer>
    )
}
export default Subscribe;
