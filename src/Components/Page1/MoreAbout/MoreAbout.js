import React from 'react'
import About from './About/About';
import MoreAboutArtist from './MoreAboutArtist/MoreAboutArtist';
import MoreAboutArtwork from './MoreAboutArtwork/MoreAboutArtwork';

function MoreAbout() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row mt-5'>
          <div className='col-md-6'>
            <About/>
          </div>
          <div className='col-md-3'>
            <MoreAboutArtist/>
          </div>

          <div className='col-md-3'>
            <MoreAboutArtwork/>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoreAbout
