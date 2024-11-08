import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="bg-dark text-white p-4 fixed w-full top-0 z-10">
    <ul className="flex justify-center space-x-8">
      <li><Link href="#hero" className="hover:text-redAccent transition">Home</Link></li>
      <li><Link href="#about" className="hover:text-redAccent transition">About</Link></li>
      <li><Link href="#skills" className="hover:text-redAccent transition">Skills</Link></li>
      <li><Link href="#projects" className="hover:text-redAccent transition">Projects</Link></li>
      <li><Link href="#contact" className="hover:text-redAccent transition">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
