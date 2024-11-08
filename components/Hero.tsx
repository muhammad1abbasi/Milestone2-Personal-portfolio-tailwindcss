const Hero: React.FC = () => (
    <section id="hero" className="h-screen bg-dark flex flex-col justify-center items-center text-center text-white">
      {/* Profile Image */}
      <img 
        src="/images/idimage.jpeg" 
        alt="Your Name" 
        className="w-40 h-40 rounded-full mb-4 border-4 border-redAccent"
      />
      
      {/* Name and Intro */}
      <h1 className="text-6xl font-bold">Muhammad</h1>
      <p className="mt-4 text-xl">Web Developer | Designer | Programmer</p>
      <button className="mt-8 px-6 py-3 bg-redAccent rounded-full hover:bg-red-700 transition duration-300">
        See My Work
      </button>
    </section>
  );
  
  export default Hero;
  