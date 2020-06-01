import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    background: snow;
    padding: 24px;
    border-radius:  0 0 10px 10px;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    position: absolute;
    top: 0;


    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        img {
            margin-right: 4px;
            width: 30px;
            height: 30px;
        }
    }

    > div {
        display: flex;
        align-items: center;
        transition: color 0.2s;
        cursor: pointer;

        &:hover {
            color: #666;
        }

        img {
            margin-right: 4px;
            width: 30px;
            height: 30px;
        }
    }
`;