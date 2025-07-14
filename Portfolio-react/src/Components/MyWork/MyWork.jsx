import React from 'react'
import"./MyWork.css"
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div className="my-work">
        <div className="my-work-title">
            <h1>My Work</h1>
        </div>
        <div className="my-work-container">
            {mywork_data.map((work,index)=>{
                return(
                    <img src={work.w_img} alt={work.w_name} className="my-work-img" key={index}/>



                )

            })}
        </div>
    </div>
  )
}

export default MyWork