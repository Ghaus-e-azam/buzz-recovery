import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  const recipientEmail = "buzzrecovery@gmail.com";

  const handleEmailSend = () => {
    const mailtoLink = `mailto:${recipientEmail}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='Fast Towing & Roadside Assistance' /> <br />
            <TitleLogo title='Offering 24/7 towing and vehicle recovery services.' />
          </div>
          <div>
            <button onClick={handleEmailSend} className='button-primary'>Request a Quote</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
