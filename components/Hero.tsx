import Image from "next/image";

const Hero: React.FC = () => (
    <section id="hero" className="h-screen bg-dark flex flex-col justify-center items-center text-center text-white">
      
      <Image 
      src={"/images/idimage.jpeg"}
      alt="this is my display image"
      height={150}
      width={150}
      className="rounded-full mb-4 border-4 border-redAccent"
      />
      
     
      <h1 className="text-6xl font-bold">Muhammad</h1>
      <p className="mt-4 text-xl">Web Developer | Designer | Programmer</p>
      <button className="mt-8 px-6 py-3 bg-redAccent rounded-full hover:bg-red-700 transition duration-300">
        See My Work
      </button>
    </section>
  );
  
  export default Hero;
  
