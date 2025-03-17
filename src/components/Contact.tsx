'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="w-full py-8 md:py-12 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-2 text-center mb-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-gray-300 sm:text-3xl">
              {t('title')}
            </h2>
            <p className="mx-auto max-w-[500px] text-gray-500 text-sm">
              {t('description')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded border border-gray-800">
              <h3 className="text-lg font-mono text-gray-300 mb-4">$ contact_info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:cgmuros@gmail.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <FaEnvelope className="text-xl" />
                  <span className="font-mono">cgmuros@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-3">
                <div className="relative">
                  <div className="flex items-center space-x-1 text-gray-500 mb-0.5">
                    <span className="font-mono text-sm">$</span>
                    <span className="animate-pulse text-sm">_</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('namePlaceholder')}
                    className="w-full px-3 py-1.5 bg-gray-900 border border-gray-800 rounded text-gray-300 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-gray-700"
                    required
                  />
                </div>
                <div className="relative">
                  <div className="flex items-center space-x-1 text-gray-500 mb-0.5">
                    <span className="font-mono text-sm">$</span>
                    <span className="animate-pulse text-sm">_</span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('emailPlaceholder')}
                    className="w-full px-3 py-1.5 bg-gray-900 border border-gray-800 rounded text-gray-300 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-gray-700"
                    required
                  />
                </div>
                <div className="relative">
                  <div className="flex items-center space-x-1 text-gray-500 mb-0.5">
                    <span className="font-mono text-sm">$</span>
                    <span className="animate-pulse text-sm">_</span>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('messagePlaceholder')}
                    className="w-full px-3 py-1.5 bg-gray-900 border border-gray-800 rounded text-gray-300 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-gray-700 min-h-[100px]"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-3 py-1.5 bg-gray-800 text-gray-300 font-mono text-sm rounded hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin mr-1">⌛</span>
                    {t('sending')}
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <span className="mr-1">$</span>
                    {t('send')}
                  </span>
                )}
              </button>
            </form>
            {submitStatus === 'success' && (
              <div className="p-3 bg-gray-900 text-gray-300 font-mono text-sm rounded border border-gray-800">
                <span className="mr-1">✓</span>
                {t('success')}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 bg-gray-900 text-gray-300 font-mono text-sm rounded border border-gray-800">
                <span className="mr-1">✗</span>
                {t('error')}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 