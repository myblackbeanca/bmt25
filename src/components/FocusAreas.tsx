import React from 'react';
import { 
  Film, 
  Link, 
  Wallet,
  Users,
  PlayCircle,
  Share2,
  BarChart,
  Boxes,
  Coins,
  Receipt,
  LineChart,
  MessageCircle,
  Target,
  MessagesSquare
} from 'lucide-react';

const areas = [
  {
    title: "Media Solutions",
    subtitle: "Enhance Engagement and Brand Presence",
    description: "Leverage the power of media with tools designed to help you create, distribute, and analyze content effectively.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      { icon: PlayCircle, text: "Create Content: Easy-to-use tools for creating high-quality digital assets" },
      { icon: Share2, text: "Distribute at Scale: Targeted campaigns and multi-channel distribution" },
      { icon: BarChart, text: "Data-Driven Insights: Analytics to optimize reach and engagement" }
    ]
  },
  {
    title: "Ownership as a Service (OaaS)",
    subtitle: "Manage and Monetize Digital Ownership",
    description: "Blockchain-enabled infrastructure for managing digital assets and rights, automating revenue sharing, and ensuring transparent rights management.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      { icon: Boxes, text: "Blockchain-Powered Ownership: Verifiable, transparent records of digital ownership" },
      { icon: Link, text: "Tokenization: Convert assets into tradable digital tokens (e.g., NFTs)" },
      { icon: Coins, text: "Automated Royalties: Smart contracts for streamlined royalty payments" }
    ]
  },
  {
    title: "FinTech Integration",
    subtitle: "Streamline Payments and Financial Operations",
    description: "Simplify financial transactions with our FinTech tools ensuring seamless payments and secure processing.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      { icon: Wallet, text: "Global Payments: Secure, cross-border payments that are fast and efficient" },
      { icon: Receipt, text: "Subscription Models: Revenue-sharing solutions and automated invoicing" },
      { icon: LineChart, text: "Real-Time Transaction Data: Track and manage financial flows in real-time" }
    ]
  },
  {
    title: "Customer Experience",
    subtitle: "Personalize and Engage with AI-Driven Tools",
    description: "Transform customer interactions using AI-powered tools for deeper, more meaningful connections.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      { icon: Target, text: "AI-Powered Personalization: Tailor experiences to individual needs" },
      { icon: MessageCircle, text: "Real-Time Feedback: Capture and act on customer feedback instantly" },
      { icon: MessagesSquare, text: "Seamless Communication: Engage across multiple touchpoints" }
    ]
  }
];

export default function FocusAreas() {
  return (
    <section id="focus-areas" className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Our Focus Areas</h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Discover our specialized solutions designed to transform your business
            through innovative technology and strategic implementation.
          </p>
        </div>

        <div className="space-y-16">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-bold text-primary-900 mb-2">{area.title}</h3>
                    <h4 className="text-xl text-primary-600 mb-4">{area.subtitle}</h4>
                    <p className="text-primary-600 mb-8 text-lg">{area.description}</p>
                    
                    <div className="space-y-4">
                      {area.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <feature.icon className="h-6 w-6 text-primary-900" />
                          </div>
                          <p className="text-primary-700">{feature.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={area.videoUrl}
                      title={area.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}