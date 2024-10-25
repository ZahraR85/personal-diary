import React from 'react';

const Hero = () => {
  return (
    <section style={{
      height: '100vh',
      background: 'url("personal-diary/src/images/download (2).jpeg") center/cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
      textAlign: 'center'
    }}>
      <div>
        <h1>Welcome to My Personal Diary</h1>
        <p>A place to capture your thoughts, experiences, and ideas.</p>
       {/* <a href="#about" style={{
          padding: '10px 20px',
          background: 'rgba(255, 255, 255, 0.8)',
          color: '#333',
          textDecoration: 'none',
          fontWeight: 'bold',
          borderRadius: '5px'
        }}>
          Explore
        </a>*/}
      </div>
    </section>
  );
};

export default Hero;
