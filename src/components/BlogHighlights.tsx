import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogHighlights() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {blogPosts.map((post) => (
        <a 
          key={post.id}
          href={post.link || `/blog/${post.id}`}
          target={post.link ? "_blank" : "_self"}
          rel={post.link ? "noopener noreferrer" : ""}
          className="bg-white rounded-xl overflow-hidden border border-primary-100 hover:border-primary-300 transition-all group"
        >
          <div className="relative">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="p-6">
            <div className="text-sm text-primary-600 mb-2">{post.date}</div>
            <h3 className="text-xl font-semibold text-primary-900 mb-2">{post.title}</h3>
            <p className="text-primary-600 mb-4">{post.excerpt}</p>
            <span className="text-primary-900 font-medium flex items-center group-hover:translate-x-1 transition-transform">
              {post.link ? (
                <>
                  Read on LinkedIn
                  <ExternalLink className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}