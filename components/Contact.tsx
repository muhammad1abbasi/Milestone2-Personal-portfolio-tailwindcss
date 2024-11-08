import React from 'react';

import { FaLinkedin, FaGithub, FaFacebook,} from 'react-icons/fa';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muhammad-abbasi-28a5b6300/',
    icon: <FaLinkedin className="text-2xl text-blue-500" />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/muhammad1abbasi',
    icon: <FaGithub className="text-2xl text-gray-300" />,
  },
  {
    name: 'Vercel',
    url: 'https://vercel.com/muhammad-s-projects-125b7fec',
    icon: (
        <svg
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path d="M12 2L24 22H0L12 2Z" />
        </svg>
      ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61553189043009&mibextid=ZbWKwL',
    icon: <FaFacebook className='text-2xl' />,
  },
  
];

const Contact: React.FC = () => (
  <section id="contact" className="py-16 bg-darkAlt text-white text-center">
    <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
    <p className="mb-8">Feel free to connect with me on these platforms:</p>
    
    <div className="flex justify-center space-x-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-redAccent transition-colors duration-300"
        >
          {link.icon}
          <span className="sr-only">{link.name}</span> 
        </a>
      ))}
    </div>
  </section>
);

export default Contact;
