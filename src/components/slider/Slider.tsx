import React, { useState } from 'react';

import ImageContainer from '../image-container/ImageContainer';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

import './slider.scss';

interface Slide {
    image: string;
    description: string;
    userImage: string;
    userName: string;
    userLocation: string
}

interface SliderProps {
    slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex(index === 0 ? slides.length - 1 : index - 1);
    };

    const handleNext = () => {
        setIndex(index === slides.length - 1 ? 0 : index + 1);
    };

    return (
        <div className="slider-container">
            <button className="prev-button" onClick={handlePrev}>
                <BsFillArrowLeftCircleFill className='slider__icon' />
            </button>
            <div className="slide-content">
                <div className="slide-description">
                    <ImageContainer
                        image={slides[index].image}
                        className='slide-description_img'
                    />
                    <p>{slides[index].description}</p>
                    <div className="circle-image">
                        <img src={slides[index].userImage} alt="Circle Image" />
                        <p className="circle-description">{slides[index].userName} <span>{slides[index].userLocation}</span></p>
                    </div>
                </div>
            </div>
            <button className="next-button" onClick={handleNext}>
                <BsFillArrowRightCircleFill className='slider__icon' />
            </button>
        </div>
    );
};

export default Slider;
