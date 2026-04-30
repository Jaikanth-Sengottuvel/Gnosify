"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: "What makes Gnosify different?",
    a: "We utilize AI to its fullest potential. We build intelligent systems that automate, learn, and scale your business by leveraging cutting-edge technology."
  },
  {
    q: "Do I really need AI for my business?",
    a: "If you want faster operations, better decisions, and lower costs, yes. We apply AI where it creates real value for your specific business case."
  },
  {
    q: "Can you turn my idea into a real product?",
    a: "Yes. From concept to launch, we build and scale your product end-to-end, ensuring a high-quality user experience."
  },
  {
    q: "How fast can you deliver?",
    a: "We follow agile methods to deliver quickly with continuous improvements, ensuring you see progress at every step of the development cycle."
  },
  {
    q: "How do you approach a new project?",
    a: "We understand your problem first, then design a smart, future-ready solution tailored to your goals."
  },
  {
    q: "Will my solution be scalable?",
    a: "Absolutely. Everything we build is designed natively to grow and adapt alongside your business as your needs evolve."
  },
  {
    q: "Do you provide scalable solutions for future growth?",
    a: "Yes, all our solutions are designed to adapt and scale as your needs evolve, ensuring long-term viability."
  },
  {
    q: "Can you improve my existing system?",
    a: "Yes. We upgrade, automate, and modernize your current software to improve efficiency and performance."
  },
  {
    q: "Can your solutions integrate with existing systems?",
    a: "Yes, we ensure seamless integration with your current tools, platforms, and workflows to minimize disruption."
  },
  {
    q: "Do you offer consultations before starting a project?",
    a: "Yes, we provide initial consultations to understand your requirements and suggest the best technical approach."
  },
  {
    q: "Is my idea safe with you?",
    a: "Yes. We ensure strict confidentiality and secure development practices to protect your intellectual property."
  },
  {
    q: "How do I get started?",
    a: "Contact us — we'll analyze your needs and guide you with the best intelligent solution for your roadmap."
  }
];

export default function FAQ({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section-padding ${styles.faqSection}`} id="faq">
      <div className="container">
        <div className={styles.intro}>
          <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
        </div>
        
        <div className={styles.faqContainer}>
          {displayFaqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <button 
                className={`btn-reset ${styles.question}`} 
                onClick={() => toggleOpen(index)}
                suppressHydrationWarning
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  size={24}
                  className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.answer}
                  >
                    <div className={styles.answerContent}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
