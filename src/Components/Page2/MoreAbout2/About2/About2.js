import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './About2.css'

function About2() {
  return (
    <>
      <div className='aboutDiv'>
              <div className='heading-title'>
                <h1>MQKSDJ</h1>
                  <div className='twitterLink'>
                    <a className="" href="https://twitter.com">
                      <FontAwesomeIcon className='twitterIcon' icon={faTwitter} />
                      <p><span>Twitter</span> Linked</p>
                    </a>
                  </div>
              </div>
              <div className='items-owner-price-volume-container'>
                <div className='items-div'>
                  <h2>394</h2>
                  <h6>items</h6>
                </div>
                <div className='owners-div'>
                  <h2>89</h2>
                  <h6>owners</h6>
                </div>
                <div className='price-div'>
                  <h2><FontAwesomeIcon className='ethIcon' icon={faEthereum} />  0.7</h2>
                  <h6>floor price</h6>
                </div>
                <div className='volume-div'>
                  <h2><FontAwesomeIcon className='ethIcon' icon={faEthereum} />  16.7</h2>
                  <h6>volume traded</h6>
                </div>                 
              </div>
              <p className='about-text'>MQKSDJ collection visualizes faces via the structure of geometric shapes. This collection illustrates faces of various categories including iconic faces, sculptures and notable people from history. Each face is unique and featured in its specific form. This project seeks to design the simplest way to indicate the distinctive basic elements of each character.</p>
              <p>The title "MQKSDJ" was inspired by the Masquerade ball.</p>

              <div className='work-process'>
                <p>See the work process and inspirations here: <br/>
                <span><a className="" href="https://www.behance.net">https://www.behance.net/gallery</a></span></p>
              </div>
            </div>
    </>
  )
}

export default About2
