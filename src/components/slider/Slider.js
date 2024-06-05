import { useEffect, useState } from 'react'
import "./Slider.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data.js"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
    // slideLength = 1 2 3
    // currentSlide = 0 1 2

    const nextSlide = () => {
        // By subtracting 1, we make sure that currentSlide is equal to slideLength. Saying "if current slide is the last one, set the slide back to 0 AKA back to the beginning"
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    } 

    // const prevSlide = () => {
    //     setCurrentSlide(currentSlide - 1)
    // } 
        
    // set currentSlide to 0 on page load
    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    return (
        <div className='slider'>
            <AiOutlineArrowLeft className='arrow prev' />
            <AiOutlineArrowRight className='arrow next' onClick={nextSlide} />

            {/* Use map to map over data in slider array. Map must return something. We also need the index # (built in map feature) */}
            {/* We used index for the key property. However, if you are doing something that needs to be added/deleted, do not use index for the key prop value (bc it must be unique) */}
            {sliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {/* Saying if the index = current slide, then display the current slide */}
                        {index === currentSlide && (
                            // React rule: everything must be housed in 1 return container (fragment in this case. could also use div)
                            <>
                                <img src={slide.image} alt="slide" />

                                <div className="content">
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.desc}</p>
                                    <hr />
                                    <button className='--btn --btn-primary'>Get Started</button>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Slider
