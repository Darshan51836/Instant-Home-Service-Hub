import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import ServiceDisplay from '../../components/ServiceDisplay/ServiceDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <ServiceDisplay category={category}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>   
      {/* <AppDownload/> */}
    </>
  )
}

export default Home
