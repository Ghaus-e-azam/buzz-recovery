import { Title, TitleSm } from "@/components/common/Title"
import GoogleMapView from "@/components/GoogleMapView"
import Link from "next/link"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle, FiPhoneCall } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {

  const phoneNumber = "+447898067523"; // Replace with the actual phone number
  const recipientEmail = "buzzrecovery@gmail.com"; // Replace with recipient's email
    const handleCall = () => {
      const telLink = `tel:${phoneNumber}`;
      window.location.href = telLink;
    };
   const handleEmailSend = () => {
    const mailtoLink = `mailto:${recipientEmail}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
      <section className='contact bg-top'>
      <div className="contactContainerr contactContainerrM">
      <h1 className="headingContact headingContactM">Contact Us</h1>
    </div>
       
        <div className='container'>
          
          <br/>
          <Title title="Contact Us For 24/7 Roadside Assistance" className='title-bg' />
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiPhoneCall size={30} className='icons' />
                  <h3 onClick={handleCall}>+447898067523</h3>
                  <span>Call us: 24/7 Service</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>United Kingdom</h3>
                  <span>1 Midcroft, Slough, SL2 1HF</span>
                </div>
                
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3 onClick={handleEmailSend}>buzzrecovery@gmail.com</h3>
                  <span>Send us Email</span>
                </div>
              </div>
              <ul><div className='connect'>
                <li>
                  <Link href='https://www.facebook.com/syd.bukhari.9'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                
                 
              </div>
              </ul>
            </div>
            <div className='right w-70 '>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Fill out the form below to get our proposal. </p>

              <form>
                <div className='grid-2 mobileContact'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' />
                  </div>
                </div>
               
                <div className='inputs'>
                  <span>Message</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className='heading-title'>
        <Title title="Get Direction" className='title-bg' />
        </div>
        <GoogleMapView/>
      </section>

    
    </>
  )
}

export default Contact
