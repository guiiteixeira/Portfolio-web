import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */ 

    img {
        
        width: 700px;
        height: 500px;
        object-fit: contain;
        margin: 20px;

    }

    svg {

        border-radius: 50%;
        transition: background-color 0.2s;
        cursor: pointer;

        &:hover {
            background-color: ${shade(0.2,'snow')};
        }
    }
`;