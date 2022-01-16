import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faTh } from '@fortawesome/free-solid-svg-icons';
import pxart2 from "../../../Assets/img/pxArt (2).png";
import pxart4 from "../../../Assets/img/pxArt (4).png";
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faClock, faHeart } from '@fortawesome/free-regular-svg-icons';
import './Items.css'
// import {Link} from "react-router-dom";


function Items() {
  return (
    <div>
      <div className='container-fluid mb-5'>
        <div className='items-heder d-flex'>
          <h3><FontAwesomeIcon className='iconOfItems' icon={faTh} /> Items</h3>
          <h3><FontAwesomeIcon className='iconOfItems' icon={faChartLine} /> Activity</h3>
        </div>
        <div className='items-container'>
          <a href='/itemsDetails1'>
            <div className='items'>
              <img src={pxart2} alt=''/>
              <div className='d-flex items-content'>
                <div>
                  <small>WFSHJR</small>
                  <h6>9311</h6>
                </div>
                <div className='bid-content'>
                  <small>Top Bid</small>
                  <p className='eth'><FontAwesomeIcon className='etherIcon' icon={faEthereum} /> 0.06</p>
                  <p><FontAwesomeIcon className='clockIcon' icon={faClock} /> 3 days left</p>
                </div>
              </div>
              <div className='reaction'>
              <FontAwesomeIcon className='heartIcon' icon={faHeart} />
              </div>
            </div>
          </a>

          <a href='/itemsDetails2'>
            <div className='items'>
              <img src={pxart4} alt=''/>
              <div className='d-flex items-content'>
                <div>
                  <small>WFSHJR</small>
                  <h6>9637</h6>
                </div>
                <div className='bid-content'>
                  <small>Top Bid</small>
                  <p className='eth'><FontAwesomeIcon className='etherIcon' icon={faEthereum} /> 0.07</p>
                  <p><FontAwesomeIcon className='clockIcon' icon={faClock} /> 7 days left</p>
                </div>
              </div>
              <div className='reaction'>
              <FontAwesomeIcon className='heartIcon' icon={faHeart} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Items
