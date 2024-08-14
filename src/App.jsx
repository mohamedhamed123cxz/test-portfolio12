import { useEffect, useState } from 'react'
import './index.css'
import Header from './compontes/1-header/Header'
import Hero from './compontes/2-hero/Hero'
import Main from './compontes/3-main/Main'
import Contact from './compontes/4-contact/Contact'
import Footer from './compontes/5-footer/Footer'

function App() {
  const [showScroll, setShowScroll] = useState(false);
  

  useEffect(() =>{
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  },[]);
  

  return (
    <div className='container w-4/5 bg-red' id='up' >
     
    <Header/>
    <div className='divider' />
    <Hero/>
    <div className='divider' />
    <Main/>
    <div className='divider' />
    <Contact/>
    <div className='divider' />
    <Footer/>
    <div className='divider' />

    <a style={{opacity:showScroll?1:0, transition:"1s"}} href='#up'>
    <button 

    className='icon-arrow-up2 scroll'></button>
    </a>

    </div>
  )
}

export default App
