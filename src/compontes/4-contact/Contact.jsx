import { useForm, ValidationError } from '@formspree/react';
import './contact.css'
import Lottie from "lottie-react";
import doneAnimation from '../../animations/Animation - 1722297301950 (1).json'
import contactAnimation from '../../animations/Animation - 1722298418268.json'

function Contact() {
  const [state, handleSubmit] = useForm("xeojgjbn");
  return (
    <section  className='contact'>
     <h1 className='title'>
      <span className='icon-envelope'></span>
      Contact us
     </h1>
     <p className='sub-title'>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod neque id libero pretium,  
     </p>
     <div className='flex items-center justify-between '>
     <form className='' onSubmit={handleSubmit}>
      <div className='mt-5  flex'>
      <label htmlFor='email'>Email Address:</label>
      <input required   type='email' name='email' id='email' />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>

     <div className='mt-5  flex'>
     <label htmlFor='message'>Your Message:</label>
     <textarea id='message' name='message' required></textarea>
     <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
     </div>

     <button className='sumbit' disabled={state.submitting} type='submit'>
      {state.submitting? "submitting..." : "submit"}
     </button>

     {state.succeeded &&(
       <p className='flex ' style={{fontSize:"20px", marginTop:"1.7rem"}}>
       <Lottie loop={false} style={{height:25}} animationData={doneAnimation}></Lottie>
       Thanks for joining!
       </p>
  )}
     </form>
     
     <div className='animation'>
     <Lottie className='contactAnimation' loop={false} style={{height:355}} animationData={contactAnimation}></Lottie>
     </div>


     </div>

      
    </section>
  )
}

export default Contact
