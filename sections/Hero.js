import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
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
            <p ><b>Buzz Recovery</b> is a trusted provider of towing and roadside assistance services throughout London and the surrounding areas. We’ve been helping drivers with fast, professional towing and vehicle recovery. Our commitment to reliability and customer satisfaction sets us apart as a leading service provider.  we specialize in fast, reliable, and affordable towing services across London and the surrounding areas. Whether your car breaks down in Central London, the outskirts, or nearby towns, our team is available 24/7 to provide expert roadside assistance and vehicle recovery services.</p>
         
          </div>
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
