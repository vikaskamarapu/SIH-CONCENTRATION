import React from 'react'
import './Homecss.css';
import img1 from '../images/simran1.jpg'
import face from '../images/facebook.png'
import insta from '../images/instagram.png'
import twit from '../images/twitter.png'
import lin from '../images/linkedin.png'
import img2 from '../images/simran2.jpg'
import img3 from '../images/simran3.jpg'
import img4 from '../images/simran4.jpg'
import giphy from '../gifs/giphy123.gif'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className='container'>
          <div className='row mt-5 first'>
                 <div className='col-6 left_home mx-auto p-5'>
                  <h1 className='left_home_head'>Concent<span className='text-light'>r<span className='text-danger'>i</span>a</span></h1>
                  <h2 className='left_home_text1'>"FOCUS ON CONCENTRATION</h2>
                  <h2 className='left_home_text1'>NEVER LET THE SMILE OFF..."</h2>
                
                 </div>
                 <div className='col-1 middle'>
                 <div className='social_media'>
                 <div className='row'><img src={face} className="w-50 ms-auto  mt-3"></img></div>
                 <div className='row'><img src={insta} className="w-50 ms-auto  mt-3"></img></div>
                 <div className='row'><img src={twit} className="w-50 ms-auto  mt-3"></img></div>
                 <div className='row'><img src={lin} className="w-50 ms-auto mt-3"></img></div>
                 </div>
                
                 </div>
                 <div className='col-5 simran_image p-0'>
                 <img src={img1} className="w-100"></img>
                 </div>
          </div>
          <div className='enhancement'>
                     <div className='row'>
                     <div className='col-6 left_enhance'><img src={img3} className="w-100 rounded float-left"></img>
                     <div className='overlay left'>
                                 <h1 className='text-center mt-5'>Whatever your mood is?</h1>
                                 <h1 className='text-center '>We deal them together...</h1>
                         <Link to="enhancement"> <button className='btn btn-dark text-light text-center p-3 enhance_now' ><h3>Enhance now</h3></button></Link>       
                     </div></div>
                           <div className='col-6 right_enhance'>
                           <h1 className='hap'>Happiness</h1>
                           <h2 className='sad'>Sadness</h2>
                           <h3 className='ang'>Anger</h3>
                           <h1 className='fea'>Fear</h1>
                           <h2 className='guil'>Guilt</h2>
                           <h3 className='surp'>Surprise</h3>
                           <h1 className='dej'>Dejected</h1>
                           <h2 className='fest'>Festive</h2>
                           <h3 className='greg'>Gregaroius</h3>
                           <h2 className='idy'>Idyllic</h2>
                           <h3 className='hope'>Hopeful</h3>
                           <h1 className='cheer'>Cheerful</h1>
                           <h2 className='dar'>Dark</h2>
                           <h1 className='hear'>Heartbroken</h1>
                           <h3 className='shy'>Shy</h3>
                           <h3 className='sent'>Sentimental</h3>
                           <h3 className='unst'>Unsteady</h3>
                           <h3 className='ten'>Tender</h3>
                           <h3 className='real'>Realistic</h3>
                           <h3 className='rese'>Resental</h3>
                           <h3 className='pea'>Peaceful</h3>
                           </div>
                         
                     </div>
          </div>
          <div className='analyze p-4'>
    <h1 className='analyze_heading'>We are here to analyze everything about your concentration</h1>
    <img className='pic1 d-block mx-auto' src={giphy}></img>
    <Link to="analysis"> <button className='btn btn-light text-dark text-center mx-auto w-100'>Analyze</button></Link>
    
    </div>
    </div>
  )
}
//Happiness,Sadness,Anger,Fear,Guilt,surprise
export default Home