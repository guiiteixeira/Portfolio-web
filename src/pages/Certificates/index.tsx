import React, {useEffect, useState} from 'react';
import { Container } from './styles';
import Slider from '../../components/Slider';

import api from '../../services/api';
import config from '../../config/config';

interface Certificate{
    title: string;
    description: string;
    filePath: string;
}

const Certificates: React.FC = () => {

    const [certificates, setCertificates] = useState([] as Certificate[]);
    const [current, setCurrent] = useState({} as Certificate);
    const [sources, setSources] = useState([] as string[]);

    useEffect(()=>{
        api.get('/certificates').then((result) => {
            setCertificates(result.data.certificates);
        });
        
    },[]);

    useEffect(()=>{
        const mappedSources = certificates.map((certificate: Certificate)=> (`${config.apiUrl}/certificates/file/${certificate.filePath}`));
        setSources(mappedSources);

    }, [certificates]);

    function changeDescription(currentIndex: number){
        setCurrent(certificates[currentIndex]);
    }

    return (
        <Container>
            { current && <h1>{current.title}</h1>}
            <Slider sources={sources} onChange={changeDescription}/>
            <h1>Descrição</h1>
            { current && <p>{current.description}</p>}
        </Container>
    );
};

export default Certificates;