import Services from "@/sections/Services"
import Head from "next/head"
import React from "react"
import BlogCard from '../components/BlogCard';
import { Title } from "@/components/common/Title";

const services = () => {
  return (
    <>
      <Head>
        <title>Our Work</title>
      </Head>
      <div className='heading-title'>
            <Title title='Our Work' />
           
          </div>
      <BlogCard />
    </>
  )
}

export default services
