import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import Image from "next/image"

const Footer = () => {
  const phoneNumber = "+447898067523"; // Replace with the actual phone number

  const handleWhatsAppRedirect = () => {
    // WhatsApp link with pre-filled message (optional)
    const message = "Hello! I'd like to get in touch.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const recipientEmail = "buzzrecovery@gmail.com"; // Replace with recipient's email


  const handleEmailSend = () => {
    const mailtoLink = `mailto:${recipientEmail}`;
    window.location.href = mailtoLink;
  };

 

  const handleCall = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-3'>
            <div className='logo'>
              {/* <TitleLogo title='creative' caption='7' className='logobg' /> */}
          
              <br />
              <span>
                Questions? Reach us <br /> 24/7 Service
              </span>
              <br />
              <br />
              <h3 onClick={handleCall}><a href=''>+447898067523</a></h3>
             
              
              <h3 onClick={handleEmailSend}><a href=''> buzzrecovery@gmail.com</a></h3>
              <br/>
              <button onClick={handleWhatsAppRedirect} className='button-primary'>Message us on WhatsApp!</button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/ourWork'>Our Work</Link>
              </li>
              <li>
                <Link href='/privacyPolicy'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>

            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='https://www.facebook.com/syd.bukhari.9'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                
                 
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
          <div className='connect'>
              
              
              <Link href='/privacyPolicy'> <span>Privacy Policy</span> </Link>
            </div>
            <div className='text'>
              <span>Copyright © 2024 Buzz Recovery - All Rights Reserved.</span>
            </div>
            
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
