import React from 'react'
import './Programs.css'
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import pro1 from '../../../assets/pro1.png'
import pro2 from '../../../assets/pro2.png'
import pro3 from '../../../assets/pro3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={img1} alt="" />
        <div className="caption">
            <img src={pro1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={img2} alt="" />
        <div className="caption">
            <img src={pro2} alt="" />
            <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={img3} alt="" />
        <div className="caption">
            <img src={pro3} alt="" />
            <p>Post-Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
