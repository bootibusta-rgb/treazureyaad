'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import ListingCard from '@/components/ListingCard';
import { carsListings, propertiesListings, Listing } from '@/data/listings';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<'cars' | 'properties'>('cars');
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const currentListings: Listing[] = activeCategory === 'cars' ? carsListings : propertiesListings;
  const featuredListings = [...carsListings, ...propertiesListings].slice(0, 6);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '10,000+', label: 'Active Listings', icon: '📦' },
    { number: '50,000+', label: 'Happy Customers', icon: '😊' },
    { number: '500+', label: 'Daily Visitors', icon: '👥' },
    { number: '99%', label: 'Satisfaction Rate', icon: '⭐' },
  ];

  const categories = [
    { name: 'Cars', icon: '🚗', count: carsListings.length, color: '#3b82f6' },
    { name: 'Properties', icon: '🏠', count: propertiesListings.length, color: '#14b8a6' },
    { name: 'Trucks', icon: '🚚', count: 25, color: '#f97316' },
    { name: 'Boats', icon: '⛵', count: 18, color: '#06b6d4' },
  ];

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link href="/" className="navbar-logo">
            <Image 
              src="/treazure-yaad-logo.svg" 
              alt="Treazure Yaad" 
              width={180} 
              height={60} 
              priority 
            />
          </Link>
        </div>
        <div className="navbar-links">
          <Link href="/sign-up" className="navbar-link">
            Sign Up
          </Link>
          <Link href="/login" className="navbar-link">
            Login
          </Link>
        </div>
      </nav>

      <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      
      <main className="main-content">
        {/* Hero Section */}
        <section className={`hero ${isVisible ? 'visible' : ''}`}>
          {/* Full-screen logo background */}
          <Image 
            src="/treazure-yaad-logo.svg" 
            alt="Treazure Yaad Background" 
            width={1920}
            height={1080}
            priority 
            className="hero-bg-logo"
          />
          
          {/* Dark overlay for text readability */}
          <div className="hero-dark-overlay"></div>
          
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">Treazure Yaad</span>
            </h1>
            <p className="hero-subtitle">
              Discover amazing deals on cars, properties, and more. Join thousands of satisfied customers.
            </p>
            <div className="hero-buttons">
              <Link href="/sign-up" className="btn-primary">
                Get Started
              </Link>
              <button className="btn-secondary" onClick={() => document.querySelector('.featured-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Listings
              </button>
            </div>
          </div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={`stats-section ${isVisible ? 'visible' : ''}`}>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className={`categories-section ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Browse Categories</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="category-card"
                style={{ 
                  '--category-color': category.color,
                  animationDelay: `${index * 0.1}s`
                } as React.CSSProperties}
              >
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-count">{category.count} listings</p>
                <div className="category-hover-effect"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Listings */}
        <section className={`featured-section ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <h2 className="section-title">Featured Listings</h2>
            <p className="section-subtitle">Hand-picked selections just for you</p>
          </div>
          <div className="listings-grid">
            {featuredListings.map((listing, index) => (
              <div key={listing.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ListingCard listing={listing} />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`cta-section ${isVisible ? 'visible' : ''}`}>
          <div className="cta-content">
            <h2 className="cta-title">Ready to List Your Item?</h2>
            <p className="cta-subtitle">Join our marketplace and reach thousands of potential buyers</p>
            <Link href="/sign-up" className="cta-button">
              Create Your Listing
            </Link>
          </div>
          <div className="cta-background"></div>
        </section>
      </main>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 280px;
          right: 0;
          height: 70px;
          background: linear-gradient(90deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
          backdrop-filter: blur(10px);
          border-bottom: 2px solid var(--purple);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2.5rem;
          z-index: 100;
          box-shadow: 0 4px 20px rgba(147, 51, 234, 0.2);
        }

        .navbar-brand {
          display: flex;
          align-items: center;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .navbar-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .navbar-link {
          color: var(--white);
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          padding: 0.5rem 1.5rem;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--purple) 0%, var(--blue) 100%);
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(147, 51, 234, 0.3);
        }

        .navbar-link:hover {
          background: linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.5);
        }

        .container {
          display: flex;
          min-height: 100vh;
          background: var(--black-dark);
        }

        .main-content {
          margin-left: 280px;
          margin-top: 70px;
          width: calc(100% - 280px);
          min-height: calc(100vh - 70px);
        }

        /* Hero Section */
        .hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 4rem 2.5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .hero.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-bg-logo {
          position: absolute;
          top: 0;
          left: 0;
          width: auto;
          height: 100vh;
          object-fit: contain;
          z-index: 0;
        }

        @media (min-width: 768px) {
          .hero-bg-logo {
            object-fit: cover;
            width: 100%;
          }
        }

        .hero-dark-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.35);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 800px;
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          color: var(--white);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--purple) 0%, var(--blue) 50%, var(--orange) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #9ca3af;
          margin-bottom: 2.5rem;
          line-height: 1.6;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 700;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--purple) 0%, var(--blue) 100%);
          color: var(--white);
          box-shadow: 0 4px 20px rgba(147, 51, 234, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(147, 51, 234, 0.6);
        }

        .btn-secondary {
          background: transparent;
          color: var(--white);
          border: 2px solid var(--purple);
        }

        .btn-secondary:hover {
          background: rgba(147, 51, 234, 0.1);
          transform: translateY(-3px);
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 20s infinite ease-in-out;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          background: var(--purple);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          background: var(--blue);
          top: 60%;
          right: 15%;
          animation-delay: 5s;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          background: var(--orange);
          bottom: 20%;
          left: 50%;
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        /* Stats Section */
        .stats-section {
          padding: 4rem 2.5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .stats-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          background: linear-gradient(145deg, var(--gray-dark) 0%, var(--gray-medium) 100%);
          border: 2px solid var(--gray-light);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .stat-card:hover {
          transform: translateY(-10px);
          border-color: var(--purple);
          box-shadow: 0 12px 40px rgba(147, 51, 234, 0.3);
        }

        .stat-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--purple) 0%, var(--blue) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #9ca3af;
          font-size: 1rem;
          font-weight: 600;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Categories Section */
        .categories-section {
          padding: 4rem 2.5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .categories-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--purple) 0%, var(--blue) 50%, var(--orange) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .category-card {
          position: relative;
          background: linear-gradient(145deg, var(--gray-dark) 0%, var(--gray-medium) 100%);
          border: 2px solid var(--gray-light);
          border-radius: 20px;
          padding: 2.5rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s ease;
          overflow: hidden;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .category-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: var(--category-color);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
        }

        .category-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .category-card:hover .category-icon {
          transform: scale(1.2) rotate(10deg);
        }

        .category-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.5rem;
        }

        .category-count {
          color: var(--category-color);
          font-weight: 600;
        }

        .category-hover-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .category-card:hover .category-hover-effect {
          left: 100%;
        }

        /* Featured Section */
        .featured-section {
          padding: 4rem 2.5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .featured-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-header {
          margin-bottom: 3rem;
          text-align: center;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #9ca3af;
          margin-top: 0.5rem;
        }

        .listings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .listings-grid > div {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        /* CTA Section */
        .cta-section {
          position: relative;
          padding: 6rem 2.5rem;
          margin: 4rem 0;
          border-radius: 30px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .cta-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--purple) 0%, var(--blue) 100%);
          opacity: 0.1;
          z-index: 0;
        }

        .cta-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--white);
        }

        .cta-subtitle {
          font-size: 1.2rem;
          color: #9ca3af;
          margin-bottom: 2rem;
        }

        .cta-button {
          display: inline-block;
          padding: 1.2rem 3rem;
          background: linear-gradient(135deg, var(--purple) 0%, var(--blue) 100%);
          color: var(--white);
          text-decoration: none;
          border-radius: 12px;
          font-size: 1.2rem;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(147, 51, 234, 0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(147, 51, 234, 0.6);
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
          }
          .listings-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .navbar {
            left: 0;
            padding: 0 1.5rem;
          }

          .main-content {
            margin-left: 0;
            width: 100%;
          }

          .hero {
            min-height: 70vh;
            padding: 2rem 1.5rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .stats-section,
          .categories-section,
          .featured-section,
          .cta-section {
            padding: 2rem 1.5rem;
          }

          .listings-grid {
            grid-template-columns: 1fr;
          }

          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
