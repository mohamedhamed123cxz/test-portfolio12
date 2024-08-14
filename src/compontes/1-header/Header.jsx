import  { useRef, useState } from 'react'
import './header.css'
import { useEffect } from 'react';

// import './app.css';

function Header() {
    const [showmodal,setShowmodal]=useState(false);
    const modalref=useRef(null)
    const [theme, setTheme] = useState(localStorage.getItem("currentMode")??"dark");
    useEffect(()=>{
      if(theme==="light"){
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }else{
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      }

},[theme])
const toggleTheme = () => {
  setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
};

    useEffect(()=>{
        function handleClickOutside(event){
        if(modalref.current && !modalref.current.contains(event.target)){
            setShowmodal(false);
        }
        }

        document.addEventListener('mousedown',handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown',handleClickOutside);
        }
    },[])
  return (
    <header className='flex justify-between px-9 items-center m-4 ' >
    <button onClick={()=>{
        setShowmodal(true);
    }} className='menu '><span className='icon-menu'></span></button>
      <div/>
      <nav >
        <ul className='flex list-none no-underline gap-16 items-center '>
          <li ><a href="#home">Home</a></li>
          <li ><a href="#about">About</a></li>
          <li ><a href="#projects">Projects</a></li>
          <li ><a href="#speaking">Speaking</a></li>
          <li ><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <button  onClick={()=>{
          localStorage.setItem("currentMode",theme === "dark" ? "light" : "dark"); {toggleTheme}
          setTheme(localStorage.getItem("currentMode")); }} className='text-2xl mode  '>
        {theme==="dark" ?<span className='icon-moon-o'></span>:<span className='icon-sun'></span>}
      </button>


      {showmodal && (
        <div className='fixed'>
        <ul className='modal' ref={modalref}>

            <li><button className='icon-close' onClick={()=>{
                    setShowmodal(false)
            }}/></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Articles</a></li>
            <li><a href="#speaking">Projects</a></li>
            <li><a href="#contact">Uses</a></li>
  
        </ul>
      </div>
      )}
    </header>
  )
}

export default Header
