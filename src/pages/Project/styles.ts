import styled from 'styled-components';

export const Header = styled.div`
    display: flex;

    > img {
        width: 200px;
        height: 200px;
        border-radius: 30%;
        object-fit:cover;
    }

    div {
        display: flex;
        flex-direction: column;
        margin: auto 0 auto 80px;

        strong {
            font-size: 36px;
            color: #141414;
            margin-top: 4px;
        }

        > div {
            display: flex;
            flex-direction: row;
            margin-left: 0;

            a {
                margin-top: 4px;

                & + a {
                    margin-left: 10px;
                }
            }
        }

        
    }
`;

export const Container = styled.div`
    background: snow;
    padding: 40px;
    border-radius: 10px;
    margin-top: 80px;
`;

export const Content = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 80px;
    color: #141414;
    margin-bottom: 50px;

    p {
        margin-top: 30px;
    }

    > div {
        margin: 80px auto 0 auto;

        img {
            border-radius: 5px;
        }
    }
`;