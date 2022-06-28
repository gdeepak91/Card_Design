import React from 'react'

const Navbar = ({ filterItem , menuList }) => {
  return (
    <>
      <nav className='navbar'>
        <div className='btn btn-group '>
          {menuList.map((curElem)=>{
            return(
              <button className='btn btn-success' onClick={()=>filterItem(curElem)} key={curElem.id}><h2>{curElem}</h2></button>
              );
            })}
            </div>
      </nav>
    </>
  );
};

export default Navbar