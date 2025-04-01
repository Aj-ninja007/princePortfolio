import React from 'react';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';
import theme_pattern from '../../assets/theme_pattern.svg';
import './Contact.css';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Send form data to your backend (Node.js server)
    const res = await fetch("http://localhost:5000/submit", {  // Backend API
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    alert(res.message);  // Show success or error message based on response
  };

  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything you want me to work on.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <a href="mailto:princemishralko8@gmail.com">
                      <p>princemishralko8@gmail.com</p>
                    </a>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <a href="tel:+917068464529">
                      <p>+917068464529</p>
                    </a>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>India, Uttar Pradesh</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label>Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' required />
            <label>Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' required />
            <label>Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;



// import React, { useState } from 'react';
// import call_icon from '../../assets/call_icon.svg';
// import location_icon from '../../assets/location_icon.svg';
// import mail_icon from '../../assets/mail_icon.svg';
// import theme_pattern from '../../assets/theme_pattern.svg';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();

//     const json = JSON.stringify(formData);

//     try {
//       const res = await fetch('http://localhost:5000/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json'
//         },
//         body: json
//       });

//       const result = await res.json();
//       alert(result.message);
//     } catch (error) {
//       alert('Error sending message');
//     }
//   };

//   return (
//     <div id="contact" className="contact">
//       <div className="title-box">
//         <h1>Get in touch</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="contact-section">
//         <div className="contact-left">
//           <h1>Let's talk</h1>
//           <p>
//             I'm currently available to take on new projects, so feel free to send me a message about anything you
//             want me to work on.
//           </p>
//           <div className="contact-details">
//             <div className="contact-detail">
//               <img src={mail_icon} alt="" />
//               <a href="mailto:princemishralko8@gmail.com">
//                 <p>princemishralko8@gmail.com</p>
//               </a>
//             </div>
//             <div className="contact-detail">
//               <img src={call_icon} alt="" />
//               <a href="tel:+917068464529">
//                 <p>+917068464529</p>
//               </a>
//             </div>
//             <div className="contact-detail">
//               <img src={location_icon} alt="" />
//               <p>India, Uttar Pradesh</p>
//             </div>
//           </div>
//         </div>
//         <form onSubmit={onSubmit} className="contact-right">
//           <label>Your Name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <label>Your Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <label>Write your message here</label>
//           <textarea
//             name="message"
//             rows="8"
//             placeholder="Enter your message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//           <button type="submit" className="contact-submit">
//             Submit now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
