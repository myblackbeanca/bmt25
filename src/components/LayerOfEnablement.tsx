import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers,
  GitBranch,
  Code2,
  GitFork,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: GitBranch,
    title: "Protocol Integration",
    description: "Seamlessly connect Web2 and Web3 systems with our advanced bridging technology"
  },
  {
    icon: Code2,
    title: "Developer Tools",
    description: "Comprehensive SDKs and APIs for rapid blockchain integration"
  },
  {
    icon: GitFork,
    title: "Smart Contract Interaction",
    description: "Simplified management and interaction with blockchain contracts"
  }
];

export default function LayerOfEnablement() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Layers className="h-16 w-16 text-primary-900" />
          </div>
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Understanding the Layer of Enablement
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Our revolutionary bridging technology connects traditional Web2 systems with 
            Web3 capabilities, enabling seamless integration and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border border-primary-100 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <feature.icon className="h-8 w-8 text-primary-900 mb-4" />
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/enablement"
            className="inline-flex items-center text-primary-900 hover:text-primary-600 font-semibold group"
          >
            Learn more about our Layer of Enablement
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}