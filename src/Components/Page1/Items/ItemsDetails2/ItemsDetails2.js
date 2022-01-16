import React from 'react'
import pxart4 from "../../../../Assets/img/pxArt (4).png";
import pxart from "../../../../Assets/img/pic1.jpeg";
// import './ItemsDetails1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faClock, faHeart, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faAlignLeft, faArrowCircleUp, faCheckCircle, faChevronDown, faEllipsisV, faExternalLinkAlt, faListAlt, faRedo, faShareAlt, faStar, faTag, faTimes, faWallet } from '@fortawesome/free-solid-svg-icons';
import Tooltip from "react-simple-tooltip"
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
  },
};


function ItemsDetails2() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='details-container'>
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-md-5'>
            <div className='itemsDetails-container'>
              <div className='itemsDetails-img'>
                <div className='reactions'>
                <p><FontAwesomeIcon className='heartIcon' icon={faHeart} /> 46</p>
                </div>
                <img src={pxart4} alt=''/>
              </div>

              <div className='text-content'>
                <div className='descriptions'>
                  <div className='des-title'>
                    <h3><FontAwesomeIcon className='heartIcon' icon={faAlignLeft} /> Description</h3>
                  </div>
                  <div className='des-content'>
                    <small>Created by <a href=''> WFSHJR <FontAwesomeIcon className='heartIcon' icon={faCheckCircle} /></a></small>
                    <br/>
                    <p>"WFSHJR collection visualizes anime faces via the help of different visual effect of 3D art. This collection illustrates faces of various categories including iconic faces, and notable people from anime. Each face is unique and featured in its specific form. This project seeks to design the simplest way to indicate the basic elements of each character."</p>
                  </div>
                </div>
                <div className='about-content d-flex'>
                  <h5><FontAwesomeIcon className='heartIcon' icon={faAddressCard} /> About of 3D WFSHJR</h5>
                  <span><FontAwesomeIcon className='heartIcon' icon={faChevronDown} /></span>
                </div>
                <div className='detail-content d-flex'>
                  <h5><FontAwesomeIcon className='heartIcon' icon={faListAlt} /> Details</h5>
                  <span><FontAwesomeIcon className='heartIcon' icon={faChevronDown} /></span>
                </div>
              </div>
            </div>
          </div>


          <div className='col-md-7'>
            <div className='itemsDetails-contents d-flex'>
              <div className='itemsDetails-text'>
                <div>
                <p>WFSHJR</p>
                <h2># 9637</h2>

                <small>Owned by <span>WFSHJR</span></small> <span><FontAwesomeIcon className='heartIcon' icon={faHeart} /> 46 favorites</span>

                </div>
                <div className='placeBid-container'>
                  <div className='bid-time d-flex'>
                    <p><FontAwesomeIcon className='heartIcon' icon={faClock} /> Sale ends March 8, 2022 at 7:53pm +06 </p>
                    <span><FontAwesomeIcon className='heartIcon' icon={faQuestionCircle} /></span>
                  </div>
                  <div className='Minimum-bid-container'>
                    <small>Minimum bid</small>
                    <div className='d-flex'>
                    <h4> <FontAwesomeIcon className='ethIcon' icon={faEthereum} /> 2.5</h4>
                    <span>($8,313.70)</span>
                    <span><FontAwesomeIcon className='heartIcon' icon={faArrowCircleUp} /></span>
                    </div>
                    <button className='bidBtn'><FontAwesomeIcon className='heartIcon' icon={faWallet} /> Place bid</button>
                  </div>
                </div>
                <div className='listing-content d-flex'>
                    <h5><FontAwesomeIcon className='heartIcon' icon={faTag} /> Listing</h5>
                    <span><FontAwesomeIcon className='heartIcon' icon={faChevronDown} /></span>
                  </div>
              </div>
              <div className='moreMenu-container'>
                <div className='d-flex social'>
                  <div className='social-icon'>
                    <Tooltip className="tooltipContainer" content="Refresh Metadata">
                    <FontAwesomeIcon icon={faRedo} />
                    </Tooltip>
                  </div>
                  <div className='social-icon'>
                    <Tooltip className="tooltipContainer" content="View on WFSHJR 3D">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </Tooltip>
                  </div>
                  <div className='social-icon'>
                    <Tooltip className="tooltipContainer" content="Share">
                      <FontAwesomeIcon icon={faShareAlt} />
                    </Tooltip>
                  </div>
                  <div className='social-icon'>
                    <Tooltip className="tooltipContainer" content="More">
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </Tooltip>
                  </div>
                </div>
                <div className='check-art'>
                  <button onClick={openModal}>Check this art for delicacy</button>
                </div>

                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <button className='times' onClick={closeModal}><FontAwesomeIcon icon={faTimes} /></button>

                  <div className='check-text'>
                    {/* <ul>
                      <li>Duplicate art from other account/ID at OpenSea.</li>
                      <li>93% confidence</li>
                    </ul> */}
                  </div>
                  <div className='checkImg'>
                    {/* <img src={pxart} alt=''/> */}
                  </div>

                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemsDetails2

