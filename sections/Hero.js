import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  const phoneNumber = "+447898067523";

    const handleCall = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };
  return (
    <>
      <section className='hero heroM'>
        <div className='container heading-animation'>
          
          <h2 className='hero-title '>Looking for Leading Vehicle Recovery, Towing & Roadside Assistance – Buzz Recovery is Available 24/7 For You</h2>

          <div className="sos">
           
            🆘️0️⃣7️⃣8️⃣9️⃣8️⃣0️⃣6️⃣7️⃣5️⃣2️⃣3️⃣🆘️
          </div>
          <button onClick={handleCall} className='button-pri '>Contact US</button>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='About' />
           
          </div>
          <div >
          {/* <ShowCase/> */}
            <p ><b>Buzz Recovery</b> is a trusted partner for fast, reliable, and professional car recovery and roadside assistance services in London and surrounding areas. With years of experience, we specialize in towing services, fuel delivery, jump starts, tyre change and more to ensure you're never left stranded. We’re here to provide 24/7 assistance and get our customers back on the road quickly and safely. Our team is fully equipped with the latest tools and a fleet of modern recovery vehicles, ensuring that every job is handled efficiently. We take pride in offering prompt and affordable car recovery solutions, always aiming for 100% customer satisfaction.</p>
         
          </div>
        </div>
      
        <div className='contact-tit'>
        <button onClick={handleCall} className='button-primary '>Contact US</button>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
     

      <br/>
      
    </>
  )
}

export default Hero
