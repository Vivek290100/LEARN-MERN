import React from 'react'

const ListandKeys = () => {
  const array = ["vivek", "febin", "fazal", "Ashmr"];
  return (
    <div>
      <ul>
        {array.map((item,index) =>{
          return<li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default ListandKeys