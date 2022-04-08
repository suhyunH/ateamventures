import React from 'react'
import useDatas from '../api/posts';


function Card() {
  const {data, loading}=useDatas();
  console.log(data);
  return (
    <>
    {data.map(i=>(
          <ul key={i.id}>
              <li>{i.title}</li>
              <li>{i.amount}</li>
              <li>{i.client}</li>
              <li>{i.count}</li>
              <li>{i.due}</li>
          </ul>
    ))}
    </>
  


  )
    

  
  
}

export default Card