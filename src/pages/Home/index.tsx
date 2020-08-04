import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiBookmark } from 'react-icons/fi';

import { OwnerInfo, Projects } from './styles';
import profileImg from '../../assets/profile.jpeg';
import qrCodeImg from '../../assets/Guilherme_da_Silva_Teixeira.png';
import config from '../../config/config';

import api from '../../services/api';
import { Link } from 'react-router-dom';

interface Project {
    id: string;
    name: string;
    description: string;
    iconPath: string;
}

const Home: React.FC = () => {
    
    const [projects, setProjects] = useState<Project[]>([]);
    const [certificateCount, setCertificateCount] = useState(0);

    useEffect(() => {
        api.get('/projects').then((result)=> {
            setProjects(result.data.projects);
        });

        api.get('/certificates').then((result)=> {
            setCertificateCount(result.data.certificates.length);
        });
    }, []);

    function formatDescription(description: string): string {
        if(description.length > 115){
            return description.substring(0,115) + '...';
        }
        return description;
    }

    return (
        <>
            <OwnerInfo>
                <header>
                    <img
                        src={profileImg}
                        alt="Guilherme da Silva Teixeira"
                    />
                    <div>
                        <strong>Guilherme da Silva Teixeira</strong>
                        <p>Olá, seja bem-vindo!</p>
                        <p>Meu nome é Guilherme, tenho 21 anos e sou natural de Guaxupé, Minas Gerais. 
                            Sou graduando em ciência da computação na Universidade Federal de Lavras. 
                            O objetivo desta página é expor alguns dos meus trabalhos. Espero que goste!
                        </p>
                    </div>
                </header>
                <div>
                    <ul>
                        <li>
                            <strong>{projects.length}</strong>
                            <span>Projetos</span>
                        </li>
                        <li>
                            <strong>{certificateCount}</strong>
                            <span>Certificados</span>
                        </li>
                        <li>
                            <Link to="/certificates" data-tip="Ver certificados" >
                                <FiBookmark size={40} color="#242424" />
                            </Link>
                        </li>
                    </ul>
                    <img src={qrCodeImg} width={130} alt="Scan to linkedin"/>
                </div>
                
            </OwnerInfo>

            <Projects>
                {projects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.id}`}>
                        <div>
                            <div>
                                { project.iconPath && <img src={`${config.apiUrl}/icons/${project.iconPath}`} width={20} alt={project.name} /> }
                                <strong>{project.name}</strong>
                            </div>
                            <p>{formatDescription(project.description)}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Projects>
        </>
    );
};

export default Home;
