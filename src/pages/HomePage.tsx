import React from 'react';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import CaseStudies from '../components/CaseStudies';
import LayerOfEnablement from '../components/LayerOfEnablement';
import BlogHighlights from '../components/BlogHighlights';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <CaseStudies />
      <LayerOfEnablement />
      <BlogHighlights />
      <Newsletter />
      <Footer />
    </>
  );
}