import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  const handleCall = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our Services' />
            
          </div>
          <div className='hero-content webView mobileView' >
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' />
            ))}
          </div>

          <div className='contact-tit'>
        <button onClick={handleCall} className='button-primary '>Contact US</button>
        </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
