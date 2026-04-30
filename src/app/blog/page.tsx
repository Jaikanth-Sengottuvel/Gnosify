"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveGrid from "@/components/InteractiveGrid";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, Tag, Search, ArrowRight } from "lucide-react";
import styles from "./blog.module.css";
import PageHero from "@/components/PageHero";

const categories = [
  "All",
  "Web Development",
  "UI/UX Design",
  "SEO",
  "Digital Marketing",
  "AI & Automation",
  "E-Commerce",
  "Mobile Apps",
];

const posts = [
  {
    title: "Top 10 Features Every Business Website Must Have in 2026",
    excerpt: "Learn the essential features that make a website successful in 2026, from speed to interactivity.",
    category: "Web Development",
    readTime: "5 min",
    date: "May 10, 2026",
    image: "/blog/features.png",
    featured: true,
  },
  {
    title: "How to Rank #1 on Google in 2026 (Complete Guide)",
    excerpt: "The ultimate guide to mastering search engine optimization in the new era of search.",
    category: "SEO",
    readTime: "8 min",
    date: "May 08, 2026",
    image: "/blog/seo.png",
  },
  {
    title: "How Good UI Design Increases Conversion Rates",
    excerpt: "Discover how design influences user behavior and boosts your sales through better UX.",
    category: "UI/UX Design",
    readTime: "5 min",
    date: "May 05, 2026",
    image: "/blog/uiux.png",
  },
  {
    title: "How AI Automation Can Save 100+ Hours for Your Business",
    excerpt: "Automate repetitive tasks and focus on what really matters for your business growth.",
    category: "AI & Automation",
    readTime: "7 min",
    date: "Apr 28, 2026",
    image: "/blog/ai.png",
  },
  {
    title: "Custom Website vs Template: Which is Better?",
    excerpt: "Choosing between a custom build and a template can make or break your project's future.",
    category: "Web Development",
    readTime: "6 min",
    date: "Apr 15, 2026",
    image: "/blog/custom.png",
  },
  {
    title: "5 UI Mistakes That Are Killing Your Website",
    excerpt: "Common design errors that drive users away and how you can fix them easily.",
    category: "UI/UX Design",
    readTime: "4 min",
    date: "Apr 10, 2026",
    image: "/blog/mistakes.png",
  },
  {
    title: "SEO vs Paid Ads: Which is Better for Your Business?",
    excerpt: "A comparison of organic growth vs paid traffic to help you allocate your marketing budget.",
    category: "SEO",
    readTime: "6 min",
    date: "Apr 05, 2026",
    image: "/blog/ads.png",
  },
  {
    title: "How to Build a High-Converting E-Commerce Website",
    excerpt: "Proven strategies for creating online stores that turn browsers into loyal customers.",
    category: "E-Commerce",
    readTime: "9 min",
    date: "Mar 28, 2026",
    image: "/blog/ecommerce.png",
  },
];

const categoryColors: Record<string, string> = {
  "AI & Automation": "#1B5780",
  "Web Development": "#4EB5D0",
  "SEO": "#0c8a6e",
  "UI/UX Design": "#7c3aed",
  "Digital Marketing": "#db2777",
  "E-Commerce": "#b45309",
  "Mobile Apps": "#10b981",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  const featured = posts.find(p => p.featured) || posts[0];
  const others = filteredPosts.filter(p => p !== featured);

  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <InteractiveGrid />
      <Navbar />

      <PageHero 
        badge="Insights & Resources"
        title="Learn, Grow, and Stay Ahead of the Future"
        subtitle="Discover high-value strategies, tutorials, and insights to help you navigate the ever-evolving digital landscape and build your future."
        image="/blog_hero.png"
      />

      {/* Featured Blog */}
      {activeCategory === "All" && (
        <section className={styles.featuredSection}>
          <div className="container">
            <motion.div
              className={styles.featuredCard}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.featuredGrid}>
                <div className={styles.featuredImgWrapper}>
                  <img src={featured.image} alt={featured.title} className={styles.featuredImg} />
                  <div className={styles.featuredBadge} style={{ background: categoryColors[featured.category] }}>
                    Latest Story
                  </div>
                </div>
                <div className={styles.featuredContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.catTag} style={{ background: `${categoryColors[featured.category]}15`, color: categoryColors[featured.category] }}>
                      {featured.category}
                    </span>
                    <span className={styles.metaItem}><Clock size={14} /> {featured.readTime} read</span>
                  </div>
                  <h2 className={styles.featuredTitle}>{featured.title}</h2>
                  <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                  <button className={styles.readBtn}>
                    Read Article <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filtersWrapper}>
            <div className={styles.filters}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className={styles.searchBar}>
              <Search size={18} className={styles.searchIcon} />
              <input type="text" placeholder="Search articles..." />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className={styles.postsSection}>
        <div className="container">
          <div className={styles.grid}>
            <AnimatePresence mode="popLayout">
              {others.map((post, i) => (
                <motion.div
                  key={post.title}
                  className={styles.postCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  layout
                >
                  <div className={styles.cardImageWrapper}>
                    <img src={post.image} alt={post.title} className={styles.cardImage} />
                    <span className={styles.categoryBadge} style={{ background: categoryColors[post.category] }}>
                      {post.category}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.postMeta}>
                      <span className={styles.metaItem}><Clock size={13} /> {post.readTime} read</span>
                      <span className={styles.metaItem}>{post.date}</span>
                    </div>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                    <button className={styles.readMore}>
                      Read More <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {others.length === 0 && (
            <div className={styles.emptyState}>
              <p>No articles found in this category. Stay tuned for more!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div 
            className={styles.ctaCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className={styles.ctaContent}>
              <h2>Need help with your project?</h2>
              <p>Let's build something extraordinary together. Our team is ready to bring your ideas to life.</p>
            </div>
            <a href="/contact" className={styles.ctaBtn}>
              Let's Build <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
