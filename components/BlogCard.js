import React from "react"
import { Card } from "./common/Card"
import { blogdata } from "@/assets/data/dummydata"

const BlogCard = () => {
  return (
    <>
    
      <div className='container  grid-3 py heading-animation'>
        {blogdata.map((item) => (
          


          <div className='card' style={{}}>
          <div className='card-img'>
            <img src={item.cover} alt={item.title} />
          </div>
      
        </div>






        ))}
      </div>
    </>
  )
}

export default BlogCard
