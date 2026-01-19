'use client';

import { useState } from 'react';

interface SidebarProps {
  activeCategory: 'cars' | 'properties';
  onCategoryChange: (category: 'cars' | 'properties') => void;
}

export default function Sidebar({ activeCategory, onCategoryChange }: SidebarProps) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Treazure Yaad</h1>
      </div>
      <nav className="sidebar-nav">
        <button
          className={`nav-item ${activeCategory === 'cars' ? 'active' : ''}`}
          onClick={() => onCategoryChange('cars')}
        >
          <span className="nav-icon">🚗</span>
          <span className="nav-text">Cars</span>
        </button>
        <button
          className={`nav-item ${activeCategory === 'properties' ? 'active' : ''}`}
          onClick={() => onCategoryChange('properties')}
        >
          <span className="nav-icon">🏠</span>
          <span className="nav-text">Properties</span>
        </button>
      </nav>
      <style jsx>{`
        .sidebar {
          width: 280px;
          height: 100vh;
          background: linear-gradient(180deg, var(--black) 0%, var(--gray-dark) 100%);
          border-right: 2px solid var(--purple);
          padding: 2rem 1.5rem;
          position: fixed;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          box-shadow: 4px 0 20px rgba(147, 51, 234, 0.2);
        }

        .sidebar-header {
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid var(--purple);
        }

        .sidebar-title {
          font-size: 1.75rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--purple) 0%, var(--blue) 50%, var(--orange) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: var(--gray-medium);
          border: 2px solid transparent;
          border-radius: 12px;
          color: var(--white);
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          width: 100%;
        }

        .nav-item:hover {
          background: var(--gray-light);
          border-color: var(--blue);
          transform: translateX(5px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .nav-item.active {
          background: linear-gradient(135deg, var(--purple-dark) 0%, var(--blue-dark) 100%);
          border-color: var(--yellow);
          box-shadow: 0 4px 20px rgba(234, 179, 8, 0.4);
        }

        .nav-item.active:hover {
          transform: translateX(5px);
        }

        .nav-icon {
          font-size: 1.5rem;
        }

        .nav-text {
          flex: 1;
        }
      `}</style>
    </div>
  );
}
