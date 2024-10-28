import React from 'react'
import './Contact.css'
import msg from '../../../assets/msg.png'
import ph from '../../../assets/ph.png'
import loc from '../../../assets/loc.png'
import mail from '../../../assets/mail.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b6ee54ef-b3b0-42d2-8aa6-357bc99d05c7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className='contact'>
        <div className="contact_left">
            <h3>Send us a message <img src={msg} alt="" className='msg_img' /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <span ><img src={mail} alt="" className='mail_img' />Contact@Me.dev </span> <br />
            <span><img src={ph} alt="" className='ph_img' />+1 123-456-7890 </span> <br />
            <span><img src={loc} alt="" className='loc_img'/>77 Massachusetts Ave, Cambridge
            MA 02139, United States </span>
        </div>
        <div className="contact_right">
          <form onSubmit={onSubmit}>
            <label htmlFor="">Your name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required/> <br />
            <label htmlFor="">Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Number' required /> <br />
            <label htmlFor="">Your Email</label>
            <input type="email" name='mail' placeholder='Enter Your Email' required/> <br />
            <label htmlFor="">Write your messages here</label>
            <textarea name="message" id="" placeholder='Your Message' required rows={6}></textarea>
            <button className='f-btn'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
