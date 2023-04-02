import styled from 'styled-components';
import { SideImage } from './sideImage';
import Detail from './emailDetail.js';

const CardContainer = styled.div`
    opacity: 1;
    display: flex;
    width: 100%;
    height: 500px;
    ${'' /* border-radius: 26px; */}
    border: 2px solid #fff;
    position: relative;
    background-color: #83f084;
    backdrop-filter: blur(10px);
`;

export function Newsletter(props) {
    return(
        <CardContainer>
            <Detail />
            <SideImage />
        </CardContainer>
    )
}