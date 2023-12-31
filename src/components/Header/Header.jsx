import React from 'react';
import './Header.scss';
import Navigations from '../Navigations/Navigations';

const Header = () => {
  /* const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []); */

  return (
    <div className="Header">
      <div className='header-top-background' />

      <Navigations />
      <div className='header-top-background' />

      {/* <div className="video-container">
        <div className='dark-overlay' />
        <video
          ref={videoRef}
          src={rainVideo}
          type="video/mp4"
          className="video"
          autoPlay
          muted
          loop
        />
        <h1 className="video-text">Kutay Kurt</h1>
      </div> */}
    </div>
  );
};

export default Header;