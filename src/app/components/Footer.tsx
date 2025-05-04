import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">IC</span>
              </div>
              <h4 className="font-heading font-bold text-lg">Innovation Cell</h4>
            </div>
            <p className="text-gray-400 mb-6">
              The Innovation Cell at NIT Raipur fosters a culture of innovation and entrepreneurship among students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white transition duration-300">Events</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition duration-300">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 3: Resources */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#brochure" className="text-gray-400 hover:text-white transition duration-300">Brochure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Event Calendar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on events and opportunities.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-r-md transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2023 Innovation Cell, NIT Raipur. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
