import styled from 'styled-components';
import vector from '../../assets/news.png'

const SideImageContainer = styled.div`
    max-width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: #f9f9f9;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
    ${'' /* border-top-right-radius: 26px;
    border-bottom-right-radius: 26px; */}
`;

const Image = styled.div`
    width: 50%;
    height: 30em;
    img {
        width: auto;
        height: 100%;
    }
    @media screen and (max-width: 768px) {
        img {
        width: auto;
        height: 75%;
    }
    }
`;

export function SideImage(props) {
    return <SideImageContainer>
        <Image>
            <img src={vector} alt=''/>
        </Image>
    </SideImageContainer>  
}