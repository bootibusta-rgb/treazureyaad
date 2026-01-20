'use client';

import { useState, useEffect } from 'react';
import './globals.css';

export default function Home() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('cars');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('John');

  useEffect(() => {
    const ticker = document.getElementById('ticker-content');
    if (ticker) {
      ticker.innerHTML = 'Tesla Model 3 sold for $38k • Jamaica beach house gone for $220k • Fishing boat auction ends in 00:09:23';
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
              <button className="navbar-link">📊 Dashboard</button>
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
        <button className="ad-banner-btn">Advertise with us</button>
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
                <span className="activity-badge-title">Ducati Panigale Sold!</span>
                <span className="activity-badge-sub">18 minutes ago • Miami</span>
              </div>
            </div>
          </div>

          <img src="/treazure-yaad-logo.svg" alt="Treazure Yaad Background" className="hero-bg-logo" />
          <div className="hero-dark-overlay"></div>

          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">Treazure Yaad</span>
            </h1>
            <p className="hero-subtitle">
              Discover amazing deals on cars, properties, boats, and more. Join thousands of satisfied customers.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => openModal('signup')}>Get Started</button>
              <button className="btn-secondary" onClick={() => document.getElementById('featured')?.scrollIntoView()}>Explore Listings</button>
            </div>
          </div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </section>

        {/* Trust Bar */}
        <div className="trust-bar">
          <div className="trust-badge">
            <span className="trust-icon">🔒</span>
            <span className="trust-text">Secure Payments</span>
          </div>
          <div className="trust-badge">
            <span className="trust-icon">❤️</span>
            <span className="trust-text">10,000+ Happy Users</span>
          </div>
          <div className="trust-badge">
            <span className="trust-icon">✓</span>
            <span className="trust-text">Verified Sellers Only</span>
          </div>
          <div className="trust-badge">
            <span className="trust-icon">📞</span>
            <span className="trust-text">24/7 Support</span>
          </div>
        </div>

        {/* Featured Sellers Section */}
        <section className="featured-sellers-section">
          <h2 className="section-title">Featured Sellers</h2>
          <p className="section-subtitle">Top-rated dealers you can trust</p>
          <div className="sellers-grid">
            <div className="seller-card">
              <img className="seller-avatar" src="https://ui-avatars.com/api/?name=Marcus+D&background=a855f7&color=fff&size=80" alt="Marcus D." />
              <div className="seller-info">
                <div className="seller-name">Marcus D. • Kingston</div>
                <span className="seller-badge">Verified Dealer</span>
                <div className="seller-stats">Sold 124 cars • ⭐ 5.0 • Pro</div>
              </div>
              <div className="seller-hover">Specializes in luxury rides</div>
            </div>
            <div className="seller-card">
              <img className="seller-avatar" src="https://ui-avatars.com/api/?name=Sarah+J&background=3b82f6&color=fff&size=80" alt="Sarah J." />
              <div className="seller-info">
                <div className="seller-name">Sarah J. • Miami</div>
                <span className="seller-badge realtor">Verified Realtor</span>
                <div className="seller-stats">Sold 89 homes • ⭐ 4.9 • Pro</div>
              </div>
              <div className="seller-hover">Beachfront property expert</div>
            </div>
            <div className="seller-card">
              <img className="seller-avatar" src="https://ui-avatars.com/api/?name=Carlos+M&background=f59e0b&color=fff&size=80" alt="Carlos M." />
              <div className="seller-info">
                <div className="seller-name">Carlos M. • Nassau</div>
                <span className="seller-badge">Verified Dealer</span>
                <div className="seller-stats">Sold 67 boats • ⭐ 4.8 • Pro</div>
              </div>
              <div className="seller-hover">Caribbean yacht specialist</div>
            </div>
            <div className="seller-card">
              <img className="seller-avatar" src="https://ui-avatars.com/api/?name=Lisa+W&background=10b981&color=fff&size=80" alt="Lisa W." />
              <div className="seller-info">
                <div className="seller-name">Lisa W. • Minneapolis</div>
                <span className="seller-badge mechanic">Certified Mechanic</span>
                <div className="seller-stats">Sold 203 parts • ⭐ 5.0 • Pro</div>
              </div>
              <div className="seller-hover">Engine & performance parts</div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <h2 className="section-title">Browse Categories</h2>
          <p className="section-subtitle">Find exactly what you're looking for</p>
          <div className="categories-grid">
            <div className="category-card" data-color="blue" onClick={() => selectCategory('cars')}>
              <div className="category-icon">🚗</div>
              <h3 className="category-name">Cars</h3>
              <p className="category-count">6 listings</p>
              <div className="category-hover-effect"></div>
            </div>
            <div className="category-card" data-color="orange" onClick={() => selectCategory('trucks')}>
              <div className="category-icon">🚚</div>
              <h3 className="category-name">Trucks</h3>
              <p className="category-count">5 listings</p>
              <div className="category-hover-effect"></div>
            </div>
            <div className="category-card" data-color="red" onClick={() => selectCategory('motorcycles')}>
              <div className="category-icon">🏍️</div>
              <h3 className="category-name">Motorcycles</h3>
              <p className="category-count">4 listings</p>
              <div className="category-hover-effect"></div>
            </div>
            <div className="category-card" data-color="cyan" onClick={() => selectCategory('boats')}>
              <div className="category-icon">⛵</div>
              <h3 className="category-name">Boats</h3>
              <p className="category-count">4 listings</p>
              <div className="category-hover-effect"></div>
            </div>
            <div className="category-card" data-color="purple" onClick={() => selectCategory('planes')}>
              <div className="category-icon">✈️</div>
              <h3 className="category-name">Planes</h3>
              <p className="category-count">4 listings</p>
              <div className="category-hover-effect"></div>
            </div>
            <div className="category-card" data-color="teal" onClick={() => selectCategory('properties')}>
              <div className="category-icon">🏠</div>
              <h3 className="category-name">Properties</h3>
              <p className="category-count">6 listings</p>
              <div className="category-hover-effect"></div>
            </div>
            <div className="category-card" data-color="yellow" onClick={() => selectCategory('other')}>
              <div className="category-icon">🛠️</div>
              <h3 className="category-name">Other</h3>
              <p className="category-count">8 listings</p>
              <div className="category-hover-effect"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-background"></div>
          <div className="cta-content">
            <h2 className="cta-title">Ready to List Your Item?</h2>
            <p className="cta-subtitle">Join our marketplace and reach thousands of potential buyers</p>
            <button className="cta-button" onClick={() => openModal('signup')}>Create Your Listing</button>
          </div>
        </section>
      </main>

      {/* Sign Up Modal */}
      {showSignupModal && (
        <div className="modal-overlay" id="signupModal">
          <div className="modal-content">
            <button className="modal-close" onClick={() => closeModal()}>&times;</button>
            <h2 className="modal-title">Join as a Creator</h2>
            <p className="modal-subtitle">Sign up to start listing and selling</p>
            <form id="signupForm">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" id="signup-name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" id="signup-email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" className="form-input" id="signup-password" placeholder="••••••••" required minLength={8} />
              </div>
              <div className="form-group">
                <label className="form-label">What do you sell? *</label>
                <select className="form-select" id="signup-role" required>
                  <option value="" disabled selected>Select your seller type...</option>
                  <option value="realtor">🏠 Realtor</option>
                  <option value="car-dealer">🚗 Car Dealer</option>
                  <option value="mechanic">🔧 Mechanic</option>
                  <option value="appliance-seller">📺 Appliance Seller</option>
                  <option value="other">📦 Other</option>
                </select>
              </div>
              <div className="terms-checkbox-container">
                <input type="checkbox" className="terms-checkbox" id="signup-terms" />
                <label className="terms-label">
                  I agree to the <span className="terms-link">Terms of Service</span>, <span className="terms-link">Privacy Policy</span> & <span className="terms-link">Caribbean User Agreement</span>
                </label>
              </div>
              <button type="submit" className="create-ad-btn">Create Account</button>
              <div className="form-footer">
                Already have an account? <a href="#" onClick={() => { closeModal(); openModal('login'); }}>Sign in</a>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" id="loginModal">
          <div className="modal-content">
            <button className="modal-close" onClick={() => closeModal()}>&times;</button>
            <h2 className="modal-title">Welcome Back</h2>
            <p className="modal-subtitle">Sign in to your account</p>
            <form id="loginForm">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" className="form-input" placeholder="••••••••" required />
              </div>
              <button type="submit" className="create-ad-btn">Login</button>
              <div className="form-footer">
                Don't have an account? <a href="#" onClick={() => { closeModal(); openModal('signup'); }}>Sign up</a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}