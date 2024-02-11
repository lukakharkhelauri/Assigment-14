import React from 'react';
import classes from '../modules/index.module.scss';
import BgImage from '../images/image-hero-desktop.jpg';
import Logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <>
      <header className={classes.container}>
        <div className={classes.backgroundImage}>
          <img src={BgImage} alt="Background" />
        </div>
        <div className={classes.nav}>
          <img src={Logo} alt="Logo" className={classes.logo} />
          <div className={classes.buttons}>
            <button className={classes['nav-buttons']}>About</button>
            <button className={classes['nav-buttons']}>Discover</button>
            <button className={classes['nav-buttons']}>Get Started</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
