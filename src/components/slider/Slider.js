import { useState } from 'react'
import "./Slider.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data.js"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className='slider'>
            <AiOutlineArrowLeft className='arrow prev' />
            <AiOutlineArrowRight className='arrow next'/>

            {/* Use map to map over data in slider array. Map must return something. We also need the index # (built in map feature) */}
            {/* We used index for the key property. However, if you are doing something that needs to be added/deleted, do not use index for the key prop value (bc it must be unique) */}
            {sliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Slider
