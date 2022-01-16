import React from 'react'
import './MoreAbotArtist2.css'

function MoreAboutArtist2() {
  return (
    <>
      <div className='MoreAboutArtist-container'>
              <h3>More about Artist</h3>

              <div className='exp-follower-art-container'>
                <div className='exp'>
                  <h6>16</h6>
                  <small>Yrs of exp</small>
                </div>
                <div className='follower'>
                  <h6>47k</h6>
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
                  <small>25 post <br/>per month</small>
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
                  <small>illustrator, 3D tool, VR softwares</small>
                </div>
              </div>
            </div>
    </>
  )
}

export default MoreAboutArtist2
