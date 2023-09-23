import React from 'react'
import Home from './Home'
import Intro from './Intro'
import GuideLines from './GuideLines'
import Attributes from './Attributes'
import Faqs from './Faqs'
import Timeline from './Timeline'
import Rewards from './Rewards'
import Sponsors from './Sponsors'
import Privacy from './Privacy'
import Footer from './Footer'

const HomeBody = () => {
  return (
    <>
      <div  style={{borderBottom:"solid 0.5px grey "}}></div>
      <Home />
      <div  style={{borderBottom:"solid 0.5px grey "}}></div>
      <Intro  />
      <div  style={{borderBottom:"solid 0.5px grey "}}></div>
      <GuideLines  />
      <div  style={{borderBottom:"solid 0.5px grey "}}></div>
      <Attributes  />
      <div  style={{borderBottom:"solid 0.5px grey "}}></div>
       <Faqs  />
       <div  style={{borderBottom:"solid 0.5px grey "}}></div>
       <Timeline  />
       <div  style={{borderBottom:"solid 0.5px grey "}}></div>
       <Rewards  />
       <div  style={{borderBottom:"solid 0.5px grey "}}></div>
       <Sponsors />
       <div  style={{borderBottom:"solid 0.5px grey "}}></div>
       <Privacy  />
       <div  style={{borderBottom:"solid 0.5px grey "}}></div>
      

    </>
    
  )
}

export default HomeBody