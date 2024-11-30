import React from 'react';
import { 
  Brain, 
  Blocks, 
  Users, 
  BarChart3, 
  Shield, 
  Rocket,
  Smartphone,
  Palette
} from 'lucide-react';

const solutions = [
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Advanced machine learning solutions for predictive analytics and automation.'
  },
  {
    icon: Blocks,
    title: 'Blockchain Solutions',
    description: 'Secure, transparent, and decentralized technology implementation.'
  },
  {
    icon: Users,
    title: 'Customer Experience',
    description: 'AI-powered engagement tools for personalized user interactions.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Data-driven decision making with real-time analytics.'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security protocols and compliance.'
  },
  {
    icon: Rocket,
    title: 'Innovation Lab',
    description: 'Cutting-edge R&D for emerging technologies.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Cross-platform development for seamless mobile experiences.'
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'User-centric design solutions that inspire and engage.'
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Core Solutions</h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Comprehensive suite of innovative solutions designed to transform your business
            through cutting-edge technology and creative excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white border border-primary-100 hover:border-primary-300 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-900 transition-colors">
                <solution.icon className="h-6 w-6 text-primary-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">{solution.title}</h3>
              <p className="text-primary-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}