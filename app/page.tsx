'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const = useState(false);
  const = useState('cars');
  const = useState(false);
  const = useState(false);
  const = useState(false);
  const = useState('John');

  useEffect(() => {
    const ticker = document.getElementById('ticker-content');
    if (ticker) {
      ticker.innerHTML = 'Tesla Model 3 sold for $38k • Jamaica beach house gone for $220k • Fishing boat auction ends soon';
    }
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const selectCategory = (cat: string) => setSelectedCategory(cat);
  const openModal = (type: string) => {
    if (type === 'signup') setShowSignupModal(true);
    if (type === 'login') setShowLoginModal(true);
  };
  const closeModal = () => {
    setShowSignupModal(false);
    setShowLoginModal(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/treazure-yaad-logo.svg" alt="Treazure Yaad" className="navbar-logo-img" />
        </div>
        <div className="navbar-links">
          <button className="navbar-link" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }} onClick={() => openModal('postListing')}>
            + Post Listing
          </button>
          {!loggedIn ? (
            <>
              <button className="navbar-link" onClick={() => openModal('signup')}>Sign Up</button>
              <button className="navbar-link" onClick={() => openModal('login')}>Login</button>
            </>
          ) : (
            <>
              <button className="navbar-link" onClick={() => alert('Go to dashboard')}>📊 Dashboard</button>
              <div className="navbar-online-status">
                <span className="online-dot online"></span>
                <span className="online-text online">Online</span>
              </div>
              <span className="user-badge">👤 {userName}</span>
              <button className="navbar-link" style={{ background: '#ef4444' }} onClick={() => setLoggedIn(false)}>Logout</button>
            </>
          )}
          <button className="pro-badge-nav">
            <span>🔒</span>
            <span>Pro</span>
          </button>
        </div>
      </nav>

      {/* Ticker Bar */}
      <div className="ticker-bar" id="ticker-bar">
        <div className="ticker-content" id="ticker-content"></div>
      </div>

      {/* Ad Banner */}
      <div className="ad-banner">
        <p className="ad-banner-text"><span className="sponsored-text">Sponsored:</span> Get your listing seen by 100k buyers</p>
        <button className="ad-banner-btn" onClick={() => alert('Contact us')}>Advertise with us</button>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? '' : 'collapsed'}`} id="sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-title flash-colors">Categories</h2>
          <button className="sidebar-toggle" id="sidebar-toggle" onClick={toggleSidebar} title="Toggle sidebar">
            <span className="toggle-icon">◀</span>
          </button>
        </div>
        <div className="category-section">
          <div className="category-section-title">Vehicles</div>
          <nav className="sidebar-nav" id="vehicles-nav">
            <a href="#" onClick={() => selectCategory('cars')}>Cars</a>
            <a href="#" onClick={() => selectCategory('trucks')}>Trucks</a>
            <a href="#" onClick={() => selectCategory('motorcycles')}>Motorcycles</a>
            <a href="#" onClick={() => selectCategory('boats')}>Boats</a>
            <a href="#" onClick={() => selectCategory('planes')}>Planes</a>
          </nav>
        </div>
        <div className="category-section">
          <div className="category-section-title">Parts</div>
          <nav className="sidebar-nav" id="parts-nav">
            <a href="#">Engine</a>
            <a href="#">Tires</a>
            <a href="#">Electronics</a>
          </nav>
        </div>
        <div className="category-section">
          <div className="category-section-title">Other</div>
          <nav className="sidebar-nav" id="other-nav">
            <a href="#" onClick={() => selectCategory('properties')}>Properties</a>
            <a href="#">Jewelry</a>
            <a href="#">Collectibles</a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`main-content ${sidebarOpen ? 'with-sidebar' : ''}`}>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-video-container">
            <video className="hero-video" autoPlay muted loop playsInline poster="https://images.pexels.com/videos/7578550/pexels-photo-7578550.jpeg">
              <source src="https://videos.pexels.com/video-files/7578550/7578550-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
            <div className="hero-bg-image"></div>
          </div>
          <div className="hero-overlay"></div>

          <div className="activity-badges">
            <div className="activity-badge">
              <span>🚗</span>
              <div className="activity-badge-text">
                <span className="activity-badge-title">Tesla Model 3 Sold!</span>
                <span className="activity-badge-sub">2 minutes ago • New York</span>
              </div>
            </div>
            <div className="activity-badge">
              <span>🏠</span>
              <div className="activity-badge-text">
                <span className="activity-badge-title">Beach Villa Purchased</span>
                <span className="activity-badge-sub">5 minutes ago • Malibu</span>
              </div>
            </div>
            <div className="activity-badge">
              <span>🚚</span>
              <div className="activity-badge-text">
                <span className="activity-badge-title">F-150 Raptor Deal Closed</span>
                <span className="activity-badge-sub">8 minutes ago • Dallas</span>
              </div>
            </div>
            <div className="activity-badge">
              <span>⛵</span>
              <div className="activity-badge-text">
                <span className="activity-badge-title">Boston Whaler Sold!</span>
                <span className="activity-badge-sub">12 minutes ago • Miami</span>
              </div>
            </div>
            <div className="activity-badge">
              <span>✈️</span>
              <div className="activity-badge-text">
                <span className="activity-badge-title">Cessna 172 Reserved</span>
                <span className="activity-badge-sub">15 minutes ago • Van Nuys</span>
              </div>
            </div>
            <div className="activity-badge">
              <span>🏍️</span>
              <div className="activity-badge-text">
                <span className="activity-badge-title">D