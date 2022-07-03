import React from 'react'
import phone from '../gifs/phone.gif'
import message from '../gifs/message.gif'
import linkedin from '../gifs/linkedin.gif'
import twitter from '../gifs/twitter.gif'
function Contactus() {
  return (
    <div>
        <div className=' container' >
            <h1 className='text-center m-5'>CONTACT US</h1>
     <div className="row  d-flex justify-content-evenly">
        <div className="col-sm-3">
        <img src={phone} alt="" className='w-25 d-block mx-auto' />
        
         <h4 className='m-4 text-center' >PHONE</h4>
        {/* < p className='mt-4 text-center ' > <b>NATIONAL:</b> </p> */}
         <p className="  m-5 text-center">9218971281</p>
         {/* < p className='mt-4 text-center ' > <b>INTER NATIONAL:</b> </p>
         <p className=" mt-0 mb-3 text-center">+2191 22782 1652 177221</p> */}
        </div>
        <div className="col-sm-3">
        <img src={message} alt="" className='w-25 d-block mx-auto' />
         <h4 className='text-center m-4'>EMAIL</h4>    
         <p className='m-5 text-center'>concentriasupport@gmail.org</p>
        </div>
        <div className="col-sm-3">
        <img src={linkedin} alt="" className='w-25 d-block mx-auto' />    
        <h4 className='text-center m-4'>LINKEDIN</h4>  
        <p className='m-5 text-center'>https://concentriasupportlinkedin.com</p>
        </div>
        <div className="col-sm-3">
        <img src={twitter} alt="" className='w-25 d-block mx-auto' />    
        <h4 className='text-center m-4'>TWITTER</h4>  
        <p className='m-5 text-center'>https://concentriasupporttwitter.com</p>
        </div>
        </div>
     </div>

    </div>
  )
}

export default Contactus