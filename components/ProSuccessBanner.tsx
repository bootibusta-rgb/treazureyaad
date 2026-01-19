'use client';

import { useState, useEffect } from 'react';

export default function ProSuccessBanner() {
  const [show, setShow] = useState(false);
  const [plan, setPlan] = useState('');

  useEffect(() => {
    // Check URL params for upgrade success
    const params = new URLSearchParams(window.location.search);
    const upgradeStatus = params.get('upgrade');
    
    if (upgradeStatus === 'success') {
      setShow(true);
      setPlan('Pro');
      
      // Remove the query param from URL
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
      
      // Auto-hide after 10 seconds
      setTimeout(() => setShow(false), 10000);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="pro-success-banner">
      <div className="pro-success-content">
        <span className="pro-success-icon">🎉</span>
        <span className="pro-success-text">
          <strong>You're now Pro!</strong> Enjoy unlimited chat, featured listings, and priority support.
        </span>
        <button className="pro-success-close" onClick={() => setShow(false)}>
          ×
        </button>
      </div>

      <style jsx>{`
        .pro-success-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 1rem 2rem;
          z-index: 99999;
          animation: slideDown 0.5s ease;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .pro-success-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .pro-success-icon {
          font-size: 1.5rem;
        }

        .pro-success-text {
          font-size: 1rem;
        }

        .pro-success-close {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 1rem;
          transition: background 0.2s ease;
        }

        .pro-success-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
