import React, { useState } from 'react';
import { Shield, Rocket, Users, BarChart3, Clock, Heart, Coins, TrendingUp } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

const features = [
  {
    icon: Shield,
    title: "AI, Web3, and Web2 Integration",
    description: "Seamlessly connect traditional systems with next-generation technology to future-proof your business."
  },
  {
    icon: Rocket,
    title: "Self-Hosted, Scalable Infrastructure",
    description: "Take control of your data and operations with a cost-efficient, self-hosted platform that grows with you."
  },
  {
    icon: Users,
    title: "Built for Everyone",
    description: "Perfect for startups, midsize companies, and solo entrepreneurs looking to scale their operations."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Results",
    description: "Leverage AI and blockchain for smarter monetization and business growth."
  }
];

const achievements = [
  { icon: Clock, title: "Save Time", desc: "Automate workflows and focus on what matters most" },
  { icon: Heart, title: "Engage Customers", desc: "Deliver personalized, data-driven experiences" },
  { icon: Coins, title: "Cut Costs", desc: "Avoid expensive subscriptions with a self-hosted system" },
  { icon: TrendingUp, title: "Grow Revenue", desc: "Leverage AI and blockchain for smarter monetization" }
];

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-br from-primary-900 to-primary-950">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Your One-Stop Solution to Scale, Simplify, and Future-Proof Your Business
          </h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Black Bean Enablement Technology Suite is designed to help businesses of all sizes navigate the digital age with ease.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl border border-primary-100 hover:border-primary-300 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-900 transition-colors">
                <feature.icon className="h-6 w-6 text-primary-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">{feature.title}</h3>
              <p className="text-primary-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What You'll Achieve */}
      <div className="bg-primary-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-900 text-center mb-12">What You'll Achieve</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-900 transition-colors">
                  <item.icon className="h-8 w-8 text-primary-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{item.title}</h3>
                <p className="text-primary-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Get Started Today</h2>
          <p className="text-xl text-primary-600 mb-8">
            Reimagine your business with the Black Bean Enablement Technology Suite.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>

      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}