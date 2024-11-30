import React, { useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: '',
    bestTime: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('consultations')
        .insert([formData]);

      if (error) throw error;

      alert('Thank you for your interest! We will contact you soon.');
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-primary-500 hover:text-primary-700"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-primary-900 mb-4">Schedule a Consultation</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary-700">Name</label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-primary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-700">Email</label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-primary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-primary-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              required
              className="mt-1 block w-full rounded-md border-primary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="requirements" className="block text-sm font-medium text-primary-700">Project Requirements</label>
            <textarea
              id="requirements"
              required
              rows={4}
              className="mt-1 block w-full rounded-md border-primary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              value={formData.requirements}
              onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="bestTime" className="block text-sm font-medium text-primary-700">Best Time to Connect</label>
            <input
              type="text"
              id="bestTime"
              required
              placeholder="e.g., Weekdays 2-5pm EST"
              className="mt-1 block w-full rounded-md border-primary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              value={formData.bestTime}
              onChange={(e) => setFormData(prev => ({ ...prev, bestTime: e.target.value }))}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-900 text-white py-2 px-4 rounded-md hover:bg-primary-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}