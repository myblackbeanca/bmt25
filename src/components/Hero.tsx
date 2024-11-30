import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-950 opacity-90" />
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-8 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Innovate. Transform. <span className="text-primary-200">Achieve.</span>
          </h1>
          
          <p className="text-xl text-primary-200">
            Empowering businesses with cutting-edge marketing technology solutions across AI, blockchain, 
            and creative design. Transforming ideas into impactful digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center px-8 py-3 bg-white text-primary-900 rounded-lg hover:bg-primary-100 transition-colors group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center px-8 py-3 bg-primary-800/30 text-white rounded-lg hover:bg-primary-800/40 transition-colors backdrop-blur-sm"
            >
              Schedule a Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-white" viewBox="0 0 1440 74" fill="none">
          <path d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,74L1360,74C1280,74,1120,74,960,74C800,74,640,74,480,74C320,74,160,74,80,74L0,74Z" fill="currentColor"/>
        </svg>
      </div>

      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}