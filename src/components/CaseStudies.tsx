import React from 'react';
import { Building2, Users, Heart } from 'lucide-react';

const caseStudies = [
  {
    icon: Building2,
    title: "Better Governance for Habitat for Humanity",
    description: "Implementing blockchain-based governance solutions to enhance transparency and efficiency in operations.",
    metrics: ["50% faster decision making", "100% transparent tracking", "30% cost reduction"]
  },
  {
    icon: Users,
    title: "Impacting 100k+ attendees with EventBuoy",
    description: "Revolutionizing event management with digital ownership and seamless attendee experiences.",
    metrics: ["100k+ attendees", "98% satisfaction rate", "Zero downtime"]
  },
  {
    icon: Heart,
    title: "Mental Health App during Covid",
    description: "Rapid deployment of a secure, scalable mental health platform during the pandemic.",
    metrics: ["1M+ users served", "24/7 availability", "15min response time"]
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Success Stories</h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Real impact, real results. See how we've helped organizations transform their operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-primary-100"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                  <study.icon className="h-6 w-6 text-primary-900" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">{study.title}</h3>
                <p className="text-primary-600 mb-6">{study.description}</p>
                <div className="space-y-2">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-primary-700">
                      <span className="w-2 h-2 bg-primary-900 rounded-full mr-2"></span>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}