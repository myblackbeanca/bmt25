import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft } from 'lucide-react';

export default function BlogPage() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary-900">Post not found</h1>
          <Link to="/" className="text-primary-600 hover:text-primary-900 mt-4 inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary-600 hover:text-primary-900 mb-8 group transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <article className="prose lg:prose-xl max-w-none">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-primary-500 mb-8">
            <time>{post.date}</time>
          </div>
          {post.image && (
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8 filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          )}
          <div 
            className="prose prose-lg prose-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
      <Footer />
    </div>
  );
}