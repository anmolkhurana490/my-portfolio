import React, { useContext, useEffect, useRef, useState } from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";
import { AppContext } from '../AppContext';

const CustomSlider = ({ children }) => {
    const { darkTheme } = useContext(AppContext)
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderRef = useRef(null);
    const lastScroll = useRef(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
    };

    useEffect(() => {
        if (sliderRef.current) {
            const realWidth = sliderRef.current.clientWidth;
            const scrollWidth = sliderRef.current.scrollWidth;
            sliderRef.current.scrollTo({
                left: (currentIndex * scrollWidth / children.length) - (realWidth / 2) + (scrollWidth / (2 * children.length)),
                behavior: 'smooth'
            });
        }
    }, [currentIndex]);

    return (
        <div className="flex md:gap-4 relative w-full">
            <button onClick={prevSlide} className={"text-xl md:text-3xl " + (darkTheme ? "text-white" : "text-gray-900")}><GrPrevious /></button>
            <div
                className="overflow-auto custom-scrollbar "
                ref={sliderRef}
            >
                <div
                    className="slider-transform flex gap-6 transition-transform duration-500 mx-6 my-8"
                >
                    {React.Children.map(children, (child, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={currentIndex == index ? "scale-110" : "scale-90"}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={nextSlide} className={"text-xl md:text-3xl " + (darkTheme ? "text-white" : "text-gray-900")}><GrNext /></button>
        </div>
    );
};

export default CustomSlider;