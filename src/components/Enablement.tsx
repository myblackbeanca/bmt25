import React, { useState } from 'react';
import { 
  Layers, 
  GitBranch, 
  Code2, 
  GitFork, 
  Database, 
  Shield, 
  Users, 
  Key,
  Wallet,
  ArrowRight
} from 'lucide-react';
import ConsultationModal from './ConsultationModal';

const coreCapabilities = [
  {
    icon: GitBranch,
    title: "Protocol Integration",
    features: [
      "Translates between Web2 and Web3 protocols",
      "Handles blockchain interactions while maintaining familiar interfaces",
      "Ensures compatibility across diverse technological standards"
    ]
  },
  {
    icon: Key,
    title: "Core Services",
    features: [
      "Identity Management: Simplifies authentication across platforms",
      "Smart Contract Interaction: Enables seamless integration",
      "Token Gateways: Facilitates transfers and wallet connections",
      "Data Transformation: Standardizes and synchronizes data"
    ]
  },
  {
    icon: Code2,
    title: "Developer Tools",
    features: [
      "Ready-to-use APIs and SDKs for easier integration",
      "Development frameworks that abstract blockchain complexity",
      "Testing and deployment tools to accelerate implementation"
    ]
  }
];

const keyFunctions = [
  {
    icon: Database,
    title: "Middleware Synchronization",
    description: "Acts as middleware to synchronize Web2 and Web3 systems efficiently"
  },
  {
    icon: Shield,
    title: "Abstraction Layer",
    description: "Provides abstraction layers for blockchain operations, making them accessible to non-experts"
  },
  {
    icon: GitFork,
    title: "Cross-Chain Communication",
    description: "Handles cross-chain communication and ensures state synchronization"
  }
];

const realWorldExample = {
  title: "Real-World Example",
  description: "Imagine a user interacting with a crypto wallet through a standard website. Behind the scenes, the Layer of Enablement manages:",
  features: [
    "Wallet authentication",
    "Blockchain transaction handling",
    "Seamless user experience maintenance"
  ]
};

export default function Enablement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-primary-900 to-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Layers className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-6">
            The Layer of Enablement: Bridging Web2 and Web3 Seamlessly
          </h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            At the heart of the Black Bean Enablement Technology Suite is the Layer of Enablement—a powerful bridging layer designed to connect traditional Web2 systems with the transformative capabilities of Web3 and blockchain technologies.
          </p>
        </div>
      </div>

      {/* What Is Section */}
      <div className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">What Is the Layer of Enablement?</h2>
            <p className="text-xl text-primary-600">
              The Layer of Enablement serves as the "translation layer" between legacy systems and blockchain-based technologies, enabling businesses to leverage the best of both worlds without complexity or disruption.
            </p>
          </div>
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-16">Core Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl border border-primary-100 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <capability.icon className="h-8 w-8 text-primary-900 mb-4" />
                <h3 className="text-xl font-semibold text-primary-900 mb-4">{capability.title}</h3>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-primary-600">
                      <span className="w-2 h-2 bg-primary-900 rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Functions */}
      <div className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-900 mb-16">Key Functions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {keyFunctions.map((function_, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <function_.icon className="h-8 w-8 text-primary-900 mb-4" />
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{function_.title}</h3>
                <p className="text-primary-600">{function_.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real World Example */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl border border-primary-100">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">{realWorldExample.title}</h2>
            <p className="text-xl text-primary-600 mb-8">{realWorldExample.description}</p>
            <ul className="space-y-4">
              {realWorldExample.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3 text-primary-700">
                  <ArrowRight className="h-5 w-5 text-primary-900" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Empower Your Business with Black Bean</h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            With the Layer of Enablement, your business can transition to Web3 without disruption,
            access blockchain capabilities without technical hurdles, and offer cutting-edge features
            while maintaining a seamless user experience.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-white text-primary-900 rounded-lg hover:bg-primary-50 transition-colors"
          >
            Get Started
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