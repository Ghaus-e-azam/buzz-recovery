import { blog } from "@/assets/data/dummydata"
import BlogCard from "@/components/BlogCard"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const PrivacyPolicy = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='Privacy Policy' /> <br />
            <br />
            <Title title='Terms and Conditions' />
          </div>
          <p style={{paddingLeft:'80px', paddingRight:'80px', paddingBottom:'100px', }}>Payments:

Payment should be cleared on delivery if otherwise stated.

We hold no responsibilty for any further damage caused  by recovering or transporting your vehicle.

We hiold no responsibilty for any items left in the vehicle.</p>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy
