"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2, Shield } from 'lucide-react';
import styles from './CTA.module.css';

export default function CTA() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Failed to connect to the server.');
    }
  };

  const trustLines = [
    "Free consultation",
    "Response within 24 hours",
    "No obligation"
  ];

  return (
    <section className={styles.ctaSection} id="contact">
      <div className="container">
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.bgElements}>
            <div className={styles.circle}></div>
            <div className={styles.circle2}></div>
          </div>
          
          <div className={styles.grid}>
            {/* Left Info Side */}
            <div className={styles.infoSide}>
              <h2>Let’s Build Your Next <span className="gradient-text">Digital Product</span></h2>
              <p>Tell us about your idea — we’ll help you design, build, and scale it with the right technology.</p>
              
              <div className={styles.trustLines}>
                {trustLines.map((line, i) => (
                  <div key={i} className={styles.trustItem}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <Mail size={22} /> 
                  <a href="mailto:contact@gnosify.in">contact@gnosify.in</a>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={22} /> 
                  <a href="tel:+916003633316">+91 6003633316</a>
                </div>
              </div>
            </div>

            {/* Right Form Side */}
            <div className={styles.formSide}>
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    className={styles.successMessage}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={styles.successIcon}>
                      <CheckCircle2 size={48} />
                    </div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We’ll contact you soon.</p>
                    <button onClick={() => setStatus('idle')} className={styles.resetBtn}>
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    className={styles.form} 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={styles.inputGroup}>
                      <label htmlFor="name">Full Name*</label>
                      <input 
                        id="name"
                        type="text" 
                        placeholder="Your full name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email">Email Address*</label>
                      <input 
                        id="email"
                        type="email" 
                        placeholder="your@email.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="message">Project Details*</label>
                      <textarea 
                        id="message"
                        placeholder="Tell us about your project..." 
                        rows={4} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      ></textarea>
                      <span className={styles.helperText}>Briefly describe your project, goals, or requirements</span>
                    </div>

                    {status === 'error' && (
                      <div className={styles.errorMessage}>
                        <AlertCircle size={18} />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      className={styles.submitBtn} 
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <>Sending... <Loader2 size={18} className={styles.spinner} /></>
                      ) : (
                        <>Get Free Consultation <Send size={18} /></>
                      )}
                    </button>

                    <p className={styles.trustElement}>
                      <Shield size={14} />
                      <span>Your information is secure and will never be shared.</span>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
