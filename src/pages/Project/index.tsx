import React, { useEffect, useState } from 'react';

import { Header, Content, Container } from './styles';
import ReactPlayer from 'react-player'
import api from '../../services/api';
import { useRouteMatch } from 'react-router-dom';
import config from '../../config/config';
import githubImg from '../../assets/github.svg';
import linkImg from '../../assets/link.svg';


interface ProjectParams {
    project: string;
}

interface Project {
    id: string;
    name: string;
    description: string;
    imagePath: string;
    githubLink: string;
    mediaPath: string;
    gifPath: string;
    link: string;
    certificate: {
        id: string;
        title: string;
        description: string;
        filePath: string;
        created_at: Date;
        updated_at: Date;
    },
    created_at: Date;
    updated_at: Date;
}

const Project: React.FC = () => {

    const { params } = useRouteMatch<ProjectParams>();

    const [project, setProject] = useState({} as Project);

    useEffect(()=>{
        api.get(`/projects/${params.project}`).then((result) => {
            setProject(result.data.project);            
        });
    },[params]);


    return (
        <Container>

            <Header >
                <img src={`${config.apiUrl}/images/${project.imagePath}`} alt={project.name} width={200}/>
                <div>
                    <strong>{project.name}</strong>
                    <div>
                        { project.githubLink && <a href={project.githubLink}><img width="30" src={githubImg} alt="Github link"/></a>}
                        { project.link && <a href={project.link}><img width="30" src={linkImg} alt="Project link"/></a>}
                    </div>
                </div>
            </Header>
            <Content>
                <h1>Descrição do projeto</h1>
                <p>{project.description}</p>
                {project.mediaPath && <div><ReactPlayer url={`${config.apiUrl}/videos/${project.mediaPath}`} controls={true}/></div>}
                {project.gifPath && <div><img src={`${config.apiUrl}/gifs/${project.gifPath}`} width={640} alt="Project gif"/></div>}
            </Content>
        </Container >
    );
};

export default Project;