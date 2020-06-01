import React from 'react';
import { Container } from './styles';
import { MdSentimentDissatisfied } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Page404: React.FC = () => {
    return (
        <Container>
            <div>
                <h1>Conteúdo não Encontrado - 404</h1>
                <Link to="/">Voltar para Home</Link>
            </div>
            <MdSentimentDissatisfied size={60}/>
            
        </Container>
    );
};

export default Page404;