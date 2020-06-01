import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';
import config from '../../config/config';

interface CertificateParams{
    certificate: string;
}

interface Certificate {
    title: string;
    description: string;
    filePath: string;
}

const Certificate: React.FC = () => {

    const { params } = useRouteMatch<CertificateParams>();

    const [certificate, setCertificate] = useState({} as Certificate);

    useEffect(() => {
        api.get(`/certificates/${params.certificate}`).then((result) => {
            setCertificate(result.data.certificate);
        });
    }, [params.certificate]);

    return (
        <Container>
            <h1>{certificate.title}</h1>
            <div>
                <img src={`${config.apiUrl}/certificates/file/${certificate.filePath}`} alt={certificate.title} width={700} height={500}/>
            </div>
            <h1>Descrição</h1>
            { certificate && <p>{certificate.description}</p>}
        </Container>
    );
};

export default Certificate;