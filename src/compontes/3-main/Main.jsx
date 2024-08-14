// import React from 'react'
import './main.css'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import img1 from '/sunset-prayer-mosque.png'
import { useState } from 'react';
import { myprojects } from './Myprojects';
import { AnimatePresence, motion } from "framer-motion"







function Main() {
const [currentActive,setCurrentActive]= useState("all");
const [arr,setArr]= useState(myprojects);


const handleclick=((buton)=>{
  setCurrentActive(buton);
  const newarray=myprojects.filter((item)=>{
   
    return item.technologies.includes(buton);
  });


  setArr(newarray)
})

const handleMoreClick = (event, link) => {
  event.preventDefault(); // لمنع السلوك الافتراضي للرابط
  event.stopPropagation(); // لمنع انتشار الحدث إلى العناصر الأب
  window.open(link, '_blank');
};


 
  // console.log(setCurrentActive);

  return (
    <main className='flex items-start main flex-col md:flex-row '>
    
      <div className="left-section flex flex-col gap-3 items-start  md:mb-0">
        <button  onClick={()=> {
          setCurrentActive("all");
          setArr(myprojects)
          
        }} className={currentActive === "all"? "active": null}>All Projects</button>
        <button onClick={()=> {
         handleclick("css")

        }}  className={currentActive === "css"? "active": null}> Htm&Css</button>
         <button onClick={()=> {
          handleclick("JavaScript")

        }} className={currentActive==="JavaScript"?"active":null}>JavaScript</button>

<button onClick={()=> {
           handleclick("bootstrab")

        }} className={currentActive==="bootstrab"?"active":null}>bootstrab</button>

<button onClick={()=> {
       handleclick("react")
        }} className={currentActive==="react"?"active":null}>React</button>


        {/* <button onClick={()=> {
          setCurrentActive("all");
        }}>BootStrab</button>
        <button onClick={()=> {
          setCurrentActive("all");
        }}>Reactjs</button>  */}
      </div>
      <div className="right-section2 flex flex-wrap">
        <AnimatePresence>
          {arr.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", damping: 10, stiffness: 50 }}
            >
              <Card className='card'>
                <Card.Img variant="top" src={item.image} />
                <Card.Body className='card-body'>
                  <Card.Title className='card-title mt-2 p-2 capitalize'>{item.title}</Card.Title>
                  <Card.Text className='card-subtitle mt-2 pl-2'>
                    {item.description}
                  </Card.Text>
                  <div className='flex justify-between items-center mt-4 mb-3 p-2 icons'>
                    <div className='flex gap-4 p-2 icon'>
                      <div className='icon-link'></div>
                      <div className='icon-github'></div>
                    </div>
                    <a 
                      className='more flex cursor-pointer' 
                      href={item.link}
                      onClick={(e) => handleMoreClick(e, item.link)}
                    >
                      more 
                      <span className='icon-arrow-right2 mr-4 ml-1'></span>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
    </main>
  )
}

export default Main
