"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, MessageSquare } from 'lucide-react';
import styles from './DetailedFAQ.module.css';

const faqs = [
  {
    category: "General",
    q: "What makes Gnosify different?",
    a: "We utilize AI to its fullest potential. We build intelligent systems that automate, learn, and scale your business by leveraging cutting-edge technology from day one."
  },
  {
    category: "Services",
    q: "Do I really need AI for my business?",
    a: "If you want faster operations, better decisions, and lower costs, yes. We apply AI where it creates real value for your specific business case, not just for the sake of it."
  },
  {
    category: "Process",
    q: "Can you turn my idea into a real product?",
    a: "Yes. From concept and UI/UX design to launch and scaling, we build and scale your product end-to-end, ensures a high-quality user experience."
  },
  {
    category: "Timeline",
    q: "How fast can you deliver?",
    a: "We follow modern agile methods and CI/CD pipelines to deliver iteratively and rapidly with continuous improvements, ensuring you see progress every week."
  },
  {
    category: "Scalability",
    q: "Will my solution be scalable?",
    a: "Absolutely. Everything we build is designed natively to grow and adapt alongside your business as your needs evolve, ensuring long-term viability."
  },
  {
    category: "General",
    q: "Do you offer consultations before starting a project?",
    a: "Yes, we provide initial consultations to understand your requirements and suggest the best technical approach tailored to your budget and goals."
  },
  {
    category: "Technical",
    q: "Can you help choose the right technology for my project?",
    a: "Absolutely. We guide you in selecting the most suitable tech stack based on your specific requirements, future scalability needs, and maintenance preferences."
  },
  {
    category: "General",
    q: "Do you work on short-term as well as long-term projects?",
    a: "Yes, we handle both focused short-term projects and multi-year long-term collaborations depending on your specific business requirements."
  },
  {
    category: "Technical",
    q: "Can your solutions integrate with existing systems?",
    a: "Yes, we ensure seamless integration with your current tools, platforms, and workflows to minimize disruption and maximize efficiency."
  },
  {
    category: "Security",
    q: "Is my idea safe with you?",
    a: "Yes. We ensure strict confidentiality, sign NDAs where required, and follow secure development practices to protect your data and intellectual property."
  }
];

export default function DetailedFAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={styles.faqPageSection}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>Common <span className="gradient-text">Questions</span></h1>
          <p className={styles.subtitle}>Find answers to the most common queries about our services, process, and methodology.</p>
          
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} size={20} />
            <input 
              type="text" 
              placeholder="Search for questions..." 
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.faqList}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className={styles.faqItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button 
                  className={styles.questionButton}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className={styles.qText}>
                    <span className={styles.categoryBadge}>{faq.category}</span>
                    <h3>{faq.q}</h3>
                  </div>
                  <ChevronDown className={`${styles.chevron} ${openIndex === index ? styles.chevronOpen : ""}`} />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      className={styles.answerWrapper}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className={styles.answerContent}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className={styles.noResults}>
              <MessageSquare size={48} />
              <p>No matching questions found. Please try a different search term.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
