import React, { useEffect, useRef } from 'react'
import './hero.css'
import image1 from '/cropped_image.png'
import Lottie from "lottie-react";
import { motion } from "framer-motion"

// import developerAnimation from '../animations/Animation - 1722298838545.json'
 import developerAnimation from '../../animations/Animation - 1722300858882.json'

function Hero() {
    // const lottieref=useRef()
    const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1); // Adjust speed if needed
      lottieRef.current.play(); // Play the animation
    }
  }, []);

  return (
    <section className='hero flex  mt-4'>
        <div className='left-section grow   '>
            <div className='first-parent  min-h-24 flex items-end mb-4'>
                <motion.img 
                 initial={{transform: "scale(0 )"}}
                 animate={{ transform: "scale(1) " }}
                 transition={{ duration: 1}}
                src={image1}></motion.img>
                <div className='icon-verified'></div>
            </div>
            <div className='second-parent'>
                <motion.h1 
                 initial={{transform: "scale(0 )"}}
                 animate={{ transform: "scale(1) " }}
                 transition={{ duration: 1 }}
                >I’m mohamed hamd,
                Frontend Developer</motion.h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos repudiandae reiciendis iusto aut,</p>
            </div>
            <div className='third-parent flex gap-6'>
                <div className='icon-x'></div>
                <div className='icon-instagram'></div>
                <div className='icon-github'></div>
                <div className='icon-linkedin'></div>
            </div>
        </div>
        <div className='right-section   flex justify-between'>
        <Lottie 
          lottieRef={lottieRef} 
          className='developerAnimation' 
          loop={true} 
          animationData={developerAnimation} 
        />
        
        </div>
    </section>
  )
}


export default Hero
