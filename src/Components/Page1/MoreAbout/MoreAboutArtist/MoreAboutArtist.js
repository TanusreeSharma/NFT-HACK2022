import React from 'react'
import './MoreAbotArtist.css'
function MoreAboutArtist() {
  return (
    <>
      <div className='MoreAboutArtist-container'>
              <h3>More about Artist</h3>

              <div className='exp-follower-art-container'>
                <div className='exp'>
                  <h6>2</h6>
                  <small>Yrs of exp</small>
                </div>
                <div className='follower'>
                  <h6>559</h6>
                  <small>#of Twitter followers</small>
                </div>
                <div className='art'>
                  <h6>3d art</h6>
                  <small>Preferred genre</small>
                </div>
              </div>
              <div className='communication-history d-flex mt-4'>
                <p>Communication history of twitter</p>
                <div className='history-box'>
                  <small>20 post <br/>per month</small>
                </div>
              </div>
              <div className='communication-history d-flex'>
                <p>Type of post</p>
                <div className='history-box'>
                  <small>NFT promotion <br/>Community <br/>Greeting</small>
                </div>
              </div>
              <div className='communication-history d-flex'>
                <p>Type of <br/>tools used</p>
                <div className='history-box'>
                  <small>Photoshop, illustrator, color, tiltbrash</small>
                </div>
              </div>
            </div>
    </>
  )
}

export default MoreAboutArtist
