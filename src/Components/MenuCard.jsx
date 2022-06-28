import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
      <div className="container">
        <div className="row">
        {
          menuData.map((curElem)=>{
            const {id,image,name,course,duration,fee} = curElem;
            return(
                <div className="col-10 col-md-4 mt-5" key={id}>
                  <div className="card bg-primary">
                    <img src={image} alt="img"/>
                    <div className="card-body">
                      <p className='h2'>Name &nbsp; : &nbsp;{name}</p>
                      <p className='h3'>Course : {course}</p>
                      <p className='h4'>Duration : {duration}</p>
                      <p className='h4'>Fee : Rs {fee} &#8377;</p>
                    </div>
                  </div>
                </div>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

export default MenuCard;