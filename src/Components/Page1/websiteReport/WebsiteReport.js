import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Tooltip from "react-simple-tooltip"
import profileImg from '../../../Assets/img/profile.jpg'
import './WebsiteReport.css'



function WebsiteReport() {
  return (
    <>
      <div className='container-fluid'>
        <div className='profileImg'>
          <img src={profileImg} alt=''/>
        </div>
        <div className='d-flex social'>
          <div className='social-icon'>
            <Tooltip content="Website">
            <FontAwesomeIcon icon={faWindowMaximize} />
            </Tooltip>
          </div>
          <div className='social-icon'>
            <Tooltip content="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </Tooltip>
          </div>
          <div className='social-icon'>
            <Tooltip content="Report">
              <FontAwesomeIcon icon={faEllipsisV} />
            </Tooltip>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default WebsiteReport
