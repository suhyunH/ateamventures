import React from 'react'
import useDatas from '../api/posts'
import Card from '../components/Card'
import Nav from '../components/Nav'
function Main() {

  return (
      <>
        <Nav />
        <div>Main</div>
        <Card />
      </>
  )
}

export default Main