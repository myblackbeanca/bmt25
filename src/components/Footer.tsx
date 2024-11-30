import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://raw.githubusercontent.com/myblackbeanca/bmtwebsite/refs/heads/main/bmtlogo.png" 
                alt="Blackbean" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-sm">
              Empowering businesses with cutting-edge technology solutions for the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/bmtcanada" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/bmtnext" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/bmtnext" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/focus-areas" className="hover:text-white transition-colors">Focus Areas</Link></li>
              <li><Link to="/oaas" className="hover:text-white transition-colors">Ownership as a Service</Link></li>
              <li><Link to="/enablement" className="hover:text-white transition-colors">Layer of Enablement</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="https://pitchperfect.myblackbean.ca/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pitch Perfect AI</a></li>
              <li><a href="tel:+14159367377" className="hover:text-white transition-colors">Text us: +1 (415) 936-7377</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Blackbean Technologies Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}