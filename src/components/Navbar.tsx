import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFutureMenu, setShowFutureMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setShowFutureMenu(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setShowFutureMenu(false);
    }, 300);
    setTimeoutId(id);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://raw.githubusercontent.com/myblackbeanca/bmtwebsite/refs/heads/main/bmtlogo.png" 
                alt="Blackbean" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/focus-areas" className="text-primary-700 hover:text-primary-900">Focus Areas</Link>
            
            <div 
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-primary-700 hover:text-primary-900">
                Future Ready
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {showFutureMenu && (
                <div 
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="py-1">
                    <Link 
                      to="/oaas" 
                      className="block px-4 py-2 text-sm text-primary-700 hover:bg-primary-50"
                    >
                      Ownership as a Service
                    </Link>
                    <Link 
                      to="/enablement" 
                      className="block px-4 py-2 text-sm text-primary-700 hover:bg-primary-50"
                    >
                      Layer of Enablement
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/about" className="text-primary-700 hover:text-primary-900">About</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link to="/focus-areas" className="block px-3 py-2 text-primary-700 hover:text-primary-900">Focus Areas</Link>
            <Link to="/oaas" className="block px-3 py-2 text-primary-700 hover:text-primary-900">Ownership as a Service</Link>
            <Link to="/enablement" className="block px-3 py-2 text-primary-700 hover:text-primary-900">Layer of Enablement</Link>
            <Link to="/about" className="block px-3 py-2 text-primary-700 hover:text-primary-900">About</Link>
          </div>
        </div>
      )}

      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </nav>
  );
}