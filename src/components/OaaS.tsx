import React, { useState } from 'react';
import { Link, Wallet, Shield, BarChart3, Boxes, GitBranch, Code2, GitFork, Database, Users } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

const coreFeatures = [
  {
    icon: Boxes,
    title: "Digital Asset Management",
    description: "Store, track, and manage ownership of digital assets securely. Tokenize assets for decentralized ownership and trading."
  },
  {
    icon: Shield,
    title: "Ownership Verification",
    description: "Use blockchain technology to ensure verifiable and tamper-proof ownership records."
  },
  {
    icon: Link,
    title: "Rights Management",
    description: "Manage distribution rights for digital content or goods. Define access rules and usage permissions."
  },
  {
    icon: Wallet,
    title: "Revenue Distribution",
    description: "Automate royalty payments and revenue sharing through smart contracts. Reduce the need for intermediaries."
  }
];

const keyComponents = [
  {
    title: "Smart Contract Infrastructure",
    features: [
      "Automates ownership transfers securely and instantly",
      "Distributes royalties to stakeholders without manual intervention",
      "Controls access to digital assets based on predefined rules"
    ]
  },
  {
    title: "Authentication Systems",
    features: [
      "Verify user identity and ownership records",
      "Manage permissions for accessing and sharing digital assets"
    ]
  },
  {
    title: "Monetization Tools",
    features: [
      "Implement subscription models for recurring revenue",
      "Track asset usage for transparent billing",
      "Support revenue-sharing agreements for content creators"
    ]
  }
];

const businessApplications = [
  {
    title: "For Content Creators",
    features: [
      "Monetize Digital Content: Sell music, art, or video directly to fans",
      "Track Usage: Ensure proper attribution and detect unauthorized use",
      "Manage Rights: Automate the licensing and royalty distribution process"
    ]
  },
  {
    title: "For Digital Products",
    features: [
      "NFT Creation: Launch NFTs to represent unique digital or virtual goods",
      "Digital Licenses: Offer customers ownership of software, ebooks, or assets",
      "Virtual Goods Ownership: Enable trade and ownership of virtual goods"
    ]
  },
  {
    title: "For Data Ownership",
    features: [
      "Personal Data Management: Empower users to own and control their data",
      "Data Monetization: Enable users to monetize their data securely",
      "Usage Rights Control: Define and enforce how data is used"
    ]
  }
];

export default function OaaS() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-primary-900 to-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ownership as a Service (OaaS): Empowering Digital Ownership
          </h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            A blockchain-enabled infrastructure for managing, verifying, and monetizing digital ownership.
            Designed for content creators, digital businesses, and innovators.
          </p>
        </div>
      </div>

      {/* Core Functionalities */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Core Functionalities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl border border-primary-100 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <feature.icon className="h-8 w-8 text-primary-900 mb-4" />
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{feature.title}</h3>
                <p className="text-primary-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Components */}
      <div className="bg-primary-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Key Components</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {keyComponents.map((component, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary-900 mb-4">{component.title}</h3>
                <ul className="space-y-2">
                  {component.features.map((feature, idx) => (
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

      {/* Business Applications */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Business Applications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {businessApplications.map((app, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl border border-primary-100 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-primary-900 mb-4">{app.title}</h3>
                <ul className="space-y-3">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="text-primary-600">
                      <strong className="text-primary-900">{feature.split(':')[0]}:</strong>
                      {feature.split(':')[1]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control?</h2>
          <p className="text-xl text-primary-200 mb-8">
            Discover how Ownership as a Service can transform your business.
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