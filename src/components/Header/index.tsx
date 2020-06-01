import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import ReactTooltip from 'react-tooltip';
import CopyToClipboard from 'react-copy-to-clipboard';

import { Container } from './styles';

import facebookImg from '../../assets/facebook.svg';
import instagramImg from '../../assets/instagram.svg';
import mailImg from '../../assets/mail.svg';
import linkedinImg from '../../assets/linkedin.svg';
import githubImg from '../../assets/github.svg';

interface CopyState{
    value: string;
    copied: boolean;
}

const Header: React.FC = () => {

    const [copyMsg, setCopyMsg] = useState('Copiar E-mail');

    function changeCopyMsg(){
        setCopyMsg('Copiado');
    }

    return (
        <Container>
            <Link to="/" data-tip="Ir para Home">
                <FiHome size={30} color="black"/>
            </Link>
            <a href="https://www.instagram.com/_guiiteixeira/" data-tip="Visitar Instagram">
                <img src={instagramImg} alt="Instagram icon"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100022268388486" data-tip="Visitar Facebook">
                <img src={facebookImg} alt="Facebook icon"/>
            </a>
            <CopyToClipboard text="guisebastian15@gmail.com" onCopy={changeCopyMsg}>
                <div data-tip={copyMsg}>
                    <img src={mailImg} alt="Email icon"/>
                </div>
            </CopyToClipboard>
            <a href="www.linkedin.com/in/guiiteixeira" data-tip="Visitar LinkedIn">
                <img src={linkedinImg} alt="LinkedIn icon"/>
            </a>
            <a href="https://github.com/guiiteixeira" data-tip="Visitar GitHub">
                <img src={githubImg} alt="GitHub icon"/>
            </a>
            <ReactTooltip place="bottom" effect="solid"/>
        </Container>
    )
};

export default Header;