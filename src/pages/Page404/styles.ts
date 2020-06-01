import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    background: snow;
    padding: 50px;
    border-radius: 10px;

    h1 {
        margin-bottom: 40px;
    }

    a {
        margin-top: 30px; 
        padding: 13px;
        background-color: #4FC3F7;
        border-radius: 10px;
        text-decoration: none;
        color: snow;
        border-right: 2px solid ${shade(0.3,'#4FC3F7')};
        border-bottom: 2px solid ${shade(0.3,'#4FC3F7')};
        transition: background-color 0.2s;

        &:hover {
            background-color: ${shade(0.2,'#4FC3F7')};
        }
    }

`;