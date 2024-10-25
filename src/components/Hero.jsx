const Hero = () => {
  return (
    <section style={{
      height: '110vh',
      backgroundImage: 'url("https://i.postimg.cc/9XvhJv14/download-2.jpg")',
      backgroundSize: 'cover',     
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'start',
      color: 'black',
      textAlign: 'center'
    }}>
      <div>
        <h1 className="text-3xl text-white p-20 mt-20 ml-20 ">Welcome to My Personal Diary</h1>
        <p className="text-xl text-white ml-10">A place to capture your thoughts, experiences, and ideas.</p>
        {/* <a href="#about" style={{
          padding: '10px 20px',
          background: 'rgba(255, 255, 255, 0.8)',
          color: '#333',
          textDecoration: 'none',
          fontWeight: 'bold',
          borderRadius: '5px'
        }}>
          Explore
        </a> */}
      </div>
    </section>
  );
};

export default Hero;
