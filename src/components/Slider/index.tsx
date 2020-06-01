import React, {useState, useEffect} from 'react';
import { Container } from './styles';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

interface Props {
    sources: string[];
    onChange: (currentIndex: number) => void;
}
 
const Slider: React.FC<Props> = ({ sources, onChange }:Props) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [current, setCurrent] = useState('');
    const [imgSources, setImgSources] = useState([] as string[]);

    useEffect(()=>{
        setImgSources(sources);
    },[sources]);

    useEffect(()=>{
        setCurrent(imgSources[currentIndex]);
        onChange(currentIndex);
    }, [currentIndex, imgSources, onChange]);

    function handleAhead(){
        const last = imgSources.length - 1;

        if(currentIndex === last){
            setCurrentIndex(0);
        }else{
            setCurrentIndex(currentIndex + 1);
        }

        setCurrent(imgSources[currentIndex]);

        onChange(currentIndex);
    }

    function handleBackwards(){
        if(currentIndex === 0){
            setCurrentIndex(imgSources.length - 1);
        }else{
            setCurrentIndex(currentIndex - 1);
        }

        setCurrent(imgSources[currentIndex]);

        onChange(currentIndex);
    }

    return (
        <Container>
            <FiChevronLeft onClick={handleBackwards} size={50} />
            { imgSources.length > 0 && <img src={current} alt="gluglu"/>}
            <FiChevronRight onClick={handleAhead} size={50} />
        </Container>
    );
};

export default Slider;