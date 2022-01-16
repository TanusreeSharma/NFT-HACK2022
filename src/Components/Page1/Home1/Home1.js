import React from 'react'
import MoreAbout from '../MoreAbout/MoreAbout';
import WebsiteReport from '../websiteReport/WebsiteReport';
import Header from '../Header/Header';
import Items from '../Items/Items';

function Home() {
  return (
    <div>
      
      <Header/>
      <WebsiteReport/>
      <MoreAbout/>
      <Items/>
    </div>
  )
}

export default Home
