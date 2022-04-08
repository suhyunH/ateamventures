import React from 'react'
import useDatas from '../api/posts';
import { CardContainer } from './Card.styled';


function Card() {
  const {data, loading}=useDatas();
  return (
    <CardContainer>
      <div className='card-container'>

    {data.map(i=>(
      <div className='card' key={i.id}>
        <div className='head'> 
            <h4>{i.title}</h4>
            <span className='status'>{i.status==="상담중"? i.status : ''}</span>
        </div>
        <span className='client'>{i.client}</span>
        <span className='due'>{i.due}까지 납기</span>
        <hr />
        <table>
          <tr>
            <td>도면개수</td>
            <td>{i.count}개</td>
          </tr>
          <tr>
            <td>총 수량</td>
            <td>{i.amount}개</td>
          </tr>
          <tr>
            <td>가공방식</td>
            <td>{i.method.join(',')}</td>
          </tr>
          <tr>
            <td>재료</td>
            <td>{i.material.join(',')}</td>
          </tr>
        </table>
      </div>
    ))}
      </div>
    </CardContainer>
  


  )
    

  
  
}

export default Card