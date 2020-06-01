import styled from 'styled-components';
import { shade} from 'polished';
 
export const OwnerInfo = styled.section`
    margin-top: 90px;
    background: snow;
    padding: 50px;
    border-radius: 10px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 200px;
            height: 200px;
            border-radius: 30%;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #141414;
                margin-top: 4px;
            }

            p {
                font-size: 18px;
                color: #141414;
                margin-top: 4px;
            }
        }
    }

    > div {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 20px;

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            a {
                display: flex;
                place-content: center;
                align-items: center;
                width: 80px;
                height: 80px;
                border-radius: 15%;
                background: snow;

                &:hover {
                    background-color: ${shade(0.1,'#fffafa')};
                }
            }

            & + li {
                margin-left: 80px;
            }

            strong {
                display: block;
                font-size: 36px;
                color: #141414;
            }

            span {
                display: block;
                margin-top: 4px;
                color: #141414;
            }
        }
    }
`;

export const Projects = styled.div`
    margin-top: 70px;

    a {
        background: snow;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: flex;
        text-decoration: none;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px);
        }

        & + a {
            margin-top: 16px;
        }

        > div {
            margin: 0 16px;
            flex: 1;

            img {
                margin-right: 10px;
            }

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 16px;
                color: #737373;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`;
