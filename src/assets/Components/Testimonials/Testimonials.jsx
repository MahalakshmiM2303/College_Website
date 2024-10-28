import React from 'react'
import './Testimonials.css'
import next from '../../../assets/next.png'
import  back from '../../../assets/back.png'
import test1 from '../../../assets/test1.png'
import test2 from '../../../assets/test2.png'




const Testimonials = () => {
  return (
    <div className='testimonials'>
      <img src={back} alt="" className='back-btn' />
      <img src={next} alt="" className='next-btn'/>
      <div className="slider">
        <ul>
            <li>
                <div className='slide'>
                <div className="user-info">
                    <img src={test1} alt="" />
                
                <div>
                    <h2>Emma Watson</h2>
                    <span>Edusity, USA</span>
                   
                </div>
                </div>
                <p> Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
            </li>
            <li>
                <div className='slide'>
                <div className="user-info">
                    <img src={test2} alt="" />
                
                <div>
                    <h2>William Jackson</h2>
                    <span>Edusity, USA</span>
                   
                </div>
                </div>
                <p> Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
            </li>
            
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
