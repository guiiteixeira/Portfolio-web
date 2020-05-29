import React from 'react';

import { Container } from './styles';

import facebookImg from '../../assets/facebook.svg';
import instagramImg from '../../assets/instagram.svg';
import whatsappImg from '../../assets/whatsapp.svg';
import mailImg from '../../assets/mail.svg';
import linkedinImg from '../../assets/linkedin.svg';
import githubImg from '../../assets/github.svg';

const Header: React.FC = () => {
    return (
        <Container>
            <a href="">
                <img src={instagramImg} alt=""/>
            </a>
            <a href="">
                <img src={facebookImg} alt=""/>
            </a>
            <a href="">
                <img src={whatsappImg} alt=""/>
            </a>
            <a href="">
                <img src={mailImg} alt=""/>
            </a>
            <a href="">
                <img src={linkedinImg} alt=""/>
            </a>
            <a href="">
                <img src={githubImg} alt=""/>
            </a>

        </Container>
    )
};

export default Header;