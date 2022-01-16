import React from 'react'
import About from './About2/About2';
import MoreAboutArtist from './MoreAboutArtist2/MoreAboutArtist2';
import MoreAboutArtwork from './MoreAboutArtwork2/MoreAboutArtwork2';

function MoreAbout2() {
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

export default MoreAbout2
