import React from 'react'
import './MoreAboutArtwork.css'

function MoreAboutArtwork() {
  return (
    <>
      <div className='More-About-Artwork-container'>
              <h3>More about Artwork</h3>

              <div className='communication-history d-flex'>
                <p>Type of artwork</p>
                <div className='history-box'>
                  <small>3D, 2D, VR</small>
                </div>
              </div>

              <div className='avg-reviews-container d-flex mt-5'>
                <p>Avg Reviews on artwork</p>
                <div className='review-box'>
                  <div className='d-flex'>
                    <span>1</span>
                    <span>2</span>
                    <span>2</span>
                  </div>
                  <div className='d-flex'>
                    <small>Creativity</small>
                    <small> Scarcity </small>
                    <small> estimated effort</small>
                  </div>
                  
                </div>
              </div>

              <div className='communication-history d-flex'>
                <p>Prior report no</p>
                <div className='history-box'>
                  <small>10</small>
                </div>
              </div>

              <div className='communication-history d-flex'>
                <p>Prior report category</p>
                <div className='history-box'>
                  <small>Fake collection/ possible scam</small>
                </div>
              </div>
            </div>
    </>
  )
}


export default MoreAboutArtwork
