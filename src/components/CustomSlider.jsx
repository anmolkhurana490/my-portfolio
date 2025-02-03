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

    const handleSliderScroll = (e) => {
        const currentScroll = e.target.scrollLeft;
        
        const requiredScroll = e.target.scrollWidth / children.length;
        
        if(Math.abs(lastScroll.current - currentScroll) >= requiredScroll){
            // if (lastScroll.current < currentScroll) nextSlide();
            // else prevSlide();
            lastScroll.current = currentScroll;
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollTo({
                left: currentIndex * sliderRef.current.clientWidth,
                behavior: 'smooth'
            });
        }
    }, [currentIndex]);

    return (
        <div className="flex md:gap-4 relative w-full">
            <button onClick={prevSlide} className={"text-xl md:text-3xl " + (darkTheme ? "text-white" : "text-gray-900")}><GrPrevious /></button>
            <div
                className="overflow-auto custom-scrollbar "
                onScroll={handleSliderScroll}
                ref={sliderRef}
            >
                <div
                    className="slider-transform flex gap-6 transition-transform duration-500 mx-6 my-8"
                    // style={{
                    //     '--translate-x-sm': `-${currentIndex * 100}% - ${currentIndex * 12}px`,
                    //     '--translate-x-md': `-${currentIndex * 100 / children.length}%`
                    // }}
                >
                    {React.Children.map(children, (child, index) => (
                        <div key={index} className={currentIndex == index ? "scale-110" : "scale-90"}>
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