import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiBookmark } from 'react-icons/fi';
import ReactTooltip from 'react-tooltip';

import { OwnerInfo, Projects } from './styles';
import profileImg from '../../assets/profile.png';
import qrCodeImg from '../../assets/frame.png';
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
    //const [certificateCount, setCertificateCount] = useState(0);

    useEffect(() => {
        api.get('/projects').then((result)=> {
            setProjects(result.data.projects);
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.</p>
                    </div>
                </header>
                <div>
                    <ul>
                        <li>
                            <strong>{projects.length}</strong>
                            <span>Projetos</span>
                        </li>
                        <li>
                            <strong>{0}</strong>
                            <span>Certificados</span>
                        </li>
                        <li>
                            <Link to="/certificates" data-tip="Ver certificados" >
                                <FiBookmark size={40} color="#242424" />
                            </Link>
                        </li>
                    </ul>
                    <img src={qrCodeImg} width={120} alt=""/>
                </div>
                
            </OwnerInfo>

            <Projects>
                {projects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.id}`}>
                        <div>
                            <div>
                                { project.iconPath && <img src={`${config.apiUrl}/icons/${project.iconPath}`} width={17} /> }
                                <strong>{project.name}</strong>
                            </div>
                            <p>{formatDescription(project.description)}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Projects>
            <ReactTooltip place="bottom" effect="solid"/>
        </>
    );
};

export default Home;
