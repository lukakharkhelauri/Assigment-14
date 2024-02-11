import React, { useState } from 'react';
import classes from '../modules/MainBox.module.scss';
import BlackLogo from '../images/logo-mastercraft.svg'
import ProgressBar from "@ramonak/react-progress-bar";
import TickPng from '../images/icon-check.svg'
import ClosePng from '../images/icon-close-modal.svg'
import PledgeBox from './PledgeBox'

const MainBox = () => {
  const [isBookmarked, setBookmarked] = useState(false);
  const [selectRewardModal, setSelectRewardModal] = useState(false);
  const [backThisProjectModal, setBackThisProjectModal] = useState(false);
  const [selectedPledge, setSelectedPledge] = useState(null);


  const handleSelectRewardClick = () => {
    setSelectRewardModal(true);
  };

  const handleSelectRewardClose = () => {
    setSelectRewardModal(false);
  };

  const handleBackThisProjectModalClick = () => {
    setBackThisProjectModal(true)
  }

  const handleBackThisProjectModalClose = () => {
    setBackThisProjectModal(false)
  }

  const handlePledgeSelect = (isSelected, title) => {
    setSelectedPledge(isSelected ? title : null);
  };




  return (
    <>
      <div className={classes.whiteBox}>
        <img src={BlackLogo} alt="Icon" className={classes.icon} />
        <h2>Mastercraft Bamboo Monitor Riser</h2>
        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className={classes.buttons}>
          <button onClick={handleBackThisProjectModalClick} className={classes.backButton}>Back this project</button>
          <button
            className={`${classes.bookmarkButton} ${isBookmarked && classes.bookmarked}`}
            onClick={() => setBookmarked(!isBookmarked)}
          >{isBookmarked ? 'Bookmarked' : 'Bookmark'}
          </button>
        </div>
      </div>


      {backThisProjectModal && (
         <div className={classes.modalOverlay} onClick={handleBackThisProjectModalClose}>
         <div className={classes.modalContainer}>
           <div className={classes.closeButtonContainer}>
             <button className={classes.closeButton} onClick={handleBackThisProjectModalClose}>
               <img src={ClosePng} alt="Close" />
             </button>
           </div>
           <h3 className={classes.modalTitle}>Back This Project</h3>
           <p className={classes.modalText}>
             Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
           </p>


            <div className={classes.modalRightBoxes}>
              <PledgeBox
                title="Pledge with no reward"
                amount="$10"
                description="Choose to support us without a reward if you simply believe in our project"
                left="81"
                stock={81}
                onSelect={handlePledgeSelect}
              />
              <PledgeBox
                title="Bamboo Stand"
                amount="$10"
                description="You get an ergonomic stand made from natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special backer member list."
                left="101"
                stock={101}
                onSelect={handlePledgeSelect}
              />
              <PledgeBox
                title="Black Edition Stand"
                amount="$10"
                description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
                left="64"
                stock={64}
                onSelect={handlePledgeSelect}
              />
              <PledgeBox
                title="Mahogany Special Edition"
                amount="$10"
                description="You get two Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
                left="0"
                stock={0}
                onSelect={handlePledgeSelect}
              />
            </div>
          </div>
        </div>
      )}


      <div className={classes.secondBox}>
        <div className={classes.titleSeparator}>
          <div className={classes.title}>$89,914</div>
          <div className={classes.title}>5,007</div>
          <div className={classes.title}>56</div>
        </div>
        <div className={classes.descriptionSeparator}>
          <div className={classes.description}>of $100,100 backed</div>
          <div className={classes.description}>total backers</div>
          <div className={classes.description}>days left</div>
        </div>
        <ProgressBar completed={70} maxCompleted={100} />
      </div>

      <div className={classes.thirdBox}>
        <h3>About this Project</h3>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
          your screen to a more comfortable viewing height. Placing your monitor at eye level has
          the potential to improve your posture and make you more comfortable while at work,
          helping you stay focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
          your computer to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>

        <div className={classes.rightBoxes}>
          <div className={classes.pledgeBox}>
            <h4>Bamboo Stand</h4>
            <p>Pledge $25 or more</p>
            <h6>You get an ergonomic stand made natural bamboo. You've helped us lunch our promotional camaign, and you'll be added to a special backer member list. </h6>
            <h4>101 Left</h4>
            <button onClick={handleSelectRewardClick}>Select Reward</button>
          </div>
          <div className={classes.pledgeBox}>
            <h4>Black Edition Stand</h4>
            <p>Pledge $75 or more</p>
            <h6>You get a Black Spectial Edition computer stand and personal thank you. you'll be added to our Backer member list. Shipping is included</h6>
            <h4>64 Left</h4>
            <button onClick={handleSelectRewardClick}>Select Reward</button>
          </div>
          <div className={classes.pledgeBox}>
            <h4>Mahogany Special Edition</h4>
            <p>Pledge $200 or more</p>
            <h6>You get two edition Mohagany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Becker member list. Shipping is included</h6>
            <h4>0 Left</h4>
            <button>Out of stock</button>
          </div>
        </div>
      </div>

      {selectRewardModal && <div className={classes.modalOverlay} onClick={handleSelectRewardClose} />}

      {selectRewardModal && (
        <div className={classes.modal}>
          <img src={TickPng} alt="Thank You" />
          <h4>Thank you for your support!</h4>
          <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
          <button onClick={handleSelectRewardClose}>Got it!</button>
        </div>
      )}

    </>
  );
};

export default MainBox;